import React,{useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
// import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {authService} from "../fbase";

const NavBar = ({isLoggedIn}) => {
    const menuList = ["shirts","pants","dress","shoes","jacket","Q&A"];
    const navigate = useNavigate();
    const [clothes,setClothes] = useState("");

    const onLogOutClick = (event) => {

        let {innerHTML} = event.target;
        if(innerHTML == "로그인") {
            navigate("/login");
        }else if(innerHTML == "로그아웃") {
            authService.signOut();
            navigate("/login");
        }
        

    }
    const onLogoClickMove = () => {
        navigate("/");
    }

    const search = (event) => {
        if(event.key == "Enter") {
            // 입력한 검색어를 읽어와서
            let keyword = event.target.value;
            // URL을 바꿔준다.
            navigate(`/?q=${keyword}`);
        }
    }

    const clothesParams = (event) => {
        let clothes = event.target.innerHTML;

        if(clothes == "Q&amp;A") {
            navigate(`/qna`)
        }else if(clothes != "") {
            navigate(`/producttype/?type=${clothes}`)
        }

    }

    return(
        <>
            <div className="login-wrap">
                <div className="login-button" >
                    {/*{isLoggedIn ? "" : <FontAwesomeIcon className="login-info" icon={faUser} />}*/}
                    <button onClick={onLogOutClick}>{isLoggedIn ? "로그아웃":"로그인"}</button>
                </div>
            </div>
            <h1 className="logo-wrap">
                <img src="images/logo.png" alt="로고이미지" onClick={onLogoClickMove}/>
                <div className="input-wrap">
                    {/*<FontAwesomeIcon icon={faSearch} className="input-search-ico" />*/}
                    <input className="search-input" type="text" placeholder="원피스" onKeyPress={(event)=>search(event)}/>
                </div>
            </h1>
            <div>
                <div>
                    <ul className="menuList-wrap">
                        {menuList.map((menu,index)=> {
                            return <li className="menu-list" key={index} onClick={clothesParams}>{menu}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;