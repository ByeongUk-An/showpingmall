import React, {useEffect,useState} from 'react';
import ProductCard from "../component/ProductCard";
import {Container,Row,Col} from "react-bootstrap";



const ProductAll = ({isLoggedIn}) => {
    const [productList,setProductList] = useState([]);

    const getProducts = async () => {
        let url = `http://localhost:5000/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }


    useEffect(() => {
        getProducts();
    }, []);



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