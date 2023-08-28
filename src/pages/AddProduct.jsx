import { Link } from 'react-router-dom'

const AddProduct = ()=> {

    return (
        <div className="bg-[#ee4d2d] min-h-screen py-12 px-28 max-xl:px-12">
            <Link to={'/'} className='py-2 px-4 bg-white rounded-md text-black font-semibold' >Kembali</Link>
            <div className="bg-white w-full min-h-full mt-8 p-4">
                <div className="flex gap-8 max-lg:flex-wrap text-white font-bold">
                    <div className='max-w-[650px] w-full h-full'>
                        <div className='text-black'>Image Product :</div>
                        <label className='w-[250px]'>
                            <div className='cursor-pointer bg-slate-200 py-2 px-6 rounded-md text-slate-600 max-w-[250px] w-full'>Choose Photo</div>
                            {/* <div className='max-w-[600px] w-full bg-white h-[420px] max-lg:max-w-[450px] object-cover'>Choose Photo</div> */}
                            <input name='imageProduct' type="file" className='hidden' />
                        </label>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <div className='text-black'>Name Product :</div>
                            <input name='nameProduct' type="text" placeholder='Masukan Name Product' className='input input-bordered w-full max-w-[500px]' />
                        </div>
                        <div>
                            <div className='text-black'>Price Product :</div>
                            <input name='priceProduct' type="number" placeholder='Masukan Price Product' className='input input-bordered w-full max-w-[500px]' />
                        </div>
                        <div>
                            <div className='text-black'>Deskripsi Produk :</div>
                            <textarea name='descriptionProduct' type="text" placeholder='Masukan Deskripsi Produk' className='input input-bordered w-full max-w-[500px] h-[100px] pt-2' />
                            <button className='mt-6 bg-[#ee4d2d] px-6 py-2 rounded-md'>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct