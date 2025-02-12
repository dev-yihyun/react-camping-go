import { FaArrowLeft } from "react-icons/fa6";
import IconButton from "../../component/Button/IconButton";
import TabCard from "../../component/Card/TabCard";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import Title from "../../component/Text/Title";
import { useMyPage } from "./hook/useMyPage";

function MyPage() {
    const { userId, navigate, activeTab, setActiveTab, tabs } = useMyPage();

    return (
        <>
            <Nav type="mypage" userId={userId} />
            <Page>
                <FlexBox direction="column">
                    <FlexBox direction="row" gap="8px">
                        <IconButton icon={<FaArrowLeft />} onClick={() => navigate(-1)} />
                        <Title>MyPage</Title>
                    </FlexBox>
                    <Space height="8" />
                    <TabCard tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                </FlexBox>
            </Page>
        </>
    );
}
export default MyPage;
