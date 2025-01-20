import Button from "../../component/Button/Button";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import TextLink from "../../component/Text/TextLink";
import Title from "../../component/Text/Title";

function Login() {
    return (
        <>
            <Page>
                <Card>
                    <FlexBox gap="16px">
                        <Title>🏕️Camping Go⛺</Title>
                        <Input placeholder="ID" />
                        <Input placeholder="PW" />
                        <Button>Login</Button>

                        <Space height="1" />
                        <TextLink
                            text="Did you forget your account? {link} or {link}"
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
                        <Space height="1" />
                        <TextLink
                            text="You're not a member yet? {link}"
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
                    <Space height="10" />
                </Card>
            </Page>
        </>
    );
}

export default Login;
