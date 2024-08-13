import { useNavigate } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication';
import { useForm } from '../../hooks/useForm';

export default function Register() {
    let { register } = useAuthentication();
    let navigate = useNavigate(); 

    async function submitCallback(values) {
        // validate vlaues

        let data = await register(values.email, values.password);    
        
        if(!data.error){
            navigate("/");
        }

        //hnadle if register returns error in data
    }

    let { values, changeHandler, submitHandler } = useForm({
        email: "",
        password: "",
        confirmPassword: ""
    }, submitCallback)

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg shadow-pink-500/50">
                <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Register</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-green-600 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-green-600 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-green-600 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={changeHandler}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                        />
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