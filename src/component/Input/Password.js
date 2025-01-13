import PropTypes from "prop-types";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import styled from "styled-components";

const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: #1e1e23;
    input {
        background-color: #f2f2f2;
        border: none;
        border-radius: 10px;
        padding: 10px;
        line-height: 22px;
        color: #1e1e23;
        font-size: 16px;
        flex-grow: 1;

        &::placeholder {
            text-align: left;
            font-weight: bold;
            font-size: 16px;
        }
    }

    button {
        margin-left: 10px;
        padding: 10px 20px;
        /*background-color: #4caf50;*/
        color: #212121;
        border: none;
        border-radius: 10px;
        font-size: 24px;
        cursor: pointer;
        /*
        &:hover {
            background-color: #45a049;
        }
            */
    }
    height: 40px;

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

const Password = ({ error, placeholder, value, onChange, maxLength }) => {
    const [isShow, setIsShow] = useState(true);
    const onShow = () => {
        setIsShow(!isShow);
    };
    return (
        <>
            <PasswordContainer>
                <input
                    type={isShow ? "password" : "text"}
                    error={error}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    maxLength={maxLength}
                />
                <button onClick={onShow}>{isShow ? <IoMdEyeOff /> : <IoMdEye />}</button>
            </PasswordContainer>
        </>
    );
};

Password.prototype = {
    /* 오류가 있는 경우 true */
    error: PropTypes.bool,
    /* 입력 필드의 placeholder */
    placeholder: PropTypes.string,
    /* 입력 필드의 값 */
    value: PropTypes.string.isRequired,
    /* 입력값 변경 핸들러 */
    onChange: PropTypes.func.isRequired,
    /** 입력 필드의 type (e.g., text, password) */
    type: PropTypes.oneOf(["text", "password"]),
    maxLength: PropTypes.number,
};
Password.defaultProps = {
    error: false,
    placeholder: "",
    value: "",
    type: "password",
    onChange: () => {},
    maxLength: 255,
};

export default React.memo(Password);
