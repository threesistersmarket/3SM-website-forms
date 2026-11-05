import React from 'react';
import { Link } from 'react-router-dom';
import { IoDocument } from 'react-icons/io5';

/*
 * Behavior story: A visitor who wants to keep learning after they leave
 * finds a short reading list sorted by topic and opens a source to read
 * later. These are links out for learning, not sign-up prompts.
 */
function CoopEducationResources() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Keep Reading</h2>
          <p className="max-w-2xl mx-auto">
            Sources we trust on cooperatives, food justice, and food sovereignty.
          </p>
        </div>

        {/* Featured Resource */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-accent-3">Market Assessment & Strategic Study</h3>
              <p className="text-gray-600 mb-4">
                View the comprehensive WBNC West Boulevard Market Assessment & Strategic Revitalization Study. This detailed analysis provides insights into our community's needs and strategic planning.
              </p>
              <a 
                href="https://westblvdnc.org/wp-content/uploads/2020/05/WBNC-West-Boulevard-Market-Assessment-Strategic-Revitalization-Study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-3 text-white px-6 py-3 rounded-lg hover:bg-accent-1 hover:text-white transition-colors"
              >
                <IoDocument className="w-5 h-5" />
                View Study (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Co-op Basics</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#coop-model" className="hover:text-accent-1">• What is a Co-op?</Link>
              </li>
              <li>
                <a href="https://www.ica.coop/en/cooperatives/cooperative-identity" target="_blank" rel="noopener noreferrer"  className="hover:text-accent-1">• The 7 Cooperative Principles (ICA)</a>
               </li>
              <li>
                <a href="https://uwcc.wisc.edu/resources/governance-2" target="_blank" rel="noopener noreferrer" className="hover:text-accent-1">• Governance Structure</a>
              </li>
              <li>
                <a href="https://www.federation.coop/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-1">• Federation of Southern Cooperatives</a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Food Justice &amp; Sovereignty</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://foodispower.org/access-health/food-deserts/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-1">• Understanding Food Deserts</a>
                </li>
              <li>
                <a href="https://www.aecf.org/blog/communities-with-limited-food-access-in-the-united-states/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-1">• Community Impact</a>
                </li>
              <li>
                <a href="https://nyeleni.org/IMG/pdf/DeclNyeleni-en.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent-1">• Declaration of Nyéléni (Food Sovereignty)</a>
                </li>
              <li>
                <a href="https://westblvdnc.org/three-sisters-market" target="_blank" rel="noopener noreferrer" className="hover:text-accent-1">• Local Partnerships</a>
             </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoopEducationResources;