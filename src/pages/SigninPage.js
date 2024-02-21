import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { signIn } from '../utils/api';
import Loader from '../components/common/Loader';
import { loginSuccess } from '../store/authSlice';
// import { loginSuccess } from '../../store/authSlice';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const submitForm = async () => {
        if (email === '' || password === '') {
            toast.error("Email or Password cannot be blank")
        }
        else {
            setLoading(true)
            const { status, token } = await signIn({ email, password });
            if (status === 'success') {
                // toast.success(token)
                dispatch(loginSuccess(token))
                navigate("/dashboard")
            }
            setLoading(false)
        }

    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
            <div className="space-y-4">
                {loading && <Loader />}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}
                <div>
                    <div className="text-grey-500 text-sm mb-5">If you don't have account then register <span style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/signup")}>here</span></div>
                    <button
                        // type="submit"
                        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={() => {
                            submitForm()
                        }}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
