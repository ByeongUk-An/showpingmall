import React from 'react';
import {useNavigate,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {authService} from "../fbase";

const NavBar = ({isLoggedIn}) => {
    const menuList = ["아우터","바지","원피스","스커트","스니커즈","가방"];
    const navigate = useNavigate();


    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    }
    const onLogoClickMove = () => {
        navigate("/");
    }

    return(
        <>
            <div className="login-wrap">
                <div className="login-button" >
                    {isLoggedIn ? <FontAwesomeIcon className="login-info" icon={faUser} /> : ""}
                    <button onClick={onLogOutClick}>{isLoggedIn ? "로그아웃":""}</button>
                </div>
            </div>
            <h1 className="logo-wrap">
                <img src="images/logo.png" alt="로고이미지" onClick={onLogoClickMove}/>
                <div className="input-wrap">
                    <FontAwesomeIcon icon={faSearch} className="input-search-ico" />
                    <input className="search-input" type="text" placeholder="원피스"/>
                </div>
            </h1>
            <div>
                <div>
                    <ul className="menuList-wrap">
                        {menuList.map((menu,index)=> {
                            return <li key={index}>{menu}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;