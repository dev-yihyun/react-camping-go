import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import TabCard from "../../component/Card/TabCard";
import Input from "../../component/Input/Input";
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

    const [isShowPhone, setIsShowPhone] = useState(false);
    const [inputPhone, setInputPhone] = useState("");
    const [inputPhoneErrorMessage, setInputPhoneErrorMessage] = useState("");
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

    useEffect(() => {
        setInputEmail("example@email.com");
        setInputPhone("010-0000-0000");
    }, []);

    const tabs = [
        {
            label: "Info",
            content: (
                <>
                    <FlexBox gap="8px">
                        <FlexBox align="flex-start" gap="8px">
                            <Text>가입시기 : 2025.01.01</Text>
                            <Text>ID : admin</Text>
                            <Text>Name : 홍길동</Text>
                            {isShowEmail ? (
                                <>
                                    <Input
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
                    </FlexBox>
                </>
            ),
        },
        {
            label: "Password",
            content: (
                <>
                    <FlexBox align="flex-start" gap="8px">
                        <Input placeholder="Current Password" />
                        <Space height="3" />
                        <Input placeholder="Reset Password" />
                        <Input placeholder="Check password" />
                        <Text color="error">오류 메시지</Text>
                        <Button>reset password</Button>
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
                    <Space height="7" />
                    <TabCard tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                </FlexBox>
            </Page>
        </>
    );
}
export default MyPage;
