import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../redux/reducers/auth"
import React from "react"
import http from "../helpers/http.helper"

import {BiSearch} from 'react-icons/bi'

const Home = ()=> {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [products, setProducts] = React.useState()
    const [paginition, setPaginition] = React.useState(0)
    const [search, setSearch] = React.useState("");

    const btnLogout = () => {
        dispatch(logout())
        navigate('/forgot-password')
    }

    React.useEffect(()=> {
        const getEventData = async() => {
            const {data} = await http().get(`https://dummyjson.com/products/search?q=${search}&limit=10&skip=${paginition}`)
            setProducts(data)
        }
        getEventData()
    }, [paginition,search])

    const pageNext = () => {
        setPaginition(paginition + 10);
    };

    const pagePrev = () => {
        setPaginition(paginition - 10);
    };

    const doSearch = async (event) => {
        try{
            event.preventDefault()
            const {value: search} = event.target.search
            setSearch(search)
            setPaginition(0)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="bg-[#ee4d2d]">
            <div className="py-8 px-[120px] max-sm:px-[30px]">
                <div className="mb-16 flex items-center justify-between">
                    <div className="flex gap-12">
                        <form onSubmit={doSearch} className="w-[500px] flex relative items-center">
                            <input name='search' type="text" placeholder='Search for items' className='input input-bordered w-full max-w-[500px]' />
                            <button type="submit" className='absolute right-2'>
                                <BiSearch size={40} className="text-slate-400"/>
                            </button>
                        </form>
                        <Link to={'/addProduct'} className="font-semibold text-[#ee4d2d] pt-3 px-6 rounded-md bg-white cursor-pointer hover:bg-blue-500 hover:text-white">
                            Tambahkan Product
                        </Link>
                    </div>
                        <button onClick={()=> btnLogout()} className="bg-white w-32 text-red-400 font-bold rounded-sm py-1">Logout</button>
                </div>
                <div className="flex justify-center gap-8 flex-wrap mb-6">
                    {products?.products?.map(products => (
                        <Link to={`/detailProduct/${products.id}`} key={`products-id-${products.id}`} className="border-2 rounded-xl max-w-[190px] w-[190px] h-[282px] overflow-hidden">
                            <img src={products.thumbnail} alt={products.thumbnail} className="h-[200px] object-fill w-full" />
                            <div className="px-2 py-2 flex flex-col gap-2 text-black font-semibold text-sm bg-white h-[80px]">
                                <div className="">{products.title}</div>
                                <div className="">${products.price}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center gap-6 font-bold">
                    <button disabled={paginition <= 1} onClick={()=> pagePrev()} className="border-2 px-2 text-[#ee4d2d] bg-white rounded-md">Prev</button>
                    <button disabled={paginition === products?.total-10} onClick={()=> pageNext()} className="border-2 px-2 text-[#ee4d2d] bg-white rounded-md">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Home