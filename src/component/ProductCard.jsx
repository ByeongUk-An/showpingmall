import React from 'react';
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

const ProductCard = ({item,isLoggedIn}) => {
    const navigate = useNavigate();

    const goToDetailMove = () => {
        if(isLoggedIn) {
            navigate(`/product/${item.id}`)
        }else {
            navigate("/login")
        }
    }
    return (
        <>
            <div className="card-wrap" onClick={goToDetailMove}>
                <img src={item && item.img} alt="의류"/>
                <div className="product-ioncs">
                    <span className="product-orders">Hit</span>
                    <span className="new-product">{item && item.new == true ? 'New' : "Popular "}</span>
                    <span className="image blinking product-sale"> Sale </span>

                </div>
                <p className="product-clothes">{item && item.title}</p>
                <div>
                    <span className="price">₩{item && item.price}</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span className="sale"></span>
                    <span className="discount">₩{item && item.discounted}</span>

                </div>
            </div>
        </>
    )
}

export default ProductCard;