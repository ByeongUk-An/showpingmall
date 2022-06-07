import React, {useEffect,useState} from 'react';
import ProductCard from "../component/ProductCard";
import {Container,Row,Col} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";



const ProductAll = ({isLoggedIn}) => {
    const [productList,setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        let url = `https://my-json-server.typicode.com/ByeongUk-An/showpingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }


    useEffect(() => {
        getProducts();
    }, [query]);



    return (
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

export default ProductAll;