import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
const ButtonComponent = styled.button`
    background-color: #9ab3a0;
    border: none;
    border-radius: 10px;
    width: 310px;
    height: 50px;
    font-size: 18px;
    font-weight: bolder;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #809485;
    }

    @media (min-width: 1024px) {
        width: 390px;
    }

    @media (min-width: 600px) and (max-width: 1023px) {
        width: 360px;
    }

    @media (max-width: 599px) {
        width: 310px;
    }

    &:disabled {
        background-color: #d3d3d3;
        cursor: not-allowed;
        color: #a1a1a1;
    }
`;

const Button = ({ children = "Button", disabled = false, onClick = () => {} }) => {
    return (
        <ButtonComponent disabled={disabled} onClick={onClick}>
            {children}
        </ButtonComponent>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default React.memo(Button);
