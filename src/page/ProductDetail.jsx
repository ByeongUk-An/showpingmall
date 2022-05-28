import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";


const ProductDetail = () => {
    let {id} = useParams();
    const[product,setProduct] = useState(null);

    const getProductDetail= async ()=> {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    useEffect(()=> {

        getProductDetail();
    },[])
    return (
        <>
            <Container>
                <Row>
                    <Col className="product-img">
                        <img src={product && product.img} alt=""/>
                    </Col>
                    <Col>
                        <div>{product && product.title}</div>
                        <div>{product && product.price}</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductDetail;
