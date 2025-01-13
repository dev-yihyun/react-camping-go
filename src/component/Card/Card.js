import React from "react";
import styled from "styled-components";

const CardComponent = styled.div`
    border: 3px solid #9ab3a0;
    border-radius: 10px;
    background-color: #ffffff;
    min-height: 28px;
    max-height: auto;
    padding: 8px;
    padding-top: 20px;
    padding-bottom: 20px;

    @media (min-width: 1024px) {
        width: 490px;
    }

    @media (min-width: 600px) and (max-width: 1023px) {
        width: 450px;
    }

    @media (max-width: 599px) {
        width: 320px;
    }
`;

const Card = ({ children }) => {
    return <CardComponent>{children}</CardComponent>;
};

export default React.memo(Card);
