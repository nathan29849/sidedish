import styled from "styled-components";
const Popup = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 15px;
`;
const PopupProduct = styled.div`
    display: flex;
    flex-direction: row;
    width: 960px;
    height: 596px;
`;
const PopupProductImgContainer = styled.div`
    width: 392px;
    height: 472px;
    left: 48px;
    right: 76px;
`;
const PopupProductImg = styled.img`
    width: 392px;
    height: 392px;
    gab: 8px;
`;
const PopupProductImgMini = styled.img`
    width: 72px;
    height: 72px;
    left: 128px;
    top: 476px;
`;
const PopupProductDetail = styled.button`
    width: auto;
`;
const PopupProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 237px;
    left: 472px;
    top: 76px;
`;
const PopupProductInfoCloseBtn = styled.span`
    background-color: #fff;
    border: none;

    width: 30px;
    height: 26px;
    left: 882px;
    top: 32px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.008em;
`;
const PopupProductInfoName = styled.span`
    width: 440px;
    height: 30px;
    left: 472px;
    top: 76px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    letter-spacing: -0.008em;
`;
const PopupProductInfoPrimeCost = styled.span`
    width: 57px;
    height: 24px;
    left: 472px;
    top: 122px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    letter-spacing: -0.008em;
`;
const PopupProductInfoBadgeAndPrice = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 165px;
    height: 30px;
    left: 472px;
    top: 154px;
`;
const PopupProductInfoBadgeAndPriceTag = styled.span`
    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 6px 16px;

    position: static;
    width: 76px;
    height: 30px;
    left: 0px;
    top: 0px;

    /* Primary/Orange 1 */

    background: #ff8e14;
    border-radius: 999px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 4px;
`;
const PopupProductDetailSection1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const PopupProductDetailSection2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const PopupProductDetailSection3 = styled.div`
    width: auto;
    height: auto;
`;
const PopupproductInfoPoint = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 440px;
    height: 18px;
    left: 0px;
    top: 0px;
`;
const PopupproductInfoPointText = styled.span`
    /* text */

    position: static;
    width: 364px;
    height: 18px;
    left: 76px;
    top: 0px;

    /* Regular/X-Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    letter-spacing: -0.004em;

    /* GreyScale/Black */

    color: #1b1b1b;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;
const PopupproductInfoPointLabel = styled.span`
    /* label */

    position: static;
    width: 60px;
    height: 18px;
    left: 0px;
    top: 0px;

    /* Regular/X-Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    letter-spacing: -0.004em;

    /* GreyScale/Grey2 */

    color: #777777;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
`;

const PopupproductInfoDeliveryInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 440px;
    height: 18px;
    left: 0px;
    top: 26px;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 8px 0px;
`;
const PopupproductInfoDeliveryInfoText = styled.span`
    /* text */

    position: static;
    width: 364px;
    height: 18px;
    left: 76px;
    top: 0px;

    /* Regular/X-Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    letter-spacing: -0.004em;

    /* GreyScale/Black */

    color: #1b1b1b;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 16px;
`;
const PopupproductInfoDeliveryInfoLabel = styled.span`
    /* label */

    position: static;
    width: 60px;
    height: 18px;
    left: 0px;
    top: 0px;

    /* Regular/X-Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    letter-spacing: -0.004em;

    /* GreyScale/Grey2 */

    color: #777777;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
`;
const PopupproductInfoCharge = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 440px;
    height: 18px;
    left: 0px;
    top: 52px;

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 8px 0px;
`;
const PopupproductInfoChargeText = styled.span`
    /* text */

    position: static;
    width: 364px;
    height: 18px;
    left: 76px;
    top: 0px;

    /* Regular/X-Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    letter-spacing: -0.004em;

    /* GreyScale/Black */

    color: #1b1b1b;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 16px;
`;
const PopupproductInfoChargeLabel = styled.span`
    /* label */

    position: static;
    width: 60px;
    height: 18px;
    left: 0px;
    top: 0px;

    /* Regular/X-Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    letter-spacing: -0.004em;

    /* GreyScale/Grey2 */

    color: #777777;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
