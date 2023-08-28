import React from 'react'
import http from '../helpers/http.helper'
import { Link, useParams } from 'react-router-dom'

const DetailProduct = ()=> {
    const [products, setProducts] = React.useState()
    const {id} = useParams()

    React.useEffect(()=> {
        const getEventData = async(id) => {
            const {data} = await http().get(`https://dummyjson.com/products/${id}`)
            console.log(data.title)
            console.log(products)
            setProducts(data)
        }
        if(id){
            getEventData(id)
        }
    }, [id])

    return (
        <div className="bg-[#ee4d2d] min-h-screen py-12 px-28 max-xl:px-12">
            <Link to={'/'} className='bg-white py-2 px-6 rounded-md font-semibold'>Kembali</Link>
            <div className="bg-white w-full min-h-full p-4 mt-8">
                <div className="flex gap-8 max-lg:flex-wrap text-black font-bold">
                    <img src={products?.thumbnail} alt={products?.title} className='max-w-[600px] w-full max-h-[420px] max-lg:max-w-[450px] object-fill'/>
                        <div className='flex flex-col gap-8'>
                            <div className='text-xl max-sm:text-lg'>{products?.title}</div>
                            <div className='text-lg max-sm:text-md'>${products?.price}</div>
                            <div>
                                <div>Deskripsi Produk :</div>
                                <div>{products?.description}</div>
                                <button className='mt-6 bg-[#ee4d2d] px-6 py-2 rounded-md text-white'>Beli Sekarang</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct