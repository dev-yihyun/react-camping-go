import Button from "../../component/Button/Button";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
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
                    </FlexBox>
                    <Space height="10" />
                </Card>
            </Page>
        </>
    );
}

export default Login;
