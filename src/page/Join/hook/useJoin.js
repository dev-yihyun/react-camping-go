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
    };

    const onInputPw = (event) => {
        setInputPw(event.target.value);
        if (!regexPw.test(event.target.value)) {
            setInputPwErrorMessage("비밀번호는 영어,숫자,특수문자만 입력 가능합니다.");
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

    // DB

    const onIdCheck = () => {
        console.log("##inputId", inputId);
        fetch("http://localhost:3001/idcheck", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ inputId }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`서버 요청 실패: ${res.status}`);
                }
                return res.json();
            })
            .then((json) => {
                console.log("##json", json);
                if (json.success) {
                    setInputIdErrorMessage("사용 가능한 아이디입니다.");
                } else {
                    setInputIdErrorMessage("사용할수 없는 아이디입니다.");
                }
            })
            .catch((error) => {
                console.error("오류:", error);
                alert("중복 체크 중 오류가 발생했습니다. 로그인으로 이동합니다.");
                navigate("/"); // 로그인 페이지로 이동
            });
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
