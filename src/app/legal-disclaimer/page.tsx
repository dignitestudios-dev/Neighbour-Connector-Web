import React from "react";

const LegalDisclaimer = () => {
  return (
    <div className="mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">
        LEGAL DISCLAIMER — NeighborConnector™
      </h1>
      <p className="text-sm text-gray-600 mb-8">
        Effective Date: January 1, 2025
      </p>

      <p className="mb-6">
        NeighborConnector™ (the "App") is operated by Community Care Housing
        ("Community Care Housing," "CCH," "we," "us," or "our"), a United
        States–based 501(c)(3) nonprofit organization headquartered in Colorado.
      </p>

      <p className="mb-8 font-semibold">
        By using the App, you acknowledge and agree to the terms of this Legal
        Disclaimer.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. No Emergency or Professional Services
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>
          NeighborConnector™ is a community communication and coordination tool
          intended to support neighbor connections and safety awareness.
        </li>
        <li>
          The App does not provide emergency services, medical care, mental
          health services, legal advice, or professional counseling of any kind.
        </li>
        <li>
          If you are experiencing an emergency or require immediate assistance,
          contact local emergency services (such as 911) immediately.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. Informational Use Only
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>
          Any information shared through the App — including messages, posts,
          schedules, check-ins, or user-generated content — is provided for
          general informational and community-support purposes only.
        </li>
        <li>
          Community Care Housing does not verify, endorse, or guarantee the
          accuracy, completeness, or reliability of any user-generated content.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. No Duty to Monitor or Intervene
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>
          Community Care Housing does not monitor all user activity and does not
          assume any obligation to review, supervise, or intervene in
          communications or interactions between users.
        </li>
        <li>
          Users are solely responsible for their own conduct and decisions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Voluntary Participation
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>
          Participation in NeighborConnector™ is voluntary. Users assume all
          risks associated with using the App, including reliance on information
          provided by other users.
        </li>
        <li>
          Community Care Housing is not responsible for outcomes resulting from
          missed check-ins, delayed communications, or user inaction.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. No Guarantees</h2>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>
          While we strive to maintain reliable and secure systems, we do not
          guarantee that the App will be uninterrupted, error-free, timely, or
          free from technical issues.
        </li>
        <li>
          Features such as notifications, messaging, or safety check-ins may be
          delayed or unavailable due to factors outside our control.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        6. Limitation of Liability
      </h2>
      <p className="mb-3">
        To the fullest extent permitted by law, Community Care Housing shall not
        be liable for any damages — direct or indirect — arising from:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>Use or inability to use the App</li>
        <li>User-generated content</li>
        <li>Reliance on information shared through the App</li>
        <li>Technical failures or service interruptions</li>
      </ul>
      <p className="mb-6">
        This includes, without limitation, personal injury, emotional distress,
        or loss of data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        7. Third-Party Services
      </h2>
      <p className="mb-6">
        The App may rely on third-party service providers (such as hosting,
        messaging, or authentication services). Community Care Housing is not
        responsible for the actions, availability, or performance of third-party
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">8. Governing Law</h2>
      <p className="mb-6">
        This Legal Disclaimer is governed by the laws of the State of Colorado,
        without regard to conflict-of-law principles.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        9. Changes to This Disclaimer
      </h2>
      <p className="mb-6">
        We may update this Legal Disclaimer from time to time. Changes will be
        posted within the App or on our website, and the effective date will be
        updated accordingly.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        10. Contact Information
      </h2>
      <p className="mb-2">
        For questions regarding this Legal Disclaimer, please contact:
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
    </div>
  );
};

export default LegalDisclaimer;
