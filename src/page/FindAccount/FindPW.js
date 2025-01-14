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
function FindPW() {
    return (
        <>
            <Page>
                <FlexBox>
                    <FlexBox direction="row" gap={"8px"}>
                        <IconButton icon={<FaArrowLeft />} />
                        <Title>FIND PW</Title>
                    </FlexBox>
                    <Card>
                        <FlexBox gap="8px">
                            <Input placeholder="ID" />
                            <Input placeholder="NAME" />
                            <Input placeholder="PHONE" />
                            <Input placeholder="EMAIL" />
                            <Button>FIND PW</Button>
                            <Password placeholder="Reset Password" />
                            <Password placeholder="Check Password" />
                            <Button>Reset Password</Button>
                            <Text fontSize="24px" fontWeight="bold" color="red" alignSelf="center">
                                PW not found
                            </Text>
                            <Button>GO FIND ID</Button>
                        </FlexBox>
                    </Card>
                </FlexBox>
            </Page>
        </>
    );
}

export default FindPW;
