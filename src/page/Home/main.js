import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [totalData, setTotalData] = useState(0);

    const numOfRows = 10;
    const pageButtonNumber = 5;
    const [currentPageGroup, setCurrentPageGroup] = useState(0);

    const totalPage = Math.ceil(totalData / numOfRows);

    const savedPage = sessionStorage.getItem("currentPage");
    const pageNo = useRef(savedPage ? Number(savedPage) : 1);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        setLoading(true);
        const response = await fetch(
            `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=${numOfRows}&pageNo=${pageNo.current}&MobileOS=ETC&MobileApp=WebTest&serviceKey=${process.env.REACT_APP_API_KEY}&_type=JSON`,
            {
                method: "GET", // GET 방식으로 변경
            }
        );

        if (!response.ok) {
            console.error(`오류: ${response.status}`);
            setLoading(false);
            setIsError(true);
            throw new Error("서버 요청 실패");
        }
        return response.json();
    };
    const fetchDataSuccess = (data) => {
        console.log("##data", data);
        console.log("##data_");
        setCampInfo(data?.response?.body?.items?.item);
        setTotalData(data?.response?.body?.totalCount);
        setLoading(false);
        setIsError(false);
    };
    const fetchDataError = (error) => {
        console.error(`오류: ${error}`);
        setLoading(false);
        setIsError(true);
    };
    const fetchDataMutation = useMutation({
        mutationFn: getData,
        onSuccess: fetchDataSuccess,
        onError: fetchDataError,
    });

    const fetchData = () => {
        fetchDataMutation.mutate();
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!userId) {
        alert("로그인 후 이용 가능합니다.");
        navigate("/");
    }

    const onGoPage = (index) => {
        pageNo.current = currentPageGroup * pageButtonNumber + index + 1;
        sessionStorage.setItem("currentPage", pageNo.current);
        fetchData();
    };

    const onPrevPage = () => {
        if (currentPageGroup > 0) {
            setCurrentPageGroup((prev) => prev - 1);
            pageNo.current = (currentPageGroup - 1) * pageButtonNumber + 1;
            sessionStorage.setItem("currentPage", pageNo.current);
            fetchData();
        }
    };
    const onPrev = () => {
        if (pageNo.current > 1) {
            pageNo.current -= 1;
            fetchData();
            if (pageNo.current <= currentPageGroup * pageButtonNumber) {
                setCurrentPageGroup((prev) => prev - 1);
            }
        }
    };
    const onNext = () => {
        if (pageNo.current < totalPage) {
            pageNo.current += 1;
            fetchData();
            if (pageNo.current > (currentPageGroup + 1) * pageButtonNumber) {
                setCurrentPageGroup((prev) => prev + 1);
            }
        }
    };
    const onNextPage = () => {
        if (currentPageGroup < totalPage - 1) {
            setCurrentPageGroup((prev) => prev + 1);
            pageNo.current = (currentPageGroup + 1) * pageButtonNumber + 1;
            fetchData();
        }
    };

    return (
        <>
            <Nav type="home" userId={userId} />
            <MainSection />
            <Space height={8} />

            {loading ? (
                <>
                    <FlexBox>
                        <Text>로딩중 ...</Text>
                    </FlexBox>
                </>
            ) : isError ? (
                <FlexBox>
                    <Text>데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해 주세요.</Text>
                </FlexBox>
            ) : (
                <>
                    <ListItem campInfo={campInfo} />
                    <Space height={8} />
                    <FlexBox direction="row" wrap="wrap" gap="10px">
                        <PageButton onClick={onPrev}>{"<<"}</PageButton>
                        <PageButton onClick={onPrevPage}>{"<"}</PageButton>

                        {Array.from(
                            {
                                length: Math.min(
                                    pageButtonNumber,
                                    totalPage - currentPageGroup * pageButtonNumber
                                ),
                            },
                            (_, index) => {
                                const pageIndex = currentPageGroup * pageButtonNumber + index + 1;
                                return (
                                    <PageButton
                                        key={index}
                                        onClick={() => onGoPage(index)}
                                        active={pageIndex === pageNo.current}
                                    >
                                        {pageIndex}
                                    </PageButton>
                                );
                            }
                        )}

                        <PageButton onClick={onNext}>{">"}</PageButton>
                        <PageButton onClick={onNextPage}>{">>"}</PageButton>
                    </FlexBox>
                </>
            )}

            <Space height={8} />
            <Footer />
        </>
    );
}

export default Home;
