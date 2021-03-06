import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from "react";

import './App.css';
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import NavBar from "./component/NavBar";
import ProductType from "./page/ProductType";
import {getAuth,onAuthStateChanged} from "firebase/auth"
import QnaBoard from "./page/QnaBoard";
import BoardCreate from "./page/BoardCreate";
import QnaDetail from "./page/QnaDetail";


//1. 전체상품페이지, 로그인, 상품상세페이지 check
//1-1 네비게이션 바 check
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되있을경우 로그인페이지가 먼저 나온다.
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃이 되면 상품 디테일페이지를 볼수없다, 다시 로그인 페이지가 보인다.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//9. 상품을 검색할 수 있다.
function App() {
  const [init,setInit] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(() => {
    const authService = getAuth();
    onAuthStateChanged(authService,(user)=>{
      if(user) {
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);

  return (
    <>
    <NavBar isLoggedIn={isLoggedIn}/>
    <Routes>

      <Route path="/" element={<ProductAll isLoggedIn={isLoggedIn}/>}/>
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn}/>}/>
      <Route path="/product/:id" element={<ProductDetail isLoggedIn={isLoggedIn} />}/>
      <Route path="/producttype" element={<ProductType isLoggedIn={isLoggedIn} />}/>
      <Route path="/qna" element={<QnaBoard isLoggedIn={isLoggedIn} />}/>
      <Route path="/board" element={<BoardCreate isLoggedIn={isLoggedIn} />}/>
      <Route path="/qna/:id" element={<QnaDetail isLoggedI={isLoggedIn} />}/>
    </Routes>
    </>
  );
}

export default App;
