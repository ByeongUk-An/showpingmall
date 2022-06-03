import React from 'react';
import {Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const BoardList = ({list,index}) => {
    const navigate = useNavigate();


    const movePage = () => {
        const aler = window.prompt("비밀번호를 입력해주세요.");
        if(aler == list.password) {
            navigate(`/qna/${index}`)
        }else {
            alert("비밀번호가 일치하지 않습니다.")
            return;
        }





    }


    return(
        <>
            <li className="board-header border-header-list" key={index} onClick={movePage} >
                <Col lg={1}><p className="list">{list.id}</p></Col>
                <Col lg={7}><p className="contents">{list.title}</p></Col>
                <Col lg={2}><p className="list">{list.name}</p></Col>
                <Col lg={1}><p className="list">{list.date}</p></Col>
                <Col lg={1}><p className="list">{list.view}</p></Col>
            </li>
        </>
    )
}

export default BoardList;