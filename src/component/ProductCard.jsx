import React from 'react';

const ProductCard = ({item}) => {
    return (
        <>
            <div className="card-wrap">
                <img src={item && item.img} alt="강아지"/>
                <div className="product-ioncs">
                    <span className="product-orders">주문폭주</span>
                    <span className="new-product">{item && item.new == true ? '신제품' : "인기제품"}</span>

                </div>
                <p className="product-clothes">{item && item.title}</p>
                <div>
                    <span className="price">{item && item.price}₩</span>

                </div>
            </div>
        </>
    )
}

export default ProductCard;