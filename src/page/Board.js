import React,{useState,useEffect} from 'react';
import {Col, Container, Row,Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import shortid from "shortid";


const Board = (props) => {
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [inputs,setInputs] = useState({
        postId : "",
        name : "",
        contents : "",
        date : "",
        title : "",
    });


    //const shortid = require("shortid");
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1;  // 월
    const currentDate = today.getDate();  // 날짜
    const hours = today.getHours();
    const date = year + `/` + month + `/` + currentDate + `/` ;




    const createBoard = async () => {
        let url = `http://localhost:5000/board`;
        const response= await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: shortid.generate(),
                name: inputs.name,
                contents: inputs.contents,
                date: new Date(),
                title:inputs.title,
            }),
        })
        navigate("/qna")
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const id = e.target.name;
        const title = e.target.name;
        const contents = e.target.name;
        const author = e.target.name;

    }

    const handleOnChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });

    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="board-create-title">게시글 작성</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <form className="form-wrap" onSubmit={handleSubmit} onChange={handleOnChange}>
                            <label className="form-label">제목</label>
                            <input type="text" placeholder="제목을 작성해주세요." className="form-input" name="title"/>
                            <label className="form-label">작성자</label>
                            <input type="text" placeholder="이름을 작성해주세요." className="form-input" name="name"/>
                            <label className="form-label">내용</label>
                            <textarea className="form-textarea" placeholder="게시글을 작성해주세요." name="contents" />

                            <Col lg={12} className="board-btn-wrapper">
                                <Button variant={"danger"} className="list-move" onClick={()=> navigate("/qna")}>목록으로</Button>
                                <Button variant={"danger"} onClick={createBoard}>등록하기</Button>
                            </Col>
                        </form>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Board;