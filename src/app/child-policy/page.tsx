import React from "react";

const page = () => {
  return (
    <div className="mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2 relative">
        CHILD SAFETY POLICY - NeighborConnector
        <sup className="text-[10px] font-semibold absolute top-2">TM</sup>
      </h1>
      <p className="text-sm text-gray-600 mb-8">Effective Date: April, 2026</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
      <p className="mb-6">
        We are committed to creating a safe and secure environment for all users
        of our application. Protecting children and preventing misuse of the
        platform is a top priority. This Child Safety Policy outlines the
        standards, practices, and measures we take to safeguard minors.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Age Restrictions</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>The app is intended for users aged 13 years and above.</li>
        <li>
          Users under the age of 18 are considered minors and must use the
          platform under parental or guardian supervision.
        </li>
        <li>
          We do not knowingly allow children under 13 to create accounts or use
          our services.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. Prohibited Content and Behavior
      </h2>
      <p className="mb-3">We strictly prohibit:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Any form of child sexual abuse material (CSAM)</li>
        <li>Grooming, exploitation, or inappropriate interaction with minors</li>
        <li>Harassment, bullying, or harmful communication directed at minors</li>
        <li>Sharing personal information of minors without consent</li>
      </ul>
      <p className="mb-6">
        Any violation will result in immediate account suspension and may be
        reported to relevant authorities.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. User-Generated Content Monitoring
      </h2>
      <p className="mb-3">Since the app allows users to:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Create groups (circles)</li>
        <li>Post requests (e.g., home help, rides, etc.)</li>
        <li>Communicate via chats</li>
      </ul>
      <p className="mb-3">We implement:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Content moderation systems (automated and manual)</li>
        <li>
          Reporting mechanisms for users to flag inappropriate content
        </li>
        <li>Review processes to take swift action on reported content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        5. Reporting and Safety Tools
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          Users can report inappropriate posts, messages, or users directly
          within the app.
        </li>
        <li>
          All reports are reviewed promptly, and necessary action is taken.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        6. Data Protection for Minors
      </h2>
      <p className="mb-3">
        We take extra precautions when handling data related to minors:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Minimal data collection</li>
        <li>No sharing of personal data with third parties without consent</li>
        <li>Secure storage and encryption of user information</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Parental Guidance</h2>
      <p className="mb-3">We encourage parents and guardians to:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Monitor their child&apos;s activity on the app</li>
        <li>Educate children about online safety</li>
        <li>Report any suspicious behavior immediately</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        8. Enforcement and Compliance
      </h2>
      <p className="mb-3">
        We comply with applicable child protection laws and regulations.
      </p>
      <p className="mb-3">In cases involving serious violations, we may:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Suspend or permanently ban accounts</li>
        <li>Report users to law enforcement authorities</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        9. Updates to This Policy
      </h2>
      <p className="mb-6">
        We may update this Child Safety Policy from time to time. Users will be
        notified of significant changes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contact Us</h2>
      <p className="mb-2">
        If you have concerns regarding child safety on our platform, please
        contact us at:
      </p>
      <p className="mb-6">
        <a
          href="mailto:info@communitycarehousing.org"
          className="text-blue-600 hover:underline"
        >
          info@communitycarehousing.org
        </a>{" "}
        or (720) 260-2600
      </p>
    </div>
  );
};

export default page;