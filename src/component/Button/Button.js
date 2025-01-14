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
    /* disabled 상태 스타일 */
    &:disabled {
        background-color: #d3d3d3; /* 회색 톤 */
        cursor: not-allowed;
        color: #a1a1a1; /* 텍스트 색상 */
    }
`;

const Button = ({ children, disabled, onClick }) => {
    return (
        <ButtonComponent disabled={disabled} onClick={onClick}>
            {children}
        </ButtonComponent>
    );
};
// propTypes 정의
Button.propTypes = {
    children: PropTypes.node, // 버튼 안에 들어갈 내용 (문자열이나 JSX)
    disabled: PropTypes.bool, // 버튼 비활성화 여부
    onClick: PropTypes.func, // 클릭 이벤트 핸들러
};

// defaultProps 정의
Button.defaultProps = {
    children: "Button", // 기본 버튼 텍스트
    disabled: false, // 기본값은 활성화 상태
    onClick: () => {}, // 기본 클릭 핸들러 (빈 함수)
};
export default React.memo(Button);
