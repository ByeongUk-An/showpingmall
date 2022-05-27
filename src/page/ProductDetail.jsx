import React,{useEffect} from 'react';
import {useParams} from "react-router-dom";
const ProductDetail = () => {
    let {id} = useParams();

    const getProductDetail= async ()=> {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }

    useEffect(()=> {

        getProductDetail();
    },[])
    return (
        <>
            <h1>상품디테일페이지</h1>
        </>
    )
}

export default ProductDetail;
