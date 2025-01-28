import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button/Button";
import IconButton from "../../component/Button/IconButton";
import TabCard from "../../component/Card/TabCard";
import Input from "../../component/Input/Input";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import Text from "../../component/Text/Text";
import Title from "../../component/Text/Title";

function MyPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            label: "Info",
            content: (
                <>
                    <FlexBox gap="8px">
                        <FlexBox align="flex-start" gap="8px">
                            <Text>가입시기 : 2025.01.01</Text>
                            <Text>ID : admin</Text>
                            <Text>Name : 홍길동</Text>
                            <Text>Email : email@email.com</Text>
                            <Input placeholder="Email" />
                            <Text color="error">오류 메시지</Text>
                            <Button>Email</Button>
                            <Button>취소</Button>
                            <Text>Phone : email@email.com</Text>
                            <Input placeholder="Phone" />
                            <Text color="error">오류 메시지</Text>
                            <Button>취소</Button>
                            <Button>Phone</Button>
                            <Button>회원 탈퇴</Button>
                        </FlexBox>
                    </FlexBox>
                </>
            ),
        },
        {
            label: "Password",
            content: (
                <>
                    <FlexBox align="flex-start" gap="8px">
                        <Input placeholder="Current Password" />
                        <Space height="3" />
                        <Input placeholder="Reset Password" />
                        <Input placeholder="Check password" />
                        <Text color="error">오류 메시지</Text>
                        <Button>reset password</Button>
                    </FlexBox>
                </>
            ),
        },
    ];
    return (
        <>
            <Nav type="mypage" />

            <Page>
                <FlexBox direction="column">
                    <FlexBox direction="row" gap="8px">
                        <IconButton icon={<FaArrowLeft />} onClick={() => navigate(-1)} />
                        <Title>MyPage</Title>
                    </FlexBox>
                    <Space height="7" />
                    <TabCard tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                </FlexBox>
            </Page>
        </>
    );
}
export default MyPage;
