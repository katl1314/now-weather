import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Card({ data, label }) {
    const [CardItem, setCardItem] = useState([]);
    useEffect(() => {
        if (data) {
            const item = Object.keys(label).map((key) => {
                return (
                    <div key={key}>
                        <CardItemLabel>{label[key]}</CardItemLabel>:
                        <CardItemValue>{data[key]}</CardItemValue>
                    </div>
                );
            });
            setCardItem(item);
        }
    }, [data, label]);
    return <CardItemView>{CardItem}</CardItemView>;
}

const CardItemLabel = styled.span`
    display: inline-block;
    padding: 5px;
    font-size: 30px;
`;

const CardItemValue = styled.span`
    display: inline-block;
    padding: 5px;
    font-size: 30px;
`;

const CardItemView = styled.div`
    border: 1px solid black;
    padding: 50px 50px;
    border-radius: 10px;
    background: white;
    margin: 30px;
`;
