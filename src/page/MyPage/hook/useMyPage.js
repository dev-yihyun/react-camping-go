import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate ";
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

    const userId = localStorage.getItem("userId");
    const [userInfo, setUserInfo] = useState({});

    const [insertDate, setInsertDate] = useState("");
    const [userName, setUserName] = useState("");

    console.log("##userInfo", userInfo);

    const getUserInfo = async (userData) => {
        const response = await fetch("http://localhost:3001/mypage", {
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

    const setUserInfoSuccess = (data) => {
        if (data.success) {
            console.log("##데이터 찾기 성공");
            setUserInfo(data?.userinfo); // 데이터 저장
            setInsertDate(formatDate(data?.insertdate));
            setUserName(data?.name);
            setInputEmail(data?.email);
            setInputPhone(data?.phone);
        } else {
            console.log("##데이터 찾기 실패");
            alert("오류가 발생했습니다. 홈으로 이동합니다.");
            navigate("/home");
        }
    };

    const setUserInfoError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버요청 중 오류가 발생했습니다. 홈으로 이동합니다.");
        navigate("/home");
    };

    const mypageMutation = useMutation({
        mutationFn: getUserInfo,
        onSuccess: setUserInfoSuccess,
        onError: setUserInfoError,
    });

    useEffect(() => {
        mypageMutation.mutate(userId);
    }, []);

    useEffect(() => {
        if (userInfo) {
            setInputEmail(userInfo?.email || "정보 없음");
            setInputPhone(userInfo?.phone || "정보 없음");
        }
    }, [userInfo]);

    useEffect(() => {
        setInputPhone(userInfo?.phone || "정보없음");
        setInputPhoneErrorMessage("");
        setInputEmail(userInfo?.email || "정보없음");
        setInputEmailErrorMessage("");
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
            setInputEmail(userInfo?.email);
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
            setInputPhone(userInfo?.phone);
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

    const saveEmail = async (userData) => {
        const response = await fetch("http://localhost:3001/emailupdate", {
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

    const setSaveEmailSuccess = (data) => {
        if (data.success) {
            console.log("##이메일 업데이트 성공.");
            alert("이메일 업데이트 성공. 홈 화면으로 이동합니다.");
            navigate("/home");
        } else {
            console.log("##이메일 업데이트 실패");
            alert("이메일 수정 중 오류가 발생했습니다. 홈 화면으로 이동합니다.");
            navigate("/home");
        }
    };

    const setSaveEmailError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버요청 중 오류가 발생했습니다. 홈으로 이동합니다.");
        navigate("/home");
    };

    const saveEmailMutation = useMutation({
        mutationFn: saveEmail,
        onSuccess: setSaveEmailSuccess,
        onError: setSaveEmailError,
    });

    const onSaveEmail = () => {
        const userData = { inputEmail, inputId: userId };
        saveEmailMutation.mutate(userData);
        console.log("##onSaveEmail");
    };

    const savePhone = async (userData) => {
        const response = await fetch("http://localhost:3001/phoneupdate", {
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

    const setSavePhoneSuccess = (data) => {
        if (data.success) {
            console.log("##전화번호 업데이트 성공.");
            alert("전화번호 업데이트 성공. 홈 화면으로 이동합니다.");
            navigate("/home");
        } else {
            console.log("##전화번호 업데이트 실패");
            alert("전화번호 수정 중 오류가 발생했습니다. 홈 화면으로 이동합니다.");
            navigate("/home");
        }
    };

    const setSavePhoneError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버요청 중 오류가 발생했습니다. 홈으로 이동합니다.");
        navigate("/home");
    };

    const savePhoneMutation = useMutation({
        mutationFn: savePhone,
        onSuccess: setSavePhoneSuccess,
        onError: setSavePhoneError,
    });

    const onSavePhone = () => {
        const userData = { inputPhone, inputId: userId };
        savePhoneMutation.mutate(userData);
    };

    return {
        userId,
        insertDate,
        userName,
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
        onSaveEmail,
        onSavePhone,
    };
};
