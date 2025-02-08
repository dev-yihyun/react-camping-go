import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import Password from "../../component/Input/Password";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Text from "../../component/Text/Text";
import Title from "../../component/Text/Title";
import { useFindPw } from "./hook/useFindPw";
function FindPw() {
    const navigate = useNavigate();

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
        pwResult,
        onInputId,
        onInputName,
        onInputPhone,
        onInputEmail,
        onInputPw,
        onInputCheckPw,
        onFindPw,
        onResetPassword,
        isFormValid,
    } = useFindPw();

    console.log("## !inputPw.trim()", !inputPw.trim());
    console.log("## !regexPw.test(inputPw)", !regexPw.test(inputPw));
    console.log("## !inputCheckPw.trim()", !inputCheckPw.trim());
    console.log("## inputPw !== inputCheckPw", inputPw !== inputCheckPw);
    console.log("## inputPwErrorMessage", inputPwErrorMessage ? "true" : "false");
    return (
        <>
            <Page>
                <FlexBox>
                    <FlexBox direction="row" gap="8px">
                        <IconButton icon={<FaArrowLeft />} onClick={() => navigate(-1)} />
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
                            {isShow &&
                                (pwResult ? (
                                    <>
                                        <Password
                                            placeholder="Reset Password"
                                            maxLength={16}
                                            value={inputPw}
                                            onChange={onInputPw}
                                            error={inputPwErrorMessage}
                                        />
                                        <Password
                                            placeholder="Check Password"
                                            maxLength={16}
                                            value={inputCheckPw}
                                            onChange={onInputCheckPw}
                                            error={inputPwErrorMessage}
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
                                                (inputPwErrorMessage ? true : false)
                                            }
                                            onClick={onResetPassword}
                                        >
                                            Reset Password
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Space height={10} />
                                        <Text
                                            fontSize="24px"
                                            fontWeight="bold"
                                            color="red"
                                            alignSelf="center"
                                        >
                                            PW not found
                                        </Text>
                                        <Space height={10} />
                                    </>
                                ))}
                        </FlexBox>
                    </Card>
                </FlexBox>
            </Page>
        </>
    );
}

export default FindPw;
