import styled from "styled-components";
import TestImg from "../../../assets/img/Home/mainsection.jpg";
import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import SideSpace from "../../../component/Layout/SideSpace";
import Space from "../../../component/Layout/Space";
import Text from "../../../component/Text/Text";

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
    object-fit: cover; /* 이미지 비율을 유지하며 요소 크기에 맞게 자름 */
    border-radius: 8px;
`;

function InfoSection() {
    return (
        <>
            <SideSpace margin="20px">
                <InfoSectionComponent>
                    <ImageComponent>
                        <BannerImageComponent src={TestImg} alt="campImg" />
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
                        {/* <Text> */}
                        <Text fontWeight="bold" fontSize="24px">
                            📍 주소
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                        <Space />
                        <Text fontWeight="bold" fontSize="24px">
                            📞 연락처
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                        <Space />

                        <Text fontWeight="bold" fontSize="24px">
                            🚗 주차
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                        <Space />

                        <Text fontWeight="bold" fontSize="24px">
                            ⛺ 운영 기간
                        </Text>
                        <Text>봄,여름, 가을, 겨울</Text>
                        <Space />

                        <Text fontWeight="bold" fontSize="24px">
                            ⭐ 특징
                        </Text>
                        <Text>평가: 4점</Text>
                        <Space />
                    </BoxShadowCard>
                </InfoSectionComponent>
            </SideSpace>
        </>
    );
}
export default InfoSection;
