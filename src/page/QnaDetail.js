import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Container,Row,Col,Form,Button} from "react-bootstrap";



const QnaDetail = (props) => {
    let {id} = useParams();
    const[board,setBoard] = useState(null);
    let url = `http://localhost:5000/board/${id}`;
    const getBoardDetail = async ()=> {
        const response = await fetch(url);

        const data = await response.json();
        return data;
    }

    const getView = async (data) => {

        const response = await fetch(url,{
            method: "PATCH",
            body: JSON.stringify({
                ...data,
                view : data.view + 1
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const item = await response.json();
        
        setBoard(item);
    };

    useEffect(()=> {
        getBoardDetail().then((data)=> {
            getView(data);

        })
    },[])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Col lg={12}>
                            <div className="qna-wrap">
                                <ul>
                                    <li className="board-detail-title">
                                        <span className="board-detail-head">제목 :</span>
                                        <span> {board && board.title}</span>
                                    </li>
                                    <li className="board-detail-name">
                                        <span className="board-detail-head">작성자 :</span>
                                        <span> {board && board.name}</span>
                                    </li>
                                    <li className="board-detail-date">
                                        <span className="board-detail-head">작성일자 :</span>
                                        <span> {board && board.datetime}</span>
                                    </li>
                                    <li className="board-detail-contents">
                                        <p className="board-detail-pre">{board && board.contents}</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Col>
                    <Col lg ={2}></Col>
                </Row>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Col lg={12} className="d-flex justify-content-end board-detail-btnwrap">
                            <Button className="board-detail-btn" variant={"primary"}>수정하기</Button>
                            <Button variant={"primary"}>삭제하기</Button>
                        </Col>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </>
    )
}

export default QnaDetail;