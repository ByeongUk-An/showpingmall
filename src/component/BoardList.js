import React from 'react';
import {Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const BoardList = ({list,index}) => {
    const navigate = useNavigate();
    return(
        <>
            <li className="board-header border-header-list" key={index} onClick={()=> navigate(`/qna/${index+1}`)} >
                <Col lg={1}><p className="list">{index+1}</p></Col>
                <Col lg={7}><p className="contents">{list.title}</p></Col>
                <Col lg={2}><p className="list">{list.name}</p></Col>
                <Col lg={1}><p className="list">{list.date}</p></Col>
                <Col lg={1}><p className="list">{list.view}</p></Col>
            </li>
        </>
    )
}

export default BoardList;