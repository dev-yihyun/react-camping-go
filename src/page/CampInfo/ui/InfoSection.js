import styled from "styled-components";
import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import Space from "../../../component/Layout/Space";
import Text from "../../../component/Text/Text";
import TextLink from "../../../component/Text/TextLink";

const InfoSectionComponent = styled.div`
    display: flex;
    flex-wrap: "wrap";
    gap: 20px;
    @media (max-width: 599px) {
        flex-direction: column;
    }
`;
const ImageComponent = styled.div`
    flex: 1;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BannerImageComponent = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;

function InfoSection({ InfoData }) {
    const homepageLink = InfoData?.homepage.startsWith("http")
        ? InfoData?.homepage
        : `http://${InfoData?.homepage}`;
    const resveLink = InfoData?.resveUrl.startsWith("http")
        ? InfoData?.resveUrl
        : `http://${InfoData?.resveUrl}`;
    return (
        <>
            <InfoSectionComponent>
                <ImageComponent>
                    <BannerImageComponent src={InfoData.firstImageUrl} alt="campImg" />
                </ImageComponent>
                <BoxShadowCard
                    flex="2"
                    gap="10px"
                    direction="column"
                    alignItems="flex-start"
                    alignContent="flex-start"
                    justifyContent="center"
                    wrap="wrap"
                >
                    <Text fontWeight="bold" fontSize="24px">
                        {InfoData.facltNm}
                    </Text>
                    <Text fontWeight="bold" fontSize="24px">
                        📍 주소
                    </Text>
                    <Text>{InfoData.addr1}</Text>
                    <Space />
                    <Text fontWeight="bold" fontSize="24px">
                        📞 연락처
                    </Text>
                    <Text>{InfoData.tel || "정보 없음"}</Text>
                    <Space />

                    <Text fontWeight="bold" fontSize="24px">
                        🏠홈페이지
                    </Text>

                    {InfoData?.homepage ? (
                        <TextLink
                            text="{link}"
                            links={[
                                {
                                    to: homepageLink,
                                    label: homepageLink,
                                    color: "#212121",
                                },
                            ]}
                            target
                        >
                            {InfoData?.homepage}
                        </TextLink>
                    ) : (
                        "정보 없음"
                    )}

                    <Space />

                    <Text fontWeight="bold" fontSize="24px">
                        ⛺ 운영 기간
                    </Text>
                    <Text>{InfoData.operPdCl || "정보없음"}</Text>
                    <Space />

                    {InfoData?.resveCl && InfoData?.resveUrl ? (
                        <>
                            <Text fontWeight="bold" fontSize="24px">
                                📖 {InfoData?.resveCl}
                            </Text>
                            <TextLink
                                text="{link}"
                                links={[
                                    {
                                        to: resveLink,
                                        label: resveLink,
                                        color: "#212121",
                                    },
                                ]}
                                target
                            >
                                {InfoData?.resveUrl}
                            </TextLink>
                        </>
                    ) : (
                        ""
                    )}
                    <Space />
                </BoxShadowCard>
            </InfoSectionComponent>
        </>
    );
}
export default InfoSection;
