import React from "react";
import styled from "styled-components";
const IconButtonComponent = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* 데스크톱 */
    @media (min-width: 1024px) {
        svg {
            width: 45px;
            height: 45px;
        }
    }

    /* 태블릿 */
    @media (min-width: 600px) and (max-width: 1023px) {
        svg {
            width: 35px;
            height: 35px;
        }
    }

    /* 모바일 */
    @media (max-width: 599px) {
        svg {
            width: 25px;
            height: 25px;
        }
    }
`;

const IconButton = ({ icon, onClick }) => {
    return (
        <IconButtonComponent onClick={onClick}>
            <IconWrapper>{icon}</IconWrapper>
        </IconButtonComponent>
    );
};

export default React.memo(IconButton);
