import { FaArrowLeft } from "react-icons/fa6";
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
import { useMyPage } from "./hook/useMyPage";

function MyPage() {
    const {
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
    } = useMyPage();

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
                                            inputEmailErrorMessage
                                        }
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
                                            inputPhone.replace(/\D/g, "").length < 11
                                        }
                                    >
                                        Phone 수정
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Text>
                                        Phone :
                                        {/* {userInfo?.phone || inputPhone || "010-0000-0000"} */}
                                    </Text>
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
                                inputResetPassword !== inputCheckPassword ||
                                !regexPw.test(inputResetPassword)
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
            <Nav type="mypage" userId={userId} />
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
