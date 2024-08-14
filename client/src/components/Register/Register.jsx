import { useNavigate } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';
import { useForm } from '../../hooks/useForm';
import './validation.css'; 
import { useState } from 'react';

export default function Register() {
    let { register } = useAuthentication();
    let navigate = useNavigate();

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        form: ''
    });

    async function submitCallback(values) {
        setErrors({ email: '', password: '', confirmPassword: '', form: '' }); 

        if (!values.email) {
            setErrors(prev => ({ ...prev, email: 'Email is required' }));
            return;
        }
        if (!values.password) {
            setErrors(prev => ({ ...prev, password: 'Password is required' }));
            return;
        }
        if(values.password.length < 8){
            setErrors(prev => ({ ...prev, password: 'Password must be atleast 8 characters long' }));
            return;
        }
        if (values.password != values.confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
            return;
        }

        let data = await register(values.email, values.password);

        if (!data.error) {
            navigate("/");
        } else {
            setErrors(prev => ({ ...prev, form: data.error }));
        }
    }

    let { values, changeHandler, submitHandler } = useForm({
        email: "",
        password: "",
        confirmPassword: ""
    }, submitCallback);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg shadow-pink-500/50">
                <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Register</h2>
                <form onSubmit={submitHandler}>
                    {errors.form && <p className="text-center text-red-500 mb-4">{errors.form}</p>}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-green-600 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}                 
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:border-green-600 ${errors.email ? 'error' : ''}`}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-green-600 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}           
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:border-green-600 ${errors.password ? 'error' : ''}`}
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-green-600 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={changeHandler}               
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:border-green-600 ${errors.confirmPassword ? 'error' : ''}`}
                        />
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 transition-colors duration-300 focus:ring-4 focus:ring-pink-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
