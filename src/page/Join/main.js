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
    const [inputIDErrorMessage, setInputIDErrorMessage] = useState("");
    const regexID = /^[a-zA-Z0-9]*$/;
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
                            <Password placeholder="Password" />
                            <Password placeholder="Check Password" />
                            <Text alignSelf="flex-start" color="error">
                                오류 메시지
                            </Text>
                            <Input placeholder="NAME" />
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
