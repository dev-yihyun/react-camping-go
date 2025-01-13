import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const InputComponent = styled.input`
    background-color: #f2f2f2;
    border: ${({ error }) => (error ? "2px solid red" : "none")};
    border-radius: 10px;
    padding: 10px;
    line-height: 22px;
    color: #1e1e23;
    font-size: 16px;
    height: 40px;

    &::placeholder {
        text-align: left;
        font-weight: bold;
        font-size: 16px;
    }

    /* 데스크톱 */
    @media (min-width: 1024px) {
        width: 370px;
    }

    /* 태블릿 */
    @media (min-width: 600px) and (max-width: 1023px) {
        width: 340px;
    }

    /* 모바일 */
    @media (max-width: 599px) {
        width: 290px;
    }
`;

const Input = ({ value, onChange, placeholder, error, type, maxLength }) => {
    return (
        <InputComponent
            error={error}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
        />
    );
};

Input.prototype = {
    /* 오류가 있는 경우 true */
    error: PropTypes.bool,
    /* 입력 필드의 placeholder */
    placeholder: PropTypes.string,
    /* 입력 필드의 값 */
    value: PropTypes.string.isRequired,
    /* 입력값 변경 핸들러 */
    onChange: PropTypes.func.isRequired,
    /** 입력 필드의 type (e.g., text, password) */ type: PropTypes.oneOf([
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
    ]),
    maxLength: PropTypes.number,
};

Input.defaultProps = {
    error: false,
    placeholder: "",
    value: "",
    type: "text",
    onChange: () => {},
    maxLength: 255,
};

export default React.memo(Input);
