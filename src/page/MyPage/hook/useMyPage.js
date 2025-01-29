import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

export const useMyPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const [inputEmail, setInputEmail] = useState("");
    const [inputEmailErrorMessage, setInputEmailErrorMessage] = useState("");
    const [isShowEmail, setIsShowEmail] = useState(false);
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [inputPhone, setInputPhone] = useState("");
    const [inputPhoneErrorMessage, setInputPhoneErrorMessage] = useState("");
    const [isShowPhone, setIsShowPhone] = useState(false);

    const [inputCurrentPassword, setInputCurrentPassword] = useState("");
    const [inputResetPassword, setInputResetPassword] = useState("");
    const [inputCheckPassword, setInputCheckPassword] = useState("");
    const [inputPasswordErrorMessage, setInputPasswordErrorMessage] = useState("");
    const regexPw = /^[a-zA-Z0-9!@#$%^&*+\-=_?]*$/;

    useEffect(() => {
        setInputEmail("example@email.com");
        setInputPhone("010-0000-0000");
    }, []);

    useEffect(() => {
        setInputEmail("example@email.com");
        setInputPhone("010-0000-0000");
        setIsShowEmail(false);
        setIsShowPhone(false);
    }, [activeTab]);

    const onInputEmail = (event) => {
        const value = event.target.value;
        setInputEmail(value);
        setInputEmailErrorMessage(
            regexEmail.test(value) ? "" : "이메일 주소를 정확히 입력해주세요."
        );
    };

    const onShowEmail = () => {
        if (isShowEmail) {
            setInputEmail("example@email.com");
            setInputEmailErrorMessage("");
        }
        setIsShowEmail(!isShowEmail);
    };

    const onInputPhone = (event) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setInputPhone(formattedValue);
        setInputPhoneErrorMessage(
            /\d{3}-\d{4}-\d{4}/.test(formattedValue)
                ? ""
                : "전화번호를 올바른 형식으로 입력해 주세요."
        );
    };

    const onShowPhone = () => {
        if (isShowPhone) {
            setInputPhone("010-0000-0000");
            setInputPhoneErrorMessage("");
        }
        setIsShowPhone(!isShowPhone);
    };

    const onInputCurrentPassword = (event) => {
        setInputCurrentPassword(event.target.value);
    };

    const onInputResetPassword = (event) => {
        const value = event.target.value;
        setInputResetPassword(value);
        setInputPasswordErrorMessage(
            regexPw.test(value) ? "" : "비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다."
        );
    };

    const onInputCheckPassword = (event) => {
        const value = event.target.value;
        setInputCheckPassword(value);
        if (inputResetPassword !== value) {
            setInputPasswordErrorMessage("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        } else {
            setInputPasswordErrorMessage(
                regexPw.test(value) ? "" : "비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다."
            );
        }
    };

    return {
        navigate,
        activeTab,
        setActiveTab,
        inputEmail,
        inputEmailErrorMessage,
        isShowEmail,
        onInputEmail,
        onShowEmail,
        inputPhone,
        inputPhoneErrorMessage,
        isShowPhone,
        onInputPhone,
        onShowPhone,
        inputCurrentPassword,
        onInputCurrentPassword,
        inputResetPassword,
        onInputResetPassword,
        inputCheckPassword,
        onInputCheckPassword,
        inputPasswordErrorMessage,
        regexEmail,
        regexPw,
    };
};
