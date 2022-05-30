import React,{useState,useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "../component/ProductCard";



const ProductType = ({isLoggedIn}) => {
    const [productList,setProductList] = useState([]);
    const [type,setType] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = type.get('type') || "";
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
        console.log(data,"ddd");
    }

    useEffect(() => {
        getProducts();
    }, [type]);


    return(
        <>
            <Container>

                <Row>
                    {productList.map((menu,index)=>(
                        <Col lg={3} key={index}>
                            <ProductCard item={menu} isLoggedIn={isLoggedIn}  />
                        </Col>
                    ))}

                </Row>
            </Container>
        </>
    )
}

export default ProductType;