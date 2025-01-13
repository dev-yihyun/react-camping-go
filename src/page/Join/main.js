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
function Join() {
    const [inputID, setInputID] = useState("");
    const [inputPW, setInputPW] = useState("");
    const [inputCheckPW, setInputCheckPW] = useState("");
    const [inputIDErrorMessage, setInputIDErrorMessage] = useState("");
    const [inputPWErrorMessage, setInputPWErrorMessage] = useState("");
    const [inputName, setInputName] = useState("");
    const regexID = /^[a-zA-Z0-9]*$/;
    const regexPW = /^[a-zA-Z0-9!@#$%^&*+\-=_?]*$/;
    const onInputID = (event) => {
        setInputID(event.target.value);
        if (!regexID.test(event.target.value)) {
            setInputIDErrorMessage("아이디는 영어 대소문자와 숫자만 가능합니다.");
        } else {
            setInputIDErrorMessage("");
        }
    };
    const onIDCheck = () => {
        alert("클릭");
    };

    const onInputPW = (event) => {
        setInputPW(event.target.value);
        if (!regexPW.test(event.target.value)) {
            setInputPWErrorMessage(
                "비밀번호는 영어,숫자,특수문자(!@#$%^&*+-=_?)만 입력 가능합니다."
            );
        } else {
            setInputPWErrorMessage("");
        }
    };
    const onInputCheckPW = (event) => {
        setInputCheckPW(event.target.value);

        if (
            event.target.value !== inputPW ||
            !regexPW.test(event.target.value) ||
            !regexPW.test(inputPW)
        ) {
            setInputPWErrorMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setInputPWErrorMessage("");
        }
    };
    const onInputName = (event) => {
        setInputName(event.target.value);
    };

    return (
        <>
            <Page>
                <FlexBox>
                    <FlexBox direction="row" gap={"8px"}>
                        <IconButton icon={<FaArrowLeft />} />
                        <Title>Join</Title>
                    </FlexBox>
                    <Card>
                        <FlexBox gap="8px">
                            <Input
                                placeholder="ID"
                                value={inputID}
                                onChange={onInputID}
                                maxLength="16"
                                error={inputIDErrorMessage}
                            />
                            {inputIDErrorMessage && (
                                <Text color="error" alignSelf="flex-start">
                                    {inputIDErrorMessage}
                                </Text>
                            )}
                            <Button
                                disabled={!inputID || !!inputIDErrorMessage}
                                onClick={onIDCheck}
                            >
                                Check ID
                            </Button>
                            <Password
                                placeholder="Password"
                                value={inputPW}
                                onChange={onInputPW}
                                maxLength="16"
                            />
                            <Password
                                placeholder="Check Password"
                                value={inputCheckPW}
                                onChange={onInputCheckPW}
                                maxLength="16"
                            />

                            {inputPWErrorMessage && (
                                <Text alignSelf="flex-start" color="error">
                                    {inputPWErrorMessage}
                                </Text>
                            )}
                            <Input placeholder="NAME" value={inputName} onChange={onInputName} />
                            <Input placeholder="PHONE" />
                            <Text alignSelf="flex-start" color="error">
                                오류 메시지
                            </Text>
                            <Input placeholder="EMAIL" />
                            <Text alignSelf="flex-start" color="error">
                                오류 메시지
                            </Text>
                            <Button>버튼</Button>
                        </FlexBox>
                    </Card>
                </FlexBox>
            </Page>
        </>
    );
}

export default Join;
