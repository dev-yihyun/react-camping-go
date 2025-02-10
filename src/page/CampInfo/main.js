import Footer from "../../component/Footer/Footer";
import SideSpace from "../../component/Layout/SideSpace";
import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import { useCampInfo } from "./hook/useCampInfo";
import CampAmenities from "./ui/CampAmenities ";
import DescriptionSection from "./ui/DescriptionSection";
import InfoSection from "./ui/InfoSection";
import MapSection from "./ui/MapSection";

function CampInfo() {
    const { userId, campData, InfoData, descriptionData, amenityData } = useCampInfo();
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
