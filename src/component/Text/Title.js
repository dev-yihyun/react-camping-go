import React from "react";
import styled from "styled-components";
const TitleComponent = styled.h1`
    color: "#2C2C2C";
    @media (min-width: 1024px) {
        font-size: 3em;
    }
    @media (min-width: 600px) and (max-width: 1023px) {
        font-size: 3em;
    }
    @media (max-width: 599px) {
        font-size: 1.8em;
    }
`;

const Title = ({ children }) => {
    return <TitleComponent>{children}</TitleComponent>;
};

export default React.memo(Title);
