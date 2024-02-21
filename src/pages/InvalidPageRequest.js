import React from 'react';

const InvalidPageRequest = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md px-8 py-12 bg-white shadow-lg rounded-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-800">Invalid Page Request</h1>
                    <p className="mt-4 text-gray-600">Sorry, the page you requested does not exist.</p>
                    <button className="mt-6 inline-block px-6 py-3 rounded bg-blue-500 text-white hover:bg-blue-600">
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvalidPageRequest;
