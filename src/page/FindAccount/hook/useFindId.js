import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

export const useFindId = () => {
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [activeTab, setActiveTab] = useState(0);
    const [resultMessage, setResultMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setInputName("");
        setInputEmail("");
        setInputPhone("");
        setResultMessage("");
    }, [activeTab]);

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

    const isPhoneTabDisabled =
        !inputName.trim() || !inputPhone.trim() || inputPhone.replace(/\D/g, "").length < 11;

    const isEmailTabDisabled = !inputName.trim() || !inputEmail.trim();

    const findUserById = async (userData) => {
        const response = await fetch("http://localhost:3001/findid", {
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
    const setFindIdSuccess = (data) => {
        setResultMessage(data.success ? `Your ID: ${data.id}` : "ID not found");
    };
    const setFindIdError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버 요청 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/");
    };

    const findIdMutation = useMutation({
        mutationFn: findUserById,
        onSuccess: setFindIdSuccess,
        onError: setFindIdError,
    });

    const findId = (type, inputData) => {
        findIdMutation.mutate({ dataType: type, inputName, inputData });
    };

    return {
        inputName,
        inputPhone,
        inputEmail,
        activeTab,
        resultMessage,
        setActiveTab,
        onInputName,
        onInputPhone,
        onInputEmail,
        isPhoneTabDisabled,
        isEmailTabDisabled,
        findIdByPhone: () => findId("phone", inputPhone),
        findIdByEmail: () => findId("email", inputEmail),
    };
};
