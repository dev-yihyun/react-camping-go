import FlexBox from "../../component/Layout/FlexBox";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import ListItem from "./ui/ListItem";
import MainSection from "./ui/MainSection";
import PageButton from "./ui/PageButton";
function Home() {
    return (
        <>
            <Nav type="home" />
            <MainSection />
            <Space height={8} />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <Space height={8} />
            <FlexBox direction="row" wrap="wrap" gap="10px">
                <PageButton>{"<"}</PageButton>
                <PageButton>{"<<"}</PageButton>
                <PageButton>222</PageButton>
                <PageButton>222</PageButton>
                <PageButton>222</PageButton>
                <PageButton>222</PageButton>
                <PageButton>222</PageButton>
                <PageButton>{">>"}</PageButton>
                <PageButton>{">"}</PageButton>
            </FlexBox>

            <Space height={8} />
        </>
    );
}

export default Home;
