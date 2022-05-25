import React,{useState} from 'react';
import {Form,Button,Container} from "react-bootstrap"
import {authService} from "../fbase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth} from "firebase/auth"

const Login = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");

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
            }else {
                // 로그인
                const auth = getAuth();
                data = await signInWithEmailAndPassword(auth,email,password);
            }
            console.log(data);
        }catch(error) {
            setError(error.message);
        }
    }

    const toggleAccount = () => setNewAccount((prev)=>!prev);

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
                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Check me out" />
                   </Form.Group>
                   <div>{error}</div>
                   <div className="form-btn">
                       <Button variant="dark" type="submit" className="mb-3" >
                           {newAccount ? "계정생성" : "로그인"}
                       </Button>
                   </div>
                   <div onClick={toggleAccount} >
                       {newAccount ? "로그인을 하시겠습니까?" : "계정생성을 생성하시겠습니까?"}
                   </div>

               </Form>
               <div className="social-btn">
                   <button>Continue with Google</button>
                   <button>Continue with Github</button>
               </div>
           </Container>
        </>
    )
}

export default Login;