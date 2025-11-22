import React from 'react';
import { X } from 'lucide-react';

interface HealthCommitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HealthCommitmentModal: React.FC<HealthCommitmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#231f1e] rounded-2xl shadow-2xl border border-[#3a342f] w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#3a342f]">
          <div>
            <h2 className="text-2xl font-bold text-white">Health Commitment Statement</h2>
            <p className="text-sm text-gray-400 mt-1">HQ Recovery</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-[#2a2520] rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6">
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            {/* Company Info */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">HQ RECOVERY</h3>
              <p className="text-sm"><strong className="text-[#d8ba5b]">G-Castle Recovery Ltd</strong></p>
              <p className="text-sm">84B Shandon Gardens, Phibsborough, Dublin 7, D07 X759</p>
              <p className="text-sm">
                <a href="mailto:team@hqrecovery.com" className="text-[#d8ba5b] hover:text-[#c9a852]">team@hqrecovery.com</a>
                {' | '}
                <a href="tel:+353838203627" className="text-[#d8ba5b] hover:text-[#c9a852]">+353 83 820 3627</a>
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">1. Our Commitment to Your Health, Safety & Privacy</h4>
              <p>At HQ Recovery, your health, wellbeing, privacy, and safety are our top priorities. This Health Commitment Statement outlines what you can expect from us, and what we expect from you. It works alongside our Privacy Policy, Liability Waiver, and Facility Terms of Use.</p>
            </section>

            {/* Section 2 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">2. Safe, High-Quality Facilities</h4>
              <p className="mb-2">We commit to providing well-maintained recovery equipment including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Hot Plunge (38°C)</li>
                <li>Cold Plunge (4°C)</li>
                <li>Wood-Stove Sauna (90–110°C)</li>
                <li>Therabody Compression Boots (25–100 mmHg pressure; 20/40/60 min or continuous)</li>
                <li>Massage guns, foam rollers, and mobility tools</li>
              </ul>
              <p className="mt-2">Equipment is maintained in accordance with manufacturer guidelines.</p>
            </section>

            {/* Section 3 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">3. Facility Supervision</h4>
              <p>Our facility is partially supervised. Staff are on-site and have access to cameras but are not always inside the recovery room.</p>
            </section>

            {/* Section 4 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">4. Information, Signage & Safety Guidance</h4>
              <p>We provide clear instructions, contraindications, temperature guidance, and emergency procedures to support safe use of the facilities.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">5. Privacy & GDPR Commitments</h4>
              <p className="mb-2">We only collect necessary information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Contact details</li>
                <li>Health declarations</li>
                <li>Emergency contact</li>
                <li>Signed waiver</li>
                <li>Booking and usage records</li>
                <li>Device/IP information for digital forms</li>
              </ul>
              <p className="mt-2">Data is processed under GDPR and stored securely. Retention: for as long as a person uses the facility + 24 months. You may request access, correction, or deletion (where legally permissible).</p>
            </section>

            {/* Section 6 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-3">6. Your Responsibilities</h4>

              <div className="ml-4 space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-1">6.1 Personal Health Responsibility</h5>
                  <p className="mb-2">You must ensure you are medically fit to participate and stop immediately if unwell.</p>
                  <p className="mb-1">Conditions requiring medical caution include:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Heart/blood pressure issues</li>
                    <li>Respiratory problems</li>
                    <li>Circulatory disorders</li>
                    <li>Diabetes</li>
                    <li>Raynaud's or cold sensitivity</li>
                    <li>Pregnancy (pending insurer confirmation)</li>
                    <li>Neurological/balance issues</li>
                    <li>Recent surgery or injury</li>
                    <li>Infection or fever</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-1">6.2 Zero-Tolerance Policy</h5>
                  <p className="mb-1">You must not use any facility if under the influence of:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Alcohol</li>
                    <li>Illegal drugs</li>
                    <li>Impairing medication</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-1">6.3 Safe Behaviour</h5>
                  <p className="mb-1">You agree to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Follow all instructions and signage</li>
                    <li>Use equipment responsibly</li>
                    <li>Maintain personal hygiene</li>
                    <li>Report hazards</li>
                    <li>Avoid running, jumping, or unsafe movements</li>
                    <li>Enter and exit hot/cold environments slowly</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-1">6.4 Accuracy of Information</h5>
                  <p>You confirm that all information you provide is true, accurate, and complete.</p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">7. Safety During Sessions</h4>
              <p className="mb-1">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Monitoring your own physical condition</li>
                <li>Staying hydrated</li>
                <li>Adhering to recommended exposure times</li>
                <li>Leaving equipment immediately if you experience dizziness, pain, numbness, breathing difficulty, confusion, or any unusual sensation</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">8. Emergencies</h4>
              <p className="mb-1">You agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Leave equipment immediately if unwell</li>
                <li>Notify staff promptly</li>
                <li>Accept first aid if needed</li>
                <li>Understand that emergency services may be called if necessary</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">9. Respectful Conduct</h4>
              <p className="mb-1">You agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Treat staff and users respectfully</li>
                <li>Use equipment properly</li>
                <li>Follow fair-use rules</li>
                <li>Report damages or issues</li>
              </ul>
              <p className="mt-2">Failure to follow rules may result in removal from the facility.</p>
            </section>

            {/* Section 10 */}
            <section>
              <h4 className="text-lg font-semibold text-white mb-2">10. Agreement</h4>
              <p className="mb-1">By entering HQ Recovery or using any facility, you confirm that:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You have read and understood this Health Commitment Statement</li>
                <li>You accept responsibility for your wellbeing</li>
                <li>You agree to follow all safety rules</li>
                <li>You understand your data will be processed as described in our Privacy Policy</li>
                <li>You acknowledge that recovery activities involve inherent risks</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#3a342f] p-6">
          <button
            onClick={onClose}
            className="w-full bg-[#d8ba5b] text-[#231f1e] py-3 px-4 rounded-lg font-semibold hover:bg-[#c9a852] transition-all duration-200 transform hover:scale-[1.02]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
