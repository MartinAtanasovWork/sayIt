import { useState } from 'react';

import UserPolicy from './UserPolicy';
import PrivacyPolicy from './PrivacyPolicy';

export default function PolicyPage() {
    const [currentPage, setCurrentPage] = useState('userPolicy');

    const renderContent = () => {
        if (currentPage === 'userPolicy') {
            return (
                <UserPolicy />
            );
        }
        else {
            if (currentPage === 'privacyPolicy')
                return (
                    <PrivacyPolicy />
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white p-6 shadow-md shadow-pink-500/50">
                <div className="max-w-7xl mx-auto flex justify-center space-x-6">
                    <button
                        onClick={() => setCurrentPage('userPolicy')}
                        className={`${currentPage === 'userPolicy' ? 'text-pink-500' : 'text-green-600'
                            } font-semibold hover:text-pink-500`}
                    >
                        User Policy
                    </button>
                    <button
                        onClick={() => setCurrentPage('privacyPolicy')}
                        className={`${currentPage === 'privacyPolicy' ? 'text-pink-500' : 'text-green-600'
                            } font-semibold hover:text-pink-500`}
                    >
                        Privacy Policy
                    </button>
                </div>
            </nav>

            {renderContent()}
        </div>
    );
}