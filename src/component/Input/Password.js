import PropTypes from "prop-types";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import styled from "styled-components";

const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    border: ${({ $error }) => ($error ? "2px solid red" : "none")};
    border-radius: 10px;
    padding: 10px;
    color: #1e1e23;
    height: 40px;

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
        color: #212121;
        border: none;
        border-radius: 10px;
        font-size: 24px;
        cursor: pointer;
    }

    input:focus {
        outline: none;
    }

    @media (min-width: 1024px) {
        width: 370px;
    }

    @media (min-width: 600px) and (max-width: 1023px) {
        width: 340px;
    }

    @media (max-width: 599px) {
        width: 290px;
    }
`;

const Password = ({
    error = false,
    placeholder = "",
    value = "",
    onChange = () => {},
    maxLength = 255,
}) => {
    const [isShow, setIsShow] = useState(true);
    const onShow = () => {
        setIsShow(!isShow);
    };
    return (
        <>
            <PasswordContainer $error={error}>
                <input
                    type={isShow ? "password" : "text"}
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
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["text", "password"]),
    maxLength: PropTypes.number,
};

export default React.memo(Password);
