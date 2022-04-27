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
    width: 440px;
    height: 237px;
    left: 472px;
    top: 76px;
`;
const PopupProductInfoCloseBtn = styled.button`
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
    width: auto;
    height: auto;
`;
const PopupProductDetailSection2 = styled.div`
    width: auto;
    height: auto;
`;
const PopupProductDetailSection3 = styled.div`
    width: auto;
    height: auto;
`;
const PopupproductInfoPoint = styled.span`
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
const PopupproductInfoDeliveryInfo = styled.span`
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
const PopupproductInfoCharge = styled.span`
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
export {
    Popup,
    PopupProduct,
    PopupProductImgContainer,
    PopupProductImg,
    PopupProductImgMini,
    PopupProductDetail,
    PopupProductInfo,
    PopupProductDetailSection1,
    PopupProductDetailSection2,
    PopupProductDetailSection3,
    PopupProductInfoCloseBtn,
    PopupProductInfoName,
    PopupProductInfoPrimeCost,
    PopupProductInfoBadgeAndPrice,
    PopupProductInfoBadgeAndPrice,
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
