import { useState } from "react";
import { formatPhoneNumber } from "../../../function/formatPhoneNumber";

export const useJoin = () => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputCheckPw, setInputCheckPw] = useState("");
    const [inputIdErrorMessage, setInputIdErrorMessage] = useState("");
    const [inputPwErrorMessage, setInputPwErrorMessage] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [checkPhone, setCheckPhone] = useState(false);
    const [inputEmail, setInputEmail] = useState("");
    const [inputEmailErrorMessage, setInputEmailErrorMessage] = useState("");

    const regexId = /^[a-zA-Z0-9]*$/;
    const regexPw = /^[a-zA-Z0-9!@#$%^&*+\-=_?]*$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const onInputId = (event) => {
        setInputId(event.target.value);
        if (!regexId.test(event.target.value)) {
            setInputIdErrorMessage("아이디는 영어 대소문자와 숫자만 가능합니다.");
        } else {
            setInputIdErrorMessage("");
        }
    };

    const onIdCheck = () => {
        alert("클릭");
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

    const onInputName = (event) => {
        setInputName(event.target.value);
    };

    const onInputPhone = (event) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setInputPhone(formattedValue);
        setCheckPhone(!/^\d{3}-\d{4}-\d{4}$/.test(formattedValue));
        if (event.target.value === "") {
            setCheckPhone(false);
        }
    };

    const onInputEmail = (event) => {
        setInputEmail(event.target.value);
        if (!regexEmail.test(event.target.value)) {
            setInputEmailErrorMessage("이메일 주소를 정확히 입력해주세요.");
        } else {
            setInputEmailErrorMessage("");
        }
    };

    const isFormValid = () => {
        return (
            inputId.trim() &&
            !inputIdErrorMessage &&
            inputPw.trim() &&
            !inputPwErrorMessage &&
            inputName.trim() &&
            inputPhone.trim() &&
            !checkPhone &&
            inputEmail.trim() &&
            !inputEmailErrorMessage &&
            regexEmail.test(inputEmail)
        );
    };

    return {
        inputId,
        inputPw,
        inputCheckPw,
        inputIdErrorMessage,
        inputPwErrorMessage,
        inputName,
        inputPhone,
        checkPhone,
        inputEmail,
        inputEmailErrorMessage,
        onInputId,
        onIdCheck,
        onInputPw,
        onInputCheckPw,
        onInputName,
        onInputPhone,
        onInputEmail,
        isFormValid,
    };
};
