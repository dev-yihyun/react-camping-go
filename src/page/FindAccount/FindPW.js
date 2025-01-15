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
import { useFindPw } from "./hook/useFindPw";
function FindPw() {
    const {
        inputId,
        inputName,
        inputPhone,
        inputEmail,
        inputPw,
        inputCheckPw,
        inputPwErrorMessage,
        isShow,
        regexPw,
        onInputId,
        onInputName,
        onInputPhone,
        onInputEmail,
        onInputPw,
        onInputCheckPw,
        onFindPw,
        isFormValid,
    } = useFindPw();

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
                                            !inputPw.trim() ||
                                            !regexPw.test(inputPw) ||
                                            !inputCheckPw.trim() ||
                                            inputPw !== inputCheckPw ||
                                            inputPwErrorMessage
                                        }
                                    >
                                        Reset Password
                                    </Button>
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
                        </FlexBox>
                    </Card>
                </FlexBox>
            </Page>
        </>
    );
}

export default FindPw;
