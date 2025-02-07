import axios from "axios";
import { useEffect, useState } from "react";
import PageButton from "../../component/Button/PageButton";
import Footer from "../../component/Footer/Footer";
import FlexBox from "../../component/Layout/FlexBox";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import Text from "../../component/Text/Text";
import ListItem from "./ui/ListItem";
import MainSection from "./ui/MainSection";
function Home() {
    const userId = localStorage.getItem("userId");
    const [campInfo, setCampInfo] = useState();

    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        console.log("##Loading..");
        setLoading(true);
        const API_URL = `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=WebTest&serviceKey=${process.env.REACT_APP_API_KEY}&_type=JSON`;
        try {
            const response = await axios.get(API_URL);
            setCampInfo(response?.data?.response?.body?.items?.item);
        } catch (err) {
            console.error(`fail api : ${err.message}`);
            return (
                <p>{err.message} : 데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
            );
        } finally {
            console.log("Loading..");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <Nav type="home" userId={userId} />
            <MainSection />
            <Space height={8} />
            {/* <Link to={"/campinfo"}>
                <ListItem />
            </Link> */}
            {loading ? (
                <>
                    <FlexBox>
                        <Text>로딩중 ...</Text>
                    </FlexBox>
                </>
            ) : (
                <>
                    <ListItem campInfo={campInfo} />
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
                </>
            )}

            <Space height={8} />
            <Footer />
        </>
    );
}

export default Home;
