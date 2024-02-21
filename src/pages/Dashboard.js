import React, { useState } from 'react';
import { logout } from '../store/authSlice';
import { logoutUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import withAuthProtection from '../utils/middleware';

const Dashboard = () => {
    const [user, setUser] = useState({
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
    });
    const navigate = useNavigate()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <div className="flex items-center justify-center">
                <div className="max-w-lg">
                    {user && (
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                        <img src={user.avatar} alt="Profile" className="h-full w-full object-cover" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">{user.first_name} {user.last_name}</h2>
                                        <p className="text-gray-600">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                                <p>Some additional information about the user can go here.</p>
                            </div>
                        </div>
                    )}
                    <button
                        // type="submit"
                        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={async () => {
                            const { status } = await logoutUser()
                            if (status === 'success') navigate("/")
                        }}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withAuthProtection(Dashboard);
