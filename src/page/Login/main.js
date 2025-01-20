import Button from "../../component/Button/Button";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import Password from "../../component/Input/Password";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Text from "../../component/Text/Text";
import TextLink from "../../component/Text/TextLink";
import Title from "../../component/Text/Title";
import { useLogin } from "./hook/useLogin";

function Login() {
    const { inputId, inputPw, onInputId, onInputPw, onLogin } = useLogin();

    return (
        <>
            <Page>
                <Card>
                    <FlexBox gap="16px">
                        <Title>🏕️Camping Go⛺</Title>
                        <Input
                            placeholder="ID"
                            maxLength="16"
                            value={inputId}
                            onChange={onInputId}
                        />
                        <Password
                            placeholder="PW"
                            maxLength="16"
                            value={inputPw}
                            onChange={onInputPw}
                        />
                        <Button onClick={onLogin}>Login</Button>

                        <Space height="1" />
                        <FlexBox direction={"column"} gap={"30px"}>
                            <FlexBox direction={"row"} gap={"8px"}>
                                <Text>Did you forget your account?</Text>
                                <TextLink
                                    text=" {link} or {link}"
                                    links={[
                                        {
                                            to: "/FindId",
                                            label: "ID",
                                            color: "#0D47A1",
                                            fontWeight: "bold",
                                        },
                                        {
                                            to: "/FindPW",
                                            label: "Password",
                                            color: "#0D47A1",
                                            fontWeight: "bold",
                                        },
                                    ]}
                                />
                            </FlexBox>
                            <FlexBox direction={"row"} gap={"8px"}>
                                <Text>You're not a member yet?</Text>
                                <TextLink
                                    text="{link}"
                                    links={[
                                        {
                                            to: "/Join",
                                            label: "Sign up for membership>",
                                            fontWeight: "bold",
                                            color: "#212121",
                                        },
                                    ]}
                                />
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                    <Space height="10" />
                </Card>
            </Page>
        </>
    );
}

export default Login;
