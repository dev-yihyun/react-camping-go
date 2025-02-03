import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import Password from "../../component/Input/Password";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Text from "../../component/Text/Text";
import Title from "../../component/Text/Title";
import { useJoin } from "./hook/useJoin";
function Join() {
    const navigate = useNavigate();
    const {
        inputId,
        inputPw,
        inputCheckPw,
        inputIdErrorMessage,
        inputPwErrorMessage,
        inputName,
        inputPhone,
        checkPhone,
        inputEmail,
        inputEmailErrorMessage,
        idCheck,
        onInputId,
        onIdCheck,
        onInputPw,
        onInputCheckPw,
        onInputName,
        onInputPhone,
        onInputEmail,
        onJoin,
        isFormValid,
    } = useJoin();

    return (
        <>
            <Page>
                <FlexBox>
                    <FlexBox direction="row" gap={"8px"}>
                        <IconButton icon={<FaArrowLeft />} onClick={() => navigate(-1)} />
                        <Title>Join</Title>
                    </FlexBox>
                    <Card>
                        <FlexBox gap="8px">
                            <Input
                                placeholder="ID"
                                value={inputId}
                                onChange={onInputId}
                                maxLength="16"
                                error={inputIdErrorMessage ? (idCheck ? false : true) : false}
                            />
                            {inputIdErrorMessage && (
                                <Text color={idCheck ? "green" : "error"} alignSelf="flex-start">
                                    {inputIdErrorMessage}
                                </Text>
                            )}
                            <Button
                                disabled={!inputId || !!inputIdErrorMessage || inputId.length < 4}
                                onClick={onIdCheck}
                            >
                                Check ID
                            </Button>
                            <Password
                                placeholder="Password"
                                value={inputPw}
                                onChange={onInputPw}
                                maxLength="16"
                                error={inputPwErrorMessage}
                            />
                            <Password
                                placeholder="Check Password"
                                value={inputCheckPw}
                                onChange={onInputCheckPw}
                                maxLength="16"
                                error={inputPwErrorMessage}
                            />

                            {inputPwErrorMessage && (
                                <Text alignSelf="flex-start" color="error">
                                    {inputPwErrorMessage}
                                </Text>
                            )}
                            <Input
                                placeholder="NAME"
                                maxLength="16"
                                value={inputName}
                                onChange={onInputName}
                            />
                            <Input
                                type="tel"
                                placeholder="PHONE"
                                maxLength={13}
                                value={inputPhone}
                                onChange={onInputPhone}
                                error={checkPhone}
                            />
                            {checkPhone ? (
                                <Text alignSelf="flex-start" color="error">
                                    전화번호를 올바른 형식으로 입력해 주세요.
                                </Text>
                            ) : (
                                ""
                            )}
                            <Input
                                placeholder="EMAIL"
                                maxLength={40}
                                value={inputEmail}
                                onChange={onInputEmail}
                                error={inputEmailErrorMessage}
                            />
                            {inputEmailErrorMessage && (
                                <Text alignSelf="flex-start" color="error">
                                    {inputEmailErrorMessage}
                                </Text>
                            )}

                            <Button disabled={!isFormValid()} onClick={onJoin}>
                                Join
                            </Button>
                        </FlexBox>
                    </Card>
                </FlexBox>
            </Page>
        </>
    );
}

export default Join;
