import React from "react";
import PageButton from "../../component/Button/PageButton";
import Footer from "../../component/Footer/Footer";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import Text from "../../component/Text/Text";
import { useHome } from "./hook/useHome";
import ListItem from "./ui/ListItem";
import MainSection from "./ui/MainSection";
function Home() {
    const {
        userId,
        loading,
        isError,
        campInfo,
        pageButtonNumber,
        totalPage,
        currentPageGroup,
        pageNo,
        onPrev,
        onPrevPage,
        onGoPage,
        onNext,
        onNextPage,
    } = useHome();

    return (
        <>
            <Nav type="home" userId={userId} />
            <MainSection />
            <Space height={8} />

            {loading ? (
                <>
                    <Page>
                        <FlexBox>
                            <Text>로딩중 ...</Text>
                        </FlexBox>
                    </Page>
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
                        <PageButton onClick={onPrevPage}>{"<<"}</PageButton>
                        <PageButton onClick={onPrev}>{"<"}</PageButton>

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
