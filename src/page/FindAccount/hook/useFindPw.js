import { useState } from "react";
import { formatPhoneNumber } from "../../../function/formatPhoneNumber";

export const useFindPw = () => {
    const [inputId, setInputId] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputCheckPw, setInputCheckPw] = useState("");
    const [inputPwErrorMessage, setInputPwErrorMessage] = useState("");
    const [isShow, setIsShow] = useState(false);
    const regexPw = /^[a-zA-Z0-9!@#$%^&*+\-=_?]*$/;

    const onInputId = (event) => {
        setInputId(event.target.value);
    };

    const onInputName = (event) => {
        setInputName(event.target.value);
    };

    const onInputPhone = (event) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setInputPhone(formattedValue);
    };

    const onInputEmail = (event) => {
        setInputEmail(event.target.value);
    };

    const onInputPw = (event) => {
        setInputPw(event.target.value);
        if (!regexPw.test(event.target.value)) {
            setInputPwErrorMessage(
                "비밀번호는 영어,숫자,특수문자(!@#$%^&*+-=_?)만 입력 가능합니다."
            );
        } else {
            setInputPwErrorMessage("");
        }
    };

    const onInputCheckPw = (event) => {
        setInputCheckPw(event.target.value);

        if (
            event.target.value !== inputPw ||
            !regexPw.test(event.target.value) ||
            !regexPw.test(inputPw)
        ) {
            setInputPwErrorMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setInputPwErrorMessage("");
        }
    };

    const onFindPw = () => {
        setIsShow(!isShow);
    };

    const isFormValid = () => {
        return !inputId.trim() || !inputName.trim() || !inputPhone.trim() || !inputEmail.trim();
    };

    return {
        inputId,
        inputName,
        inputPhone,
        inputEmail,
        inputPw,
        inputCheckPw,
        inputPwErrorMessage,
        isShow,
        regexPw,
        onInputId,
        onInputName,
        onInputPhone,
        onInputEmail,
        onInputPw,
        onInputCheckPw,
        onFindPw,
        isFormValid,
    };
};
