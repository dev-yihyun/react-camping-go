import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    border: 3px solid #9ab3a0;
    border-radius: 50px;
    background-color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
`;

function PageButton({ children }) {
    return (
        <>
            <ButtonComponent>{children}</ButtonComponent>
        </>
    );
}

export default React.memo(PageButton);
