const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

export async function handler(event) {
  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  // Allow only POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email, FNAME, LNAME, PHONE, MESSAGE, TOPIC, SOURCE } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    const listId = process.env.MAILCHIMP_LIST_ID;
    const subscriberHash = require('crypto').createHash('md5').update(email.toLowerCase()).digest('hex');

    // Attempt to create a new subscriber, if error occurs (404), update the existing subscriber
    try {
      // Try adding the new subscriber
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: 'subscribed',
        merge_fields: { FNAME, LNAME, PHONE, MESSAGE, TOPIC, SOURCE },
        tags: ['Contact Form']
      });

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'New subscriber added successfully' }),
      };
    } catch (error) {
      if (error.status === 400) {
        // If the subscriber already exists, update their information
        await mailchimp.lists.updateListMember(listId, subscriberHash, {
          merge_fields: { FNAME, LNAME, PHONE, MESSAGE, TOPIC, SOURCE },
          status_if_new: 'subscribed',
          tags: ['Contact Form']
        });

        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: 'Subscriber updated successfully' }),
        };
      }

      // Re-throw if the error is not a 404
      throw error;
    }
  } catch (error) {
    console.error('Mailchimp API Error:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Failed to submit form. Please try again later.' }),
    };
  }
};
