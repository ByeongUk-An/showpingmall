import React,{useEffect, useState} from 'react';
import {Col, Container, Row,Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import BoardList from "../component/BoardList";
import Pagination from "../component/Pagination";


const QnaBoard = (props) => {
    const navigate = useNavigate();
    const [productList,setProductList] = useState([]);
    const [currentPage,setCurrentPage] = useState(1); // 현재페이지 위치
    const [limit,setLimit] = useState(10);  // 페이지 당 게시물 수
    const offset = (currentPage - 1) * limit;


    const getProducts = async () => {
        const url = `http://localhost:5000/board?_sort=id&_order=DESC`;
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
                        <div className="board-wrap">
                            <div className="board-header">
                                <Col lg={1}><p className="list">No</p></Col>
                                <Col lg={7}><p className="contents">제목</p></Col>
                                <Col lg={2}><p className="list">글쓴이</p></Col>
                                <Col lg={1}><p className="list">작성일자</p></Col>
                                <Col lg={1}><p className="list">조회수</p></Col>
                            </div>
                            <ul className="board-container">
                                {productList && productList.slice(offset,offset+limit).map((list,index)=> {

                                    return <BoardList key={index} list={list} index={productList.length - index}  />
                                })}
                            </ul>
                            <Pagination total={productList.length} limit={limit} currentPage={currentPage} setCurrentPage={setCurrentPage}  />

                        </div>
                        <Col lg={12} className="board-btn-wrap">
                             <Button variant="info" className="qna-btn" onClick={()=>navigate("/board")}>글 작성</Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default QnaBoard;