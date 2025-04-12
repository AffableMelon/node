import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await createUserWithEmailAndPassword(email, password);
            history.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
        style={{
            backgroundImage: "url('/images/kuriftu pic.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed" 
  }}
>
    
<div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm bg-white/10 p-8 rounded-xl mx-auto my-8">


        <div className="flex-1 text-white text-center md:text-left">
            <div className="space-y-2 mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">TRAVEL</h2>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">EXPLORE</h2>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">WITH KURIFTU</h2>
           
            </div>
            <p className="text-xl text-white/90 italic font-semibold">Where Every Stay Becomes an Adventure!</p>
        </div>


        <div className="bg-white shadow-lg rounded-lg px-10 pt-6 pb-8 mb-4 max-w-lg mx-auto ">

                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Join Kuriftu Loop</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm italic mb-4">{error}</div>}
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Already have an account? <Link to='/login' className='text-indigo-500 hover:text-indigo-700'>Login</Link>
                </p>
            </div>
        </div>
    </div>
    );
};

export default SignupPage;