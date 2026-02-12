import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          TERMS AND CONDITIONS — NeighborConnector™
        </h1>
        <div className="text-sm text-gray-600">
          <p>
            <strong>Effective Date:</strong> January 1, 2025
          </p>
          <p>
            <strong>Last Updated:</strong> January 1, 2025
          </p>
        </div>
        <p className="mt-4 text-gray-700">
          These Terms and Conditions ("Terms") govern your access to and use of
          the NeighborConnector™ mobile application ("the App"), operated by
          Community Care Housing ("Community Care Housing," "CCH," "we," "us,"
          or "our").
        </p>
        <p className="mt-2 text-gray-700">
          By downloading, accessing, or using the App, you agree to be bound by
          these Terms. If you do not agree, do not use the App.
        </p>
        <p className="mt-2 text-gray-700">
          Community Care Housing is a United States–based 501(c)(3) nonprofit
          organization headquartered in Colorado.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            1. Purpose of the App
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              NeighborConnector™ is a community-based communication and safety
              support tool designed to help neighbors, volunteers, and community
              members connect, communicate, and support one another.
            </li>
            <li>
              The App is not an emergency response service, medical device, or
              professional service platform.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            2. Eligibility
          </h2>
          <p className="text-gray-700 mb-3">To use the App, you must:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
            <li>Be at least 13 years of age</li>
            <li>Have the legal capacity to agree to these Terms</li>
            <li>Provide accurate and truthful information</li>
          </ul>
          <p className="text-gray-700">
            We may suspend or terminate accounts that do not meet these
            requirements.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            3. User Accounts
          </h2>
          <p className="text-gray-700 mb-3">You are responsible for:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
            <li>Maintaining the confidentiality of your login credentials</li>
            <li>All activity that occurs under your account</li>
            <li>Promptly notifying us of any unauthorized use</li>
          </ul>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate accounts for violations
            of these Terms or misuse of the App.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            4. User Conduct
          </h2>
          <p className="text-gray-700 mb-3">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
            <li>Use the App for unlawful, harmful, or fraudulent purposes</li>
            <li>Harass, threaten, or harm other users</li>
            <li>Post false, misleading, or impersonating content</li>
            <li>
              Upload content that violates privacy or intellectual property
              rights
            </li>
            <li>Attempt to interfere with App security or functionality</li>
          </ul>
          <p className="text-gray-700">
            We may remove content or restrict access at our discretion to
            protect users and the community.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            5. User Content
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              You retain ownership of content you submit to the App ("User
              Content").
            </li>
            <li>
              By submitting User Content, you grant Community Care Housing a
              non-exclusive, royalty-free, limited license to use, store,
              display, and process such content solely to operate and improve
              the App.
            </li>
            <li>
              You are responsible for ensuring you have the right to share any
              content you upload, including photos of others.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            6. Safety Disclaimer
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              NeighborConnector™ is intended to support community communication
              and awareness only.
            </li>
            <li>The App does not replace emergency services</li>
            <li>
              Users should contact 911 or local emergency services in
              emergencies
            </li>
            <li>
              Community Care Housing does not guarantee user availability,
              response times, or outcomes
            </li>
            <li>Use of the App is at your own risk.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            7. Donations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Community Care Housing may offer users the opportunity to make
              voluntary donations to support nonprofit operations, App
              maintenance, outreach, and education.
            </li>
            <li>Donations are optional</li>
            <li>
              Donations do not unlock features or provide preferential access
            </li>
            <li>Payment processing is handled by third-party providers</li>
            <li>No refunds are guaranteed unless required by law.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            8. Intellectual Property
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Unless otherwise indicated, the App and all related content,
              including software, designs, text, graphics, logos, and
              trademarks, are owned by or licensed to Community Care Housing and
              protected by applicable intellectual property laws.
            </li>
            <li>
              You may not copy, modify, distribute, or create derivative works
              without prior written permission.
            </li>
          </ul>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            9. Third-Party Services
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              The App may rely on third-party services (e.g., Firebase, AWS,
              Twilio).
            </li>
            <li>
              Community Care Housing is not responsible for third-party
              services, content, or outages. Use of third-party services is
              subject to their own terms and policies.
            </li>
          </ul>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Privacy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Your use of the App is subject to our Privacy Policy, which
              explains how we collect and use personal information, including
              rights under the Colorado Privacy Act (CPA).
            </li>
            <li>
              By using the App, you consent to the practices described in the
              Privacy Policy.
            </li>
          </ul>
        </section>

        {/* Section 11 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            11. Termination
          </h2>
          <p className="text-gray-700 mb-3">
            We may suspend or terminate your access to the App at any time, with
            or without notice, if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
            <li>You violate these Terms</li>
            <li>Your use poses a risk to others or the platform</li>
            <li>Required by law</li>
          </ul>
          <p className="text-gray-700">
            You may stop using the App at any time.
          </p>
        </section>

        {/* Section 12 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            12. Disclaimer of Warranties
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
            <li>The App is provided "as is" and "as available."</li>
            <li>
              We make no warranties regarding:
              <ul className="list-circle list-inside space-y-1 mt-2 ml-4">
                <li>Accuracy</li>
                <li>Availability</li>
                <li>Reliability</li>
                <li>Fitness for a particular purpose</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-700">
            To the fullest extent permitted by law, we disclaim all warranties,
            express or implied.
          </p>
        </section>

        {/* Section 13 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            13. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-3">
            To the maximum extent permitted by law, Community Care Housing shall
            not be liable for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of data, profits, or goodwill</li>
            <li>Personal injury or property damage arising from App use</li>
          </ul>
          <p className="text-gray-700">
            Our total liability shall not exceed $100 USD or the amount
            permitted by law, whichever is greater.
          </p>
        </section>

        {/* Section 14 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            14. Indemnification
          </h2>
          <p className="text-gray-700 mb-3">
            You agree to indemnify and hold harmless Community Care Housing, its
            directors, officers, employees, and volunteers from any claims
            arising out of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Your use of the App</li>
            <li>Your content</li>
            <li>Your violation of these Terms</li>
          </ul>
        </section>

        {/* Section 15 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            15. Governing Law
          </h2>
          <p className="text-gray-700">
            These Terms are governed by the laws of the State of Colorado,
            without regard to conflict-of-law principles.
          </p>
        </section>

        {/* Section 16 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            16. Changes to These Terms
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              We may update these Terms from time to time. Changes will be
              posted in the App or on our website with an updated effective
              date.
            </li>
            <li>
              Continued use of the App constitutes acceptance of the revised
              Terms.
            </li>
          </ul>
        </section>

        {/* Section 17 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            17. Contact Information
          </h2>
          <p className="text-gray-700 mb-3">
            If you have questions about these Terms, contact:
          </p>
          <p className="mb-6">
            <a
              href="mailto:info@communitycarehousing.org"
              className="text-blue-600 hover:underline"
            >
              info@communitycarehousing.org
            </a>
          </p>
          <p className="text-gray-700">
            Community Care Housing
            <br />
            Colorado, United States
            <br />
            501(c)(3) nonprofit organization
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
