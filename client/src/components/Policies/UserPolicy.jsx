export default function UserPolicy() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg shadow-pink-500/50 mt-10">
            <h2 className="text-3xl font-semibold text-green-600 mb-6">User Policy</h2>
            <p className="text-gray-700 mb-4">
                Welcome to [Your Forum Name]! By using our forum, you agree to follow these guidelines to ensure a positive experience for everyone:
            </p>
            <h3 className="text-xl font-semibold text-green-500 mb-2">1. Respectful Interaction</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li><strong>Be Courteous:</strong> Treat all users with respect. Personal attacks, harassment, and discriminatory remarks are not tolerated.</li>
                <li><strong>Constructive Communication:</strong> Engage in discussions constructively. Avoid aggressive or inflammatory comments.</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-500 mb-2">2. Content Guidelines</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li><strong>No Spam:</strong> Do not post unsolicited content, advertisements, or repetitive messages.</li>
                <li><strong>Relevant Posts:</strong> Ensure your posts are relevant to the forums topics and contribute to the discussion.</li>
                <li><strong>Legal Compliance:</strong> Do not post illegal content, including copyrighted material without permission.</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-500 mb-2">3. Privacy and Security</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li><strong>Respect Privacy:</strong> Do not share personal information of others without their consent.</li>
                <li><strong>Account Security:</strong> Keep your account credentials private. Report any suspicious activity to moderators immediately.</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-500 mb-2">4. Moderation and Enforcement</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li><strong>Moderation Actions:</strong> Moderators may edit or remove content that violates these guidelines and may issue warnings or bans as necessary.</li>
                <li><strong>Reporting Issues:</strong> If you encounter violations, please report them to the moderation team for review.</li>
            </ul>
            <p className="text-gray-700">
                By participating in [Your Forum Name], you agree to adhere to these policies. Non-compliance may result in moderation actions.
            </p>
        </div>
    );
}