`;
const PopupProductOrderTotalAmount = styled.span`
    /* Totalamount */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 88px;
    height: 26px;
    left: 480px;
    top: 339px;
`;
const PopupProductOrderTotalNumber = styled.span`
    /* Number */

    position: static;
    width: 40px;
    height: 26px;
    left: 24px;
    top: 0px;

    /* Bold/Medium Bold */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    text-align: center;
    letter-spacing: -0.008em;

    /* GreyScale/Black */

    color: #1b1b1b;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`;
const PopupProductOrderNumberPlusBtn = styled.button`
    /* Vector */

    left: 28.12%;
    right: 28.12%;
    top: 50%;
    bottom: 50%;

    /* GreyScale/Grey2 */

    border: 2px solid #777777;
`;
const PopupProductOrderNumberMinusBtn = styled.button`
    /* Vector */

    left: 28.12%;
    right: 28.12%;
    top: 50%;
    bottom: 50%;

    /* GreyScale/Grey2 */

    border: 2px solid #777777;
`;
const PopupProductOrderTotalCost = styled.div`
    display: flex;
`;
const PopupProductOrderTotalCostText = styled.span`
    /* 1 */

    position: static;
    width: 77px;
    height: 26px;
    left: 0px;
    top: 2px;

    /* Regular/Medium Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    text-align: right;
    letter-spacing: -0.008em;

    /* GreyScale/Grey2 */

    color: #777777;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
`;
const PopupProductOrderTotalCostLabel = styled.span`
    /* 2 */

    position: static;
    width: 81px;
    height: 30px;
    left: 93px;
    top: 0px;

    /* Bold/Large Bold */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    text-align: right;
    letter-spacing: -0.008em;

    /* GreyScale/Black */

    color: #1b1b1b;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 16px;
`;
const PopupProductOrderChoiceBtn = styled.button`
    /* button */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;

    width: 440px;
    height: 58px;
    left: 472px;
    top: 490px;

    /* GreyScale/Black */

    background-color: #1b1b1b;
`;
const PopupProductOrderChoiceBtnText = styled.span`
    /* Text */

    width: 408px;
    height: 26px;
    left: 16px;
    top: 16px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */

    text-align: center;

    /* White */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
`;
const RelatedProduct = styled.div`
    /* RelatedProduct */

    width: 960px;
    height: 396px;
    left: 0px;
    top: 598px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 0px;
`;
const RelatedProductTitle = styled.span`
    /* Title */

    position: absolute;
    width: 214px;
    height: 30px;
    left: 48px;
    top: 646px;

    /* Bold/Large Bold */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    letter-spacing: -0.008em;

    /* GreyScale/Grey1 */

    color: #3f3f3f;
`;
const RelatedProductNav = styled.div`
    /* Nav */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 102px;
    height: 24px;
    left: 810px;
    top: 649px;
`;
const RelatedProductNavWholePage = styled.span`
    width: 8px;
    height: 24px;
    left: 62px;
    top: 0px;

    /* Regular/Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    letter-spacing: -0.008em;

    /* GreyScale/Grey1 */

    color: #3f3f3f;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 0px 8px;
`;
const RelatedProductNavCurrentPage = styled.span`
    width: 8px;
    height: 24px;
    left: 62px;
    top: 0px;

    /* Regular/Small Regular */

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    letter-spacing: -0.008em;

    /* GreyScale/Grey1 */

    color: #3f3f3f;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 0px 8px;
`;
const RelatedProductNavRightBtn = styled.span``;
const RelatedProductNavLeftBtn = styled.span``;
const RelatedProductWrapScroll = styled.div`
    width: 864px;
    height: 226px;
    left: 48px;
    top: 704px;
`;
const RelatedProductCard = styled.img`
    width: 160px;
    height: 160px;
    left: 0px;
    top: 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
`;
export {
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
    RelatedProductCard,
};

// .popup{
//     display: flex;
// width: 100%;
// height: 100%;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// font-size: 15px;
// }
// .popup__product{
// display: flex;
// flex-direction: row;
// width: 960px;
// height: 596px;
// }
// .popup__product-img{
//     width: 392px;
//     height: 392px;
// }

// .popup__product-detail{
//     display: flex;
//     flex-direction: column;
// }
