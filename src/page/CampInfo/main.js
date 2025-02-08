import { useLocation } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import FlexBox from "../../component/Layout/FlexBox";
import SideSpace from "../../component/Layout/SideSpace";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import Text from "../../component/Text/Text";
import CampAmenities from "./ui/CampAmenities ";
import DescriptionSection from "./ui/DescriptionSection";
import InfoSection from "./ui/InfoSection";
import MapSection from "./ui/MapSection";

function CampInfo() {
    const userId = localStorage.getItem("userId");
    const location = useLocation();
    const campData = location?.state?.item;
    if (!campData) {
        return (
            <FlexBox>
                <Text>캠핑장의 정보를 불러올 수 없습니다.</Text>
            </FlexBox>
        );
    }
    const InfoData = {
        firstImageUrl: campData?.firstImageUrl,
        facltNm: campData?.facltNm,
        addr1: campData?.addr1,
        tel: campData?.tel,
        homepage: campData?.homepage,
        operPdCl: campData?.operPdCl,
        resveCl: campData?.resveCl,
        resveUrl: campData?.resveUrl,
    };

    const descriptionData = {
        description: campData?.intro,
    };

    const amenityData = {
        amenities: campData?.sbrsCl,
    };

    return (
        <>
            <Nav type="CampInfo" userId={userId} />

            <SideSpace>
                <Space height={8} />
                <InfoSection InfoData={InfoData} />
                <Space height={8} />
                <DescriptionSection descriptionData={descriptionData} />
                <Space height={8} />
                <CampAmenities amenityData={amenityData} />
                <Space height={8} />
                {/* <FacilitiesEtc /> */}
                <Space height={8} />
                <MapSection mapX={campData?.mapX} mapY={campData?.mapY} />
            </SideSpace>
            <Space height={8} />
            <Footer />
        </>
    );
}

export default CampInfo;
