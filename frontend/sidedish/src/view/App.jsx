import GlobalStyle from "./GlobalStyle";
import Header from "./header/Header";
import BigSidedish from "./sidedish/BigSidedish";
import SmallSidedish from "./sidedish/SmallSidedish";
import ProductDetailPopup from './popup/Popup';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <BigSidedish />
            <SmallSidedish />
            <ProductDetailPopup />
        </>
    );
}

export default App;
