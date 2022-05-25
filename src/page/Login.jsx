import React from 'react';
import {Form,Button,Container} from "react-bootstrap"

const Login = (props) => {
    return (
        <>
           <Container className="login-container">
               <Form>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>이메일</Form.Label>
                       <Form.Control type="email" placeholder="Your email" />
                       <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                       </Form.Text>
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>비밀번호</Form.Label>
                       <Form.Control type="password" placeholder="Password" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Check me out" />
                   </Form.Group>
                   <Button variant="dark" type="submit">
                       로그인
                   </Button>
               </Form>
           </Container>
        </>
    )
}

export default Login;