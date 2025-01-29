import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import TabCard from "../../component/Card/TabCard";
import Input from "../../component/Input/Input";
import Password from "../../component/Input/Password";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import Text from "../../component/Text/Text";
import Title from "../../component/Text/Title";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";

function MyPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const [inputEmail, setInputEmail] = useState("");
    const [inputEmailErrorMessage, setInputEmailErrorMessage] = useState("");
    const [isShowEmail, setIsShowEmail] = useState(false);
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [isShowPhone, setIsShowPhone] = useState(false);
    const [inputPhone, setInputPhone] = useState("");
    const [inputPhoneErrorMessage, setInputPhoneErrorMessage] = useState("");

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
        setInputEmail(event.target.value);
        if (!regexEmail.test(event.target.value)) {
            setInputEmailErrorMessage("이메일 주소를 정확히 입력해주세요.");
        } else {
            setInputEmailErrorMessage("");
        }
    };

    const onShowEmail = () => {
        if (isShowEmail) {
            // 이메일 수정 취소 시 초기값으로 되돌림
            setInputEmail("example@email.com");
            setInputEmailErrorMessage(""); // 에러 메시지도 초기화
        }
        setIsShowEmail(!isShowEmail);
    };

    const onInputPhone = (event) => {
        const formattedValue = formatPhoneNumber(event.target.value);
        setInputPhone(formattedValue);
        if (/^\d{3}-\d{4}-\d{4}$/.test(formattedValue)) {
            //전화번호 정규식과 맞을 때
            setInputPhoneErrorMessage("");
        } else {
            // 맞지 않을 때
            setInputPhoneErrorMessage("전화번호를 올바른 형식으로 입력해 주세요.");
        }
    };

    const onShowPhone = () => {
        if (isShowPhone) {
            // 전화번호 수정 취소 시 초기값으로 되돌림
            setInputPhone("010-0000-0000");
            setInputPhoneErrorMessage(""); // 에러 메시지도 초기화
        }
        setIsShowPhone(!isShowPhone);
    };

    const onInputCurrentPassword = (event) => {
        setInputCurrentPassword(event.target.value);
    };

    const onInputResetPassword = (event) => {
        setInputResetPassword(event.target.value);
        if (!regexPw.test(event.target.value)) {
            setInputPasswordErrorMessage(
                "비밀번호는 영어,숫자,특수문자(!@#$%^&*+-=_?)만 입력 가능합니다."
            );
        } else {
            setInputPasswordErrorMessage("");
        }
    };

    const onInputCheckPassword = (event) => {
        setInputCheckPassword(event.target.value); // 새 비밀번호와 확인 비밀번호가 다를 경우 에러 메시지 설정
        if (inputResetPassword !== event.target.value) {
            setInputPasswordErrorMessage("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        } else {
            setInputPasswordErrorMessage(""); // 동일한 경우 에러 메시지 제거
        }
        if (!regexPw.test(event.target.value)) {
            setInputPasswordErrorMessage(
                "비밀번호는 영어,숫자,특수문자(!@#$%^&*+-=_?)만 입력 가능합니다."
            );
        } else {
            setInputPasswordErrorMessage("");
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
                            <Text>가입시기 : 2025.01.01</Text>
                            <Text>ID : admin</Text>
                            <Text>Name : 홍길동</Text>
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
                                            inputEmailErrorMessage
                                        }
                                    >
                                        Email 수정하기
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Text>Email : example@email.com</Text>
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
                                            inputPhone.replace(/\D/g, "").length < 11
                                        }
                                    >
                                        Phone 수정
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Text>Phone : {inputPhone}</Text>
                                    <Button onClick={onShowPhone}>Phone</Button>
                                </>
                            )}

                            <Button>회원 탈퇴</Button>
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
                                inputPasswordErrorMessage ||
                                inputResetPassword !== inputCheckPassword || // 새 비밀번호와 확인 비밀번호가 다르면 비활성화
                                !regexPw.test(inputResetPassword) // 새 비밀번호가 정규식 조건에 맞지 않으면 비활성화
                            }
                        >
                            reset password
                        </Button>
                        <Space height="4" />
                    </FlexBox>
                </>
            ),
        },
    ];
    return (
        <>
            <Nav type="mypage" />
            <Page>
                <FlexBox direction="column">
                    <FlexBox direction="row" gap="8px">
                        <IconButton icon={<FaArrowLeft />} onClick={() => navigate(-1)} />
                        <Title>MyPage</Title>
                    </FlexBox>
                    <Space height="8" />
                    <TabCard tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                </FlexBox>
            </Page>
        </>
    );
}
export default MyPage;
