import { Link } from "react-router-dom"

const Login = ()=> {

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-6 bg-[#ee4d2d]">
            <div className="font-bold text-xl text-white">Login</div>
            <div className="mb-8 flex flex-col gap-6 w-full items-center">
                <input name='email' type="text" placeholder='Masukan Email' className='input input-bordered w-full max-w-[500px]' />
                <input name='password' type="password" placeholder='Masukan Password' className='input input-bordered w-full max-w-[500px]' />
                <Link to={'/'} className="text-[#ee4d2d] bg-white rounded-xl px-12 py-2 font-bold hover:text-white hover:bg-blue-500">Login</Link>
            </div>
        </div>
    )
}

export default Login