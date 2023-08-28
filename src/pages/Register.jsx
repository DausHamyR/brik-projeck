
const Register = ()=> {

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-6 bg-[#ee4d2d]">
            <div className="font-bold text-xl text-white">Register</div>
            <div className="mb-8 flex flex-col gap-6 w-full items-center">
                <input name='email' type="text" placeholder='Masukan Email' className='input input-bordered w-full max-w-[500px]' />
                <input name='password' type="password" placeholder='Masukan Password' className='input input-bordered w-full max-w-[500px]' />
                <input name='confirmPassword' type="password" placeholder='Masukan Confirm Password' className='input input-bordered w-full max-w-[500px]' />
                <button className="text-[#ee4d2d] bg-white rounded-xl px-12 py-2 font-bold hover:text-white hover:bg-blue-500">Daftar</button>
            </div>
        </div>
    )
}

export default Register