import React,{useState} from 'react'

function Login(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)

        setEmail("")
        setPassword("")
    } 
return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center' >
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                    
                }}
                required 
                className=' border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email'
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className=' border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none bg-transparent placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
                <button className='text-white border-none mt-5 px-5 py-3 text-xl rounded-full outline-none bg-emerald-600 placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
)
}

export default Login