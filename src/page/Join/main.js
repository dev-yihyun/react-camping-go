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
                            <Input placeholder="ID" />
                            <Text alignSelf="flex-start" color="error">
                                오류 메시지
                            </Text>
                            <Button>버튼</Button>
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
