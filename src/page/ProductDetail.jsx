import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import {Container,Row,Col,Form,Button} from "react-bootstrap";


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
            <Container className="detail-container">
                <Row>
                    <Col className="product-img">
                        <img className="detail-img" src={product.img} alt={product && product.title}/>
                    </Col>
                    <Col className="product-contents">
                        <div className="product-title">{product && product.title}</div>
                        <div className="product-price"><span>가격 : </span> {product && product.price}</div>
                        <div>

                            <p><span className="pit">제품설명 :</span>{product && product.disc}</p>
                            <p><span className="pit">Pit :</span>{product && product.pit}</p>
                            <p><span className="pit">안정성 :</span>{product && product.stability}</p>
                            <p><span className="pit">상품번호 :</span>{product && product.prdnum}</p>
                        </div>
                        <Form.Select aria-label="Default select example">
                            <option>사이즈 선택</option>

                            {product && product.size.map((size,index)=> {
                                return <option value={index}>{size}</option>
                            })}
                        </Form.Select>
                        <div className="d-grid gap-2 buy-btn">
                            <Button variant="primary" size="lg">
                                장바구니 담기
                            </Button>
                            <Button variant="secondary" size="lg">
                                구매하기
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductDetail;
