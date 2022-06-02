import React,{useState,useEffect} from 'react';
import {Col, Container, Row,Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {dateFormat,datetimeFormat} from "../utils/dateutils";


const BoardCreate = (props) => {
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [view,setView] = useState(0);
    const [inputs,setInputs] = useState({
        name : "",
        contents : "",
        date : "",
        title : "",
        datetime : "",
        view : "",
    });







    const createBoard = async () => {
        let url = `http://localhost:5000/board`;
        const response= await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: inputs.name,
                contents: inputs.contents,
                date: dateFormat(new Date()),
                title:inputs.title,
                datetime: datetimeFormat(new Date()),
                view : 0
            }),
        })
        navigate("/qna")
    }



    const handleSubmit = (e) => {
        e.preventDefault();
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

export default BoardCreate;