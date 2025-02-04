import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

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
    const navigate = useNavigate();

    const [pwResult, setPwResult] = useState(false);

    const onInputId = (event) => {
        const { value } = event.target;
        setInputId(value);
    };

    const onInputName = (event) => {
        const { value } = event.target;
        setInputName(value);
    };

    const onInputPhone = (event) => {
        const { value } = event.target;
        const formattedValue = formatPhoneNumber(value);
        setInputPhone(formattedValue);
    };

    const onInputEmail = (event) => {
        const { value } = event.target;
        setInputEmail(value);
    };

    const onInputPw = (event) => {
        const { value } = event.target;
        setInputPw(value);
        if (!regexPw.test(value)) {
            setInputPwErrorMessage("비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다.");
        }
    };

    const onInputCheckPw = (event) => {
        const { value } = event.target;
        setInputCheckPw(value);

        if (!regexPw.test(value)) {
            setInputPwErrorMessage("비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다.");
        } else if (value !== inputPw) {
            setInputPwErrorMessage("비밀번호가 일치하지 않습니다.");
        } else if (value === inputPw && regexPw.test(value)) {
            setInputPwErrorMessage("");
        }
    };

    const getUserByPw = async (userData) => {
        const response = await fetch("http://localhost:3001/findpw", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ userData }),
        });
        if (!response.ok) {
            console.error(`오류: ${response.status}`);
            throw new Error("서버 요청 실패");
        }
        return response.json();
    };

    const setFindPwSuccess = (data) => {
        setIsShow(true);
        if (data.success) {
            setPwResult(true);
        } else {
            setPwResult(false);
        }
    };

    const setFindPwError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버 요청 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/");
    };

    const findPwMutation = useMutation({
        mutationFn: getUserByPw,
        onSuccess: setFindPwSuccess,
        onError: setFindPwError,
    });

    const onFindPw = () => {
        const userData = {
            inputId,
            inputName,
            inputEmail,
            inputPhone,
        };
        findPwMutation.mutate(userData);
    };

    const isFormValid = () => {
        return (
            !inputId.trim() ||
            !inputName.trim() ||
            !inputPhone.trim() ||
            !inputEmail.trim() ||
            inputPhone.replace(/\D/g, "").length < 11
        );
    };

    const updateUserInfo = async (userData) => {
        const response = await fetch("http://localhost:3001/resetpassword", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ userData }),
        });
        if (!response.ok) {
            console.error(`오류: ${response.status}`);
            throw new Error("서버 요청 실패");
        }
        return response.json();
    };
    const setUpdateUserSuccess = (data) => {
        if (data.success) {
            alert("비밀번호 초기화에 성공했습니다. 로그인으로 이동합니다.");
        } else {
            alert("비밀번호 초기화에 실패했습니다. 로그인으로 이동합니다.");
        }
        navigate("/");
    };
    const setUpdateUserError = (error) => {
        console.error(`오류: ${error}`);
        alert("비밀번호 초기화 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/");
    };

    const resetPasswordMutation = useMutation({
        mutationFn: updateUserInfo,
        onSuccess: setUpdateUserSuccess,
        onError: setUpdateUserError,
    });

    const onResetPassword = () => {
        const userData = { inputPw, inputId };
        resetPasswordMutation.mutate(userData);
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
        pwResult,
        onInputId,
        onInputName,
        onInputPhone,
        onInputEmail,
        onInputPw,
        onInputCheckPw,
        onFindPw,
        onResetPassword,
        isFormValid,
    };
};
