import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import useAuthentication from "../../hooks/useAuthentication";

import "./validation.css";

// eslint-disable-next-line react/prop-types
export default function Login({ isVisible, closeFunc }) {
    let { login } = useAuthentication();
    let navigate = useNavigate();

    let { values, changeHandler, submitHandler, nullateProperties } = useForm({ email: "", password: "" }, submitCallback);

    let [errors, setErrors] = useState({
        email: '',
        password: '',
        form: ''
    });

    async function submitCallback(values) {
        setErrors({ email: '', password: '', form: '' });

        if (!values.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
            return;
        }
        if (!values.password) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Password is required' }));
            return;
        }
        if (values.password.length < 8) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Password must be at least 8 characters long' }));
            return;
        }

        let userData = await login(values.email, values.password);

        if (!userData.error) {
            nullateProperties();
            closeFunc();
            navigate("/");
        } else {
            setErrors(prevErrors => ({ ...prevErrors, form: 'Invalid email or password' }));
        }
    }

    if (!isVisible) return;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded shadow-lg mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Login to your account</h2>
                            <button onClick={closeFunc} className="text-gray-600 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                            By continuing, you agree to our User Policy and acknowledge that you understand the Privacy Policy. You can see our policies <Link to="/policy" onClick={closeFunc} className="underline text-blue-900">here</Link>.
                        </p>
                        <form onSubmit={submitHandler} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                            <p className="text-center text-lg font-medium">Sign in to your account</p>
                            {errors.form && <p className="text-center text-red-500">{errors.form}</p>}
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={changeHandler}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-600 ${errors.email ? 'error' : 'border-gray-300'}`}
                                        placeholder="Enter email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={values.password}
                                        onChange={changeHandler}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-green-600 ${errors.password ? 'error' : 'border-gray-300'}`}
                                        placeholder="Enter password"
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-300"
                            >
                                Sign in
                            </button>
                            <p className="text-center text-sm text-gray-500">
                                No account? <Link to="/register" className="underline text-blue-900" onClick={closeFunc}>Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
