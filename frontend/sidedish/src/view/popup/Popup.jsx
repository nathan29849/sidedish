import { useEffect, useState } from "react";
import {
    Popup,
    PopupBox, 
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
    PopupProductInfoBadge,
    PopupProductInfoBadgePrice,
    PopupProductInfoBadgeTag,    
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
    RelatedProductHeader,
    RelatedProductTitle,
    RelatedProductNav,
    RelatedProductNavWholePage,
    RelatedProductNavCurrentPage,
    RelatedProductNavRightBtn,
    RelatedProductNavLeftBtn,
    RelatedProductWrapScroll,
    RelatedProductCard
} from "./Popup.style";

function PopupProductPart(){
    return (
        <>
        <PopupProduct >
            <PopupProductImgContainer>
                <PopupProductImg src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/30/55158f507b8a58f229f6b20d587bd2b91.jpg" />
                <PopupProductImgMini src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/30/55158f507b8a58f229f6b20d587bd2b91.jpg" />
            </PopupProductImgContainer>
            <PopupProductInfo>
                <PopupProductDetailSection1>
                    <PopupProductInfoName>오리_주물럭_반조리</PopupProductInfoName>
                    <PopupProductInfoPrimeCost>15000원</PopupProductInfoPrimeCost>
                    <PopupProductInfoBadge>
                        <PopupProductInfoBadgeTag>런칭특가</PopupProductInfoBadgeTag>
                        <PopupProductInfoBadgePrice>12640원</PopupProductInfoBadgePrice>
                    </PopupProductInfoBadge>
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
        </>
    );
}

function RelatedProductPart(){
    return (
        <>
        <RelatedProduct>
            <RelatedProductHeader>
            <RelatedProductTitle>함께하면 더욱 맛있는 상품</RelatedProductTitle>
            <RelatedProductNav>
                <RelatedProductNavLeftBtn>left</RelatedProductNavLeftBtn>
                <RelatedProductNavWholePage>4</RelatedProductNavWholePage>
                <RelatedProductNavCurrentPage>1</RelatedProductNavCurrentPage>
                <RelatedProductNavRightBtn>right</RelatedProductNavRightBtn>
            </RelatedProductNav>
            </RelatedProductHeader>
            <RelatedProductWrapScroll>
                <RelatedProductCard />
            </RelatedProductWrapScroll>
        </RelatedProduct>
        </>
    );
}


function ProductDetailPopup() {
    const [show, setShow] = useState(true);

    const showPopup = () => {
        setShow(true);
    };
    const hidePopup = () => {
        setShow(false);
    }

    return (
        <>
        <Popup show={show}>
            <PopupBox>
                <PopupProductInfoCloseBtn onClick={hidePopup}>닫기</PopupProductInfoCloseBtn>
                <PopupProductPart />
                <RelatedProductPart />
            </PopupBox>
        </Popup>
        </>
    );
}

export default ProductDetailPopup;
