import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import Password from "../../component/Input/Password";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Text from "../../component/Text/Text";
import Title from "../../component/Text/Title";
import { formatPhoneNumber } from "../../function/formatPhoneNumber";
function FindPw() {
    const [inputId, setInputId] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputCheckPw, setInputCheckPw] = useState("");
    const [inputPwErrorMessage, setInputPwErrorMessage] = useState("");
    const [isShow, setIsShow] = useState(false);

    const regexPw = /^[a-zA-Z0-9!@#$%^&*+\-=_?]*$/;

    const onInputId = (event) => {
        setInputId(event.target.value);
    };

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

    const onFindPw = () => {
        setIsShow(!isShow);
    };

    const onInputPw = (event) => {
        setInputPw(event.target.value);
        if (!regexPw.test(event.target.value)) {
            setInputPwErrorMessage(
                "비밀번호는 영어,숫자,특수문자(!@#$%^&*+-=_?)만 입력 가능합니다."
            );
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

    const isFormValid = () => {
        return !inputId.trim() || !inputName.trim() || !inputPhone.trim() || !inputEmail.trim();
    };

    return (
        <>
            <Page>
                <FlexBox>
                    <FlexBox direction="row" gap="8px">
                        <IconButton icon={<FaArrowLeft />} />
                        <Title>FIND PW</Title>
                    </FlexBox>
                    <Card>
                        <FlexBox gap="8px">
                            <Input
                                placeholder="ID"
                                maxLength={16}
                                value={inputId}
                                onChange={onInputId}
                            />
                            <Input
                                placeholder="NAME"
                                maxLength={16}
                                value={inputName}
                                onChange={onInputName}
                            />
                            <Input
                                type="tel"
                                placeholder="PHONE"
                                maxLength={13}
                                value={inputPhone}
                                onChange={onInputPhone}
                            />
                            <Input
                                placeholder="EMAIL"
                                maxLength={40}
                                value={inputEmail}
                                onChange={onInputEmail}
                            />
                            <Button disabled={isFormValid()} onClick={onFindPw}>
                                FIND PW
                            </Button>
                            {isShow && (
                                <>
                                    {/* ##TODO */}
                                    {/* DB에서 사용자 계정이 있는 경우 */}
                                    <Password
                                        placeholder="Reset Password"
                                        maxLength={16}
                                        value={inputPw}
                                        onChange={onInputPw}
                                    />
                                    <Password
                                        placeholder="Check Password"
                                        maxLength={16}
                                        value={inputCheckPw}
                                        onChange={onInputCheckPw}
                                    />
                                    {inputPwErrorMessage && (
                                        <Text alignSelf="flex-start" color="error">
                                            {inputPwErrorMessage}
                                        </Text>
                                    )}
                                    <Button
                                        disabled={
                                            !inputPw.trim() || // 비밀번호가 비어있거나
                                            !regexPw.test(inputPw) || // 비밀번호가 정규식을 만족하지 않거나
                                            !inputCheckPw.trim() || // 확인 비밀번호가 비어있거나
                                            inputPw !== inputCheckPw || // 비밀번호와 확인 비밀번호가 일치하지 않거나
                                            inputPwErrorMessage // 에러 메시지가 존재할 때
                                        }
                                    >
                                        Reset Password
                                    </Button>
                                    {/* DB에서 사용자 계정이 없는 경우 */}
                                    <Text
                                        fontSize="24px"
                                        fontWeight="bold"
                                        color="red"
                                        alignSelf="center"
                                    >
                                        PW not found
                                    </Text>
                                </>
                            )}
                            {/* ##TODO */}
                            {/* router */}
                            {/* <Button>GO FIND ID</Button> */}
                        </FlexBox>
                    </Card>
                </FlexBox>
            </Page>
        </>
    );
}

export default FindPw;
