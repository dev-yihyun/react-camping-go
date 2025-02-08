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

// 변경됨: defaultProps 제거하고 함수 매개변수에서 기본값 설정
const Button = ({
    children = "Button", // 기본값 추가
    disabled = false, // 기본값 추가
    onClick = () => {}, // 기본값 추가
}) => {
    console.log("##disabled", disabled);
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

// 삭제됨: 더 이상 필요 없음
// Button.defaultProps = {
//     children: "Button",
//     disabled: false,
//     onClick: () => {},
// };

export default React.memo(Button);
