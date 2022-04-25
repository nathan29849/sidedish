import React from "react";
import { useEffect, useState, useRef } from "react";
import { Animated, FlatList, View } from "react-native-web";
import "./SmallSidedish.css";

function SmallCard({ id, img, text, des, pre, cur, lan }) {
    return (
        <li className="small-sidedish__card carousel-item" id={id}>
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

function CarouselItem({ children, width }) {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
}

function Carousel({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    };
    return (
        <div className="carousel">
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="indicators">
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

function SmallSidedish() {
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

    return (
        <div className="small-sidedish">
            <div className="small-sidedish__header">
                <h3 className="small-sidedish__title">
                    식탁을 풍성하게 하는 정갈한 밑반찬
                </h3>
            </div>

            <Carousel></Carousel>
        </div>
    );
}

{
    /* <SmallCard
        id={dish.dishId}
        img={dish.imagePath}
        text={dish.title}
        des={dish.description}
        pre={dish.price}
        cur={dish.price}
        lan={dish.stock}
    />; */
}
export default SmallSidedish;
