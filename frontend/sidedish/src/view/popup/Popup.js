import { useEffect, useState } from "react";
import "./Popup.css";

function SmallCard({ id, img, text, des, pre, cur, lan }) {
    return (
        <li className="small-sidedish__card" id={id}>
            <div className="small-sidedish__card-img-container">
                <img className="small-sidedish__card-img" src={img} />
            </div>
            <div className="small-sidedish__card-item">
                <div className="small-sidedish__card-item--text">
                    <h3 className="small-sidedish__card-name">{text}</h3>
                    <p className="small-sidedish__card-description">{des}</p>
                </div>
            </div>
            <div className="small-sidedish__card-prices">
                <span className="small-sidedish__card-price--default">
                    {pre}
                </span>
                <span className="small-sidedish__card-price--option">
                    {cur}
                </span>
            </div>
            <span className="small-sidedish__card-tag--launch">{lan}</span>
        </li>
    );
}

function SmallSidedishCard() {
    const [error, setError] = useState("null");
    const [isLoaded, setIsLoaded] = useState("false");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(
            "https://273b4433-0674-40c4-9d88-6ab939cd01f8.mock.pstmn.io/api/dish?section=정갈한-밑반찬"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setItems(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (isLoaded === true) {
        return (
            <>
                {items.data.map((dish) => {
                    return (
                        <>
                            <SmallCard
                                id={dish.dishId}
                                img={dish.imagePath}
                                text={dish.title}
                                des={dish.description}
                                pre={dish.price}
                                cur={dish.price}
                                lan={dish.stock}
                            />
                        </>
                    );
                })}
            </>
        );
    }
}

function ProductDetailPopup() {
    return (
        <div className="popup">
            <div className="popup__product">
                <div className="popup__product-img-container">
                    <img
                        className="popup__product-img"
                        src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/30/55158f507b8a58f229f6b20d587bd2b91.jpg"
                    ></img>
                    <div className="popup__product-images">images</div>
                </div>
                <div className="popup__product-detail">
                    <button className="popup__product-detail--close-btn">
                        닫기
                    </button>
                    <div className="popup__product-detail--section1">
                        <h3 className="popup__product-title">
                            오리 주물럭_반조리
                        </h3>
                        <span className="popup__product-price--default">
                            15000원
                        </span>
                        <span className="popup__product-tag--launch">
                            런칭특가
                        </span>
                        <span className="popup__product-price--option">
                            12640원
                        </span>
                    </div>
                    <div className="popup__product-detail--section2">
                        <div className="popup__product-point">
                            <h2 className="popup__product-point--name">
                                적립금
                            </h2>
                            <span className="popup__product-point--price">
                                1200
                            </span>
                        </div>
                        <div className="popup__product-delivery-info">
                            <h2 className="popup__product-delivery-info--name">
                                배송정보
                            </h2>
                            <span className="popup__product-delivery-info--area">
                                서울 경기 새벽배송, 전국 택배배송
                            </span>
                        </div>
                        <div className="popup__product-delivery-price">
                            <h2 className="popup__product-delivery-price--name">
                                배송비
                            </h2>
                            <span className="popup__product-delivery-price--payment">
                                2500원[40000원 이상 구매 시 무료]
                            </span>
                        </div>
                    </div>
                    <div className="popup__product-detail--section3">
                        <div className="popup__product-order-number">
                            <button className="popup__product-order-number-btn--remove">
                                -
                            </button>
                            <span className="popup__product-order-number-result"></span>
                            <button className="popup__product-order-number-btn--add">
                                +
                            </button>
                        </div>
                        <div className="popup__product-order-result">
                            <span className="popup__product-order-result--name">
                                총주문금액
                            </span>
                            <span className="popup__product-order-result--price">
                                12640원
                            </span>
                        </div>
                        <button className="popup__product-order-choice-btn">
                            주문하기
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup__related-product">
                <div className="popup__related-product__header">
                    <span className="popup__related-product__header-title">
                        함꼐하면 더욱 맛있는 상품
                    </span>
                    <span className="popup__related-product__header-slider">
                        <button className="popup__related-product__header-slider__btn--back">
                            -
                        </button>
                        <button className="popup__related-product__header-slider__info">
                            1
                        </button>
                        <button className="popup__related-product__header-slider__btn--on">
                            +
                        </button>
                    </span>
                </div>
                <div className="popup__related-product__cards small-sidedish__cards">
                    <SmallSidedishCard />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPopup;
