import React from 'react';
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({isLoggedIn}) => {
    const menuList = ["아우터","바지","원피스","스커트","스니커즈","가방"];
    const navigate = useNavigate();

    const goToLogin = () => {
        if(isLoggedIn) {

        }else {

        }
    }

    return(
        <>
            <div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon className="login-info" icon={faUser} />
                    <div>{isLoggedIn ? "로그아웃" : "로그인"}</div>
                </div>
            </div>
            <h1 className="logo-wrap">
                <img src="images/logo.png" alt="로고이미지"/>
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