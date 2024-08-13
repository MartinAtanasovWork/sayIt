import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import useAuthentication from "../../hooks/useAuthentication";

// eslint-disable-next-line react/prop-types
export default function Login({ isVisible, closeFunc }) {
    let {login} = useAuthentication();
    let navigate = useNavigate();
    
    async function submitCallback(values) {
        // validate vlaues

        let data = await login(values.email, values.password);  
                  
        if(!data.error){     
            nullateProperties();
            closeFunc();
            navigate("/");
        }
        
        //hnadle if register returns error in data
    }

    let {values,changeHandler,submitHandler,nullateProperties} = useForm({email:"",password:""},submitCallback);  
        
    if (!isVisible) return null   
    
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
                            By continuing, you agree to our User Policy and acknowledge that you understand the Privacy Policy.You can see our policies <Link to="/policy" onClick={closeFunc} className="underline text-blue-900">here</Link>.
                        </p>
                        <form onSubmit={submitHandler} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                            <p className="text-center text-lg font-medium">Sign in to your account</p>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        name="email"
                                        placeholder="Enter email"
                                        value={values.email}
                                        onChange={changeHandler}
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        name="password"
                                        placeholder="Enter password"
                                        value={values.password}
                                        onChange={changeHandler}
                                    />
                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
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
    )
}