import React,{useEffect, useState} from 'react';
import {Col, Container, Row,Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"



const Qna = (props) => {
    const navigate = useNavigate();
    const [productList,setProductList] = useState([]);


    const getProducts = async () => {
        const url = `http://localhost:5000/board`;
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data);
    }


    useEffect(() => {
        getProducts();
    }, []);



    return (
        <>
            <Container className="qna-container">
                <Row>
                    <Col lg={12}><h2 className="board-title">Q&A게시판</h2></Col>
                    <Col lg={12}>
                        <ul className="board-wrap">
                            <li className="board-header">
                                <Col lg={1}><p className="list">No</p></Col>
                                <Col lg={7}><p className="contents">제목</p></Col>
                                <Col lg={2}><p className="list">글쓴이</p></Col>
                                <Col lg={1}><p className="list">작성일자</p></Col>
                                <Col lg={1}><p className="list">조회수</p></Col>
                            </li>

                            {productList && productList.map((list,index)=> {

                                return <li className="board-header border-header-list" key={index}>
                                    <Col lg={1}><p className="list">{productList.length - index}</p></Col>
                                    <Col lg={7}><p className="contents">{list.title}</p></Col>
                                    <Col lg={2}><p className="list">{list.name}</p></Col>
                                    <Col lg={1}><p className="list">{list.date}</p></Col>
                                    <Col lg={1}><p className="list">3</p></Col>
                                </li>
                            })}



                        </ul>
                        <Col lg={12} className="board-btn-wrap">
                             <Button variant="info" className="qna-btn" onClick={()=>navigate("/board")}>글 작성</Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Qna;