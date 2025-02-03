import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

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
    const [idCheck, setIdCheck] = useState(false);

    const regexId = /^[a-zA-Z0-9]*$/;
    const regexPw = /^[a-zA-Z0-9!@#$%^&*+\-=_?]*$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const navigate = useNavigate();

    const onInputId = (event) => {
        setInputId(event.target.value);
        if (!regexId.test(event.target.value)) {
            setInputIdErrorMessage("아이디는 영어 대소문자와 숫자만 가능합니다.");
        } else {
            setInputIdErrorMessage("");
        }
        setIdCheck(false);
    };

    const onInputPw = (event) => {
        setInputPw(event.target.value);
    };

    const onInputCheckPw = (event) => {
        setInputCheckPw(event.target.value);

        if (!regexPw.test(event.target.value)) {
            setInputPwErrorMessage("비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다.");
        } else if (event.target.value !== inputPw) {
            setInputPwErrorMessage("비밀번호가 일치하지 않습니다.");
        } else if (event.target.value === inputPw && regexPw.test(event.target.value)) {
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

    // DB
    const getUserById = async (inputId) => {
        const response = await fetch("http://localhost:3001/idcheck", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ inputId }),
        });
        if (!response.ok) {
            console.error(`오류: ${response.status}`);
            throw new Error("서버 요청 실패");
        }
        return response.json();
    };
    const setIdCheckSuccess = (data) => {
        if (data.success) {
            setInputIdErrorMessage("사용 가능한 아이디입니다.");
            setIdCheck(true);
        } else {
            setInputIdErrorMessage("사용할수 없는 아이디입니다.");
            setIdCheck(false);
        }
    };

    const setIdCheckError = (error) => {
        console.error(`오류: ${error}`);
        alert("중복 체크 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        setIdCheck(false);
        navigate("/"); // 로그인 페이지로 이동
    };

    const idCheckMutation = useMutation({
        mutationFn: getUserById,
        onSuccess: setIdCheckSuccess,
        onError: setIdCheckError,
    });

    const onIdCheck = () => {
        idCheckMutation.mutate(inputId);
    };
    const insertUser = async (userData) => {
        const response = await fetch("http://localhost:3001/join", {
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
    const setInsertUserSuccess = (data) => {
        if (data.success) {
            alert("회원가입이 완료되었습니다. 로그인으로 이동합니다.");
        } else {
            alert("회원가입에 실패했습니다. 로그인으로 이동합니다.");
        }
        navigate("/"); // 로그인 페이지로 이동
    };
    const setInsertUserError = (error) => {
        console.error(`오류: ${error}`);
        alert("회원가입 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/"); // 로그인 페이지로 이동
    };

    const joinMutation = useMutation({
        mutationFn: insertUser,
        onSuccess: setInsertUserSuccess,
        onError: setInsertUserError,
    });

    const onJoin = () => {
        console.log("##inputId", inputId);
        console.log("##inputPw", inputPw);
        console.log("##inputName", inputName);
        console.log("##inputPhone", inputPhone);
        console.log("##inputEmail", inputEmail);
        const userData = { inputId, inputPw, inputName, inputPhone, inputEmail };
        joinMutation.mutate(userData);
    };

    const isFormValid = () => {
        return (
            inputId.trim() &&
            inputPw.trim() &&
            !inputPwErrorMessage &&
            inputName.trim() &&
            inputPhone.trim() &&
            !checkPhone &&
            inputEmail.trim() &&
            !inputEmailErrorMessage &&
            regexEmail.test(inputEmail) &&
            idCheck
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
        idCheck,
        onInputId,
        onIdCheck,
        onInputPw,
        onInputCheckPw,
        onInputName,
        onInputPhone,
        onInputEmail,
        onJoin,
        isFormValid,
    };
};
