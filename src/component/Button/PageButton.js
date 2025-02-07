import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// styled.button.attrs(({ active }) => ({
//     "data-active": active, // HTML 기본 속성이 아니라 사용자 정의 속성으로 변경
// }))`

const ButtonComponent = styled.button`
    border: 3px solid #9ab3a0;
    border-radius: 50px;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
    background-color: ${({ active }) => (active ? "#D9E4CC " : "#ffffff")};
`;

function PageButton({ children, onClick, active }) {
    return (
        <>
            <ButtonComponent onClick={onClick} active={active}>
                {children}
            </ButtonComponent>
        </>
    );
}

PageButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    active: PropTypes.bool,
};

PageButton.defaultProps = {
    children: "Button",
    onClick: () => {},
    active: false,
};

export default React.memo(PageButton);
