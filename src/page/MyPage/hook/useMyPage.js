import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../component/Button/Button";
import Input from "../../../component/Input/Input";
import Password from "../../../component/Input/Password";
import FlexBox from "../../../component/Layout/FlexBox";
import Space from "../../../component/Layout/Space";
import Text from "../../../component/Text/Text";
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
    sessionStorage.removeItem("currentPage");
    sessionStorage.removeItem("currentPageGroup");

    const [currentEmail, setCurrentEmail] = useState("");
    const [currentPhone, setCurrentPhone] = useState("");

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
            setUserInfo(data?.userinfo);
            setInsertDate(formatDate(data?.insertdate));
            setUserName(data?.name);
            setInputEmail(data?.email);
            setInputPhone(data?.phone);
            setCurrentEmail(data?.email);
            setCurrentPhone(data?.phone);
        } else {
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
        setInputPhone(userInfo?.phone || "정보없음");
        setInputPhoneErrorMessage("");
        setInputEmail(userInfo?.email || "정보없음");
        setInputEmailErrorMessage("");
        setIsShowEmail(false);
        setIsShowPhone(false);
    }, [activeTab]);

    const onInputEmail = (event) => {
        const { value } = event.target;
        setInputEmail(value);
        setInputEmailErrorMessage(
            regexEmail.test(value) ? "" : "이메일 주소를 정확히 입력해주세요."
        );
    };

    const onShowEmail = () => {
        if (isShowEmail) {
            setInputEmail(currentEmail);
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
            setInputPhone(currentPhone);
            setInputPhoneErrorMessage("");
        }
        setIsShowPhone(!isShowPhone);
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
            alert("이메일 업데이트 성공. 홈 화면으로 이동합니다.");
            navigate("/home");
        } else {
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
            alert("전화번호 업데이트 성공. 홈 화면으로 이동합니다.");
            navigate("/home");
        } else {
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

    const onInputCurrentPassword = (event) => {
        const { value } = event.target;
        setInputCurrentPassword(value);
    };

    const onInputResetPassword = (event) => {
        const { value } = event.target;
        setInputResetPassword(value);
        setInputPasswordErrorMessage(
            regexPw.test(value) ? "" : "비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다."
        );
    };

    const onInputCheckPassword = (event) => {
        const { value } = event.target;
        setInputCheckPassword(value);
        if (inputResetPassword !== value) {
            setInputPasswordErrorMessage("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        } else {
            setInputPasswordErrorMessage(
                regexPw.test(value) ? "" : "비밀번호는 영어, 숫자, 특수문자만 입력 가능합니다."
            );
        }
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
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            navigate("/login");
        } else {
            alert("비밀번호 초기화에 실패했습니다. 홈으로 이동합니다.");
            navigate("/home");
        }
    };
    const setUpdateUserError = (error) => {
        console.error(`오류: ${error}`);
        alert("비밀번호 초기화 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/home");
    };

    const resetPasswordMutation = useMutation({
        mutationFn: updateUserInfo,
        onSuccess: setUpdateUserSuccess,
        onError: setUpdateUserError,
    });

    const findUserPw = async (userData) => {
        const response = await fetch("http://localhost:3001/checkcurrentpassword", {
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

    const findUserPwSuccess = (data) => {
        if (data.success) {
            const userData = { inputPw: inputCheckPassword, inputId: userId };
            resetPasswordMutation.mutate(userData);
        } else {
            alert("현재 비밀번호가 일치하지 않습니다.");
        }
    };
    const findUserPwError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버 요청 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/");
    };

    const checkCurrentPassword = useMutation({
        mutationFn: findUserPw,
        onSuccess: findUserPwSuccess,
        onError: findUserPwError,
    });

    const onResetPassword = () => {
        const userData = { inputId: userId, inputPw: inputCurrentPassword };
        checkCurrentPassword.mutate(userData);
    };

    const deleteUser = async (userData) => {
        const response = await fetch("http://localhost:3001/deleteuser", {
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
    const deleteUserSuccess = (data) => {
        if (data.success) {
            alert("탈퇴 되었습니다. 로그인 화면으로 돌아갑니다.");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            sessionStorage.clear();
            navigate("/");
        } else {
            alert("서버 요청 중 오류가 발생했습니다. 홈으로 돌아갑니다.");
            navigate("/home");
        }
    };
    const deleteUserError = (error) => {
        console.error(`오류: ${error}`);
        alert("서버 요청 중 오류가 발생했습니다. 로그인으로 이동합니다.");
        navigate("/");
    };

    const deleteMutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: deleteUserSuccess,
        onError: deleteUserError,
    });

    const onDelete = () => {
        if (window.confirm("정말 탈퇴하시겠습니가?")) {
            deleteMutation.mutate(userId);
        } else {
            alert("탈퇴를 취소합니다.");
        }
    };
    const tabs = [
        {
            label: "Info",
            content: (
                <>
                    <FlexBox gap="8px">
                        <FlexBox align="flex-start" gap="8px">
                            <Space height="4" />
                            <Text>가입시기 : {insertDate || "정보없음"}</Text>
                            <Text>ID : {userId || "정보없음"}</Text>
                            <Text>Name : {userName || "정보없음"}</Text>
                            {isShowEmail ? (
                                <>
                                    <Input
                                        error={inputEmailErrorMessage}
                                        type="email"
                                        placeholder="Email"
                                        maxLength={40}
                                        value={inputEmail}
                                        onChange={onInputEmail}
                                    />
                                    {inputEmailErrorMessage && (
                                        <Text color="error">{inputEmailErrorMessage}</Text>
                                    )}
                                    <Button onClick={onShowEmail}>취소</Button>
                                    <Button
                                        disabled={
                                            !regexEmail.test(inputEmail) ||
                                            !inputEmail.trim() ||
                                            inputEmailErrorMessage ||
                                            currentEmail === inputEmail
                                        }
                                        onClick={onSaveEmail}
                                    >
                                        Email 수정하기
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Text>Email :{inputEmail || "정보없음"}</Text>
                                    <Button onClick={onShowEmail}>Email 수정하기</Button>
                                </>
                            )}

                            {isShowPhone ? (
                                <>
                                    <Input
                                        error={inputPhoneErrorMessage}
                                        type="tel"
                                        placeholder="PHONE"
                                        maxLength={13}
                                        value={inputPhone}
                                        onChange={onInputPhone}
                                    />
                                    {inputPhoneErrorMessage && (
                                        <Text color="error">{inputPhoneErrorMessage}</Text>
                                    )}
                                    <Button onClick={onShowPhone}>취소</Button>
                                    <Button
                                        disabled={
                                            !inputPhone.trim() ||
                                            inputPhone.replace(/\D/g, "").length < 11 ||
                                            currentPhone === inputPhone
                                        }
                                        onClick={onSavePhone}
                                    >
                                        Phone 수정
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Text>Phone : {inputPhone || "정보없음"}</Text>
                                    <Button onClick={onShowPhone}>Phone</Button>
                                </>
                            )}

                            <Button onClick={onDelete}>회원 탈퇴</Button>
                        </FlexBox>
                        <Space height="4" />
                    </FlexBox>
                </>
            ),
        },
        {
            label: "Password",
            content: (
                <>
                    <FlexBox justify="center" align="center" gap="8px">
                        <Space height="4" />
                        <Password
                            maxLength="16"
                            placeholder="Current Password"
                            value={inputCurrentPassword}
                            onChange={onInputCurrentPassword}
                        />
                        <Space height="3" />
                        <Password
                            error={inputPasswordErrorMessage}
                            maxLength="16"
                            placeholder="Reset Password"
                            value={inputResetPassword}
                            onChange={onInputResetPassword}
                        />
                        <Password
                            error={inputPasswordErrorMessage}
                            maxLength="16"
                            placeholder="Check password"
                            value={inputCheckPassword}
                            onChange={onInputCheckPassword}
                        />
                        {inputPasswordErrorMessage && (
                            <Text color="error">{inputPasswordErrorMessage}</Text>
                        )}
                        <Button
                            disabled={
                                !inputCurrentPassword.trim() ||
                                !inputCheckPassword.trim() ||
                                !inputResetPassword.trim() ||
                                inputResetPassword !== inputCheckPassword ||
                                !regexPw.test(inputResetPassword)
                            }
                            onClick={onResetPassword}
                        >
                            reset password
                        </Button>
                        <Space height="4" />
                    </FlexBox>
                </>
            ),
        },
    ];
    return { userId, navigate, activeTab, setActiveTab, tabs };
};
