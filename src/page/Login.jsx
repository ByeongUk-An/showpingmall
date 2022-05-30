import React,{useState} from 'react';
import {Form,Button,Container} from "react-bootstrap"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth,GoogleAuthProvider,GithubAuthProvider,signInWithPopup} from "firebase/auth"
import {authService} from "../fbase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import {faGoogle,faGithub} from "@fortawesome/free-brands-svg-icons";
import { GoogleLoginButton,GithubLoginButton } from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";


const Login = ({isLoggedIn}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");

    const navigate = useNavigate();

    const onChange = (event) => {
        const {name,value} = event.target;
        if(name === "email") {
            setEmail(value)
        }else if(name==="password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount) {
                // 계정생성
                const auth = getAuth();
                data = await createUserWithEmailAndPassword(auth,email,password);
                // toast("계정이 생성되었으며, 로그인에 성공하셨습니다.");
                navigate("/");
            }else {
                // 로그인
                const auth = getAuth();
                data = await signInWithEmailAndPassword(auth,email,password);
                // toast("계정이 생성되었으며, 로그인에 성공하셨습니다.");
                navigate("/");
            }

        }catch(error) {
            setError(error.message);
        }
    }



    const toggleAccount = () => setNewAccount((prev)=>!prev);
    const onSocialClick = async (name) => {

        let provider;
        if(name === "google") {

            provider = new GoogleAuthProvider();
            navigate("/");
        }else if(name === "github") {
            provider = new GithubAuthProvider();
            navigate("/");
        }

        const data = await signInWithPopup(authService,provider);
        console.log(data);
    }



    return (
        <>

           <Container className="login-container">
               <Form onSubmit={onSubmit}>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>이메일</Form.Label>
                       <Form.Control type="email" name="email" placeholder="Your email" defaultValue={email} onChange={onChange} />

                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>비밀번호</Form.Label>
                       <Form.Control type="password" name="password" placeholder="Password" defaultValue={password} onChange={onChange} />
                   </Form.Group>


                   <div className="form-btn">
                       {newAccount ? <Button variant="dark" type="submit" className="mb-3">계정생성</Button> : <Button  name="login" variant="dark" type="submit" className="mb-3">로그인</Button> }
                   </div>
                   <div onClick={toggleAccount} className="mb-3 toggle-account" >
                       {newAccount ? "로그인을 하시겠습니까?" : "계정생성을 생성하시겠습니까?"} <span>Click!!</span>
                   </div>

               </Form>
               <div className="social-btn">
                   <GoogleLoginButton onClick={()=>onSocialClick('google')} div="google"/>
                   <GithubLoginButton onClick={()=>onSocialClick('github')} div="github"/>
               </div>
               <ToastContainer/>
           </Container>

        </>
    )
}

export default Login;