import Header from "./view/header/Header";
import BigSidedish from "./view/sidedish/BigSidedish";
import SmallSidedish from "./view/sidedish/SmallSidedish";
import ProductDetailPopup from "./view/popup/Popup";

function App() {
    return (
        <>
            <Header />
            <BigSidedish />
            <SmallSidedish />
            <ProductDetailPopup />
        </>
    );
}

export default App;
