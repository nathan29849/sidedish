import { useEffect, useState } from "react";
import {
    Popup, 
    PopupProduct, 
    PopupProductImgContainer, 
    PopupProductImg,
    PopupProductImgMini,
    PopupProductDetail,
    PopupProductInfo,
    PopupProductInfoCloseBtn,    
    PopupProductDetailSection1,
    PopupProductDetailSection2,
    PopupProductDetailSection3,
    PopupProductInfoName,
    PopupProductInfoPrimeCost,
    PopupProductInfoBadgeAndPrice,
    PopupProductInfoBadgeAndPriceTag,    
    PopupproductInfoPoint,
    PopupproductInfoPointText,
    PopupproductInfoPointLabel,
    PopupproductInfoDeliveryInfo,
    PopupproductInfoDeliveryInfoText,
    PopupproductInfoDeliveryInfoLabel,
    PopupproductInfoCharge,
    PopupproductInfoChargeText,
    PopupproductInfoChargeLabel,
    PopupProductOrderTotalAmount,
    PopupProductOrderTotalNumber,
    PopupProductOrderNumberPlusBtn,
    PopupProductOrderNumberMinusBtn,
    PopupProductOrderTotalCost,
    PopupProductOrderTotalCostText,
    PopupProductOrderTotalCostLabel,
    PopupProductOrderChoiceBtn,
    PopupProductOrderChoiceBtnText,
    RelatedProduct,
    RelatedProductTitle,
    RelatedProductNav,
    RelatedProductNavWholePage,
    RelatedProductNavCurrentPage,
    RelatedProductNavRightBtn,
    RelatedProductNavLeftBtn,
    RelatedProductWrapScroll,
    RelatedProductCard
} from "./Popup.style";

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
    <>
    <Popup>
        <PopupProduct >
            <PopupProductImgContainer>
                <PopupProductImg src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/30/55158f507b8a58f229f6b20d587bd2b91.jpg" />
                <PopupProductImgMini src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/30/55158f507b8a58f229f6b20d587bd2b91.jpg" />
            </PopupProductImgContainer>
                <PopupProductInfo>
                    <PopupProductInfoCloseBtn>닫기</PopupProductInfoCloseBtn>
                    
                    <PopupProductDetailSection1>
                        <PopupProductInfoName>오리_주물럭_반조리</PopupProductInfoName>
                        <PopupProductInfoPrimeCost>15000원</PopupProductInfoPrimeCost>
                        <PopupProductInfoBadgeAndPriceTag>런칭특가</PopupProductInfoBadgeAndPriceTag>
                        <PopupProductInfoBadgeAndPrice>12640원</PopupProductInfoBadgeAndPrice>
                    </PopupProductDetailSection1>
                    <PopupProductDetailSection2>
                        <PopupproductInfoPoint>
                            <PopupproductInfoPointLabel>적립금</PopupproductInfoPointLabel>
                            <PopupproductInfoPointText>126원</PopupproductInfoPointText>
                        </PopupproductInfoPoint>
                        <PopupproductInfoDeliveryInfo>
                            <PopupproductInfoDeliveryInfoLabel>배송정보</PopupproductInfoDeliveryInfoLabel>
                            <PopupproductInfoDeliveryInfoText>서울,경기 새벽배송, 전국 택배 배송</PopupproductInfoDeliveryInfoText>
                        </PopupproductInfoDeliveryInfo>
                        <PopupproductInfoCharge>
                            <PopupproductInfoChargeLabel>배송비</PopupproductInfoChargeLabel>
                            <PopupproductInfoChargeText>2500원(40000원이상 구매 시 기프트)</PopupproductInfoChargeText>
                        </PopupproductInfoCharge>
                    </PopupProductDetailSection2>
                    <PopupProductDetailSection3>
                        <PopupProductOrderTotalAmount>
                            <PopupProductOrderNumberMinusBtn>minus</PopupProductOrderNumberMinusBtn>
                            <PopupProductOrderTotalNumber>1</PopupProductOrderTotalNumber>
                            <PopupProductOrderNumberPlusBtn>plus</PopupProductOrderNumberPlusBtn>
                        </PopupProductOrderTotalAmount>
                        <PopupProductOrderTotalCost>
                            <PopupProductOrderTotalCostLabel>총 주문금액</PopupProductOrderTotalCostLabel>
                            <PopupProductOrderTotalCostText>12640원</PopupProductOrderTotalCostText>
                        </PopupProductOrderTotalCost>
                    </PopupProductDetailSection3>
                    <PopupProductOrderChoiceBtn>
                        <PopupProductOrderChoiceBtnText>주문하기</PopupProductOrderChoiceBtnText>
                    </PopupProductOrderChoiceBtn>
                </PopupProductInfo>
        </PopupProduct>
        <RelatedProduct>
            <RelatedProductTitle>함꼐하면 더욱 맛있는 상품</RelatedProductTitle>
            <RelatedProductNav>
                <RelatedProductNavLeftBtn></RelatedProductNavLeftBtn>
                <RelatedProductNavWholePage>4</RelatedProductNavWholePage>
                <RelatedProductNavCurrentPage>1</RelatedProductNavCurrentPage>
                <RelatedProductNavRightBtn></RelatedProductNavRightBtn>
            </RelatedProductNav>
            <RelatedProductWrapScroll>
                <RelatedProductCard />

            </RelatedProductWrapScroll>
        </RelatedProduct>
    </Popup>
    </>
    );
}

export default ProductDetailPopup;
