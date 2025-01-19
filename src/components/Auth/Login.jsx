import React, { useState } from 'react';

function Login({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password); // Pass credentials to parent handler
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none bg-transparent placeholder:text-gray-400"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none bg-transparent placeholder:text-gray-400 mt-3"
                        type="password"
                        placeholder="Enter password"
                    />
                    <button
                        type="submit"
                        className="text-white border-none mt-5 px-5 py-3 text-xl rounded-full outline-none bg-emerald-600"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
