import { useEffect, useState } from "react";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

export const useFindId = () => {
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [activeTab, setActiveTab] = useState(0);

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

    useEffect(() => {
        setInputName("");
        setInputEmail("");
        setInputPhone("");
    }, [activeTab]);

    const isPhoneTabDisabled =
        !inputName.trim() || !inputPhone.trim() || inputPhone.replace(/\D/g, "").length < 11;
    const isEmailTabDisabled = !inputName.trim() || !inputEmail.trim();

    return {
        inputName,
        inputPhone,
        inputEmail,
        activeTab,
        setActiveTab,
        onInputName,
        onInputPhone,
        onInputEmail,
        isPhoneTabDisabled,
        isEmailTabDisabled,
    };
};
