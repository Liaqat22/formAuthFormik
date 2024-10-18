<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import PcardDetails from './PcardDetails'
import { fetchingProducts } from './APIs'



function ProductDetails() {
    const {pid} = useParams()

    const fetchProductDetails = async() =>{
        const {data} = await axios.get(`${fetchingProducts}/${pid}`) //fetching singal product
        return data
    }
    const {error ,isLoading , data : product} = useQuery({
        queryKey : ["product" , pid] , queryFn : fetchProductDetails })
        
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <PcardDetails details = {product}/>
        </div>
    </div>
    </>
  )
}

=======
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import PcardDetails from './PcardDetails'
import { fetchingProducts } from './APIs'



function ProductDetails() {
    const {pid} = useParams()

    const fetchProductDetails = async() =>{
        const {data} = await axios.get(`${fetchingProducts}/${pid}`) //fetching singal product
        return data
    }
    const {error ,isLoading , data : product} = useQuery({
        queryKey : ["product" , pid] , queryFn : fetchProductDetails })
        
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <PcardDetails details = {product}/>
        </div>
    </div>
    </>
  )
}

>>>>>>> 61c3f86302fb764f8c897bf883975207dfe05100
export default ProductDetails