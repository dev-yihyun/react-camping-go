import Space from "../../component/Layout/Space";
import Nav from "../../component/Nav/Nav";
import CampAmenities from "./ui/CampAmenities ";
import DescriptionSection from "./ui/DescriptionSection";
import FacilitiesEtc from "./ui/FacilitiesEtc";
import InfoSection from "./ui/InfoSection";
import MapSection from "./ui/MapSection";

function CampInfo() {
    return (
        <>
            <Nav type="CampInfo" />
            <Space height={8} />
            <InfoSection />
            <Space height={8} />
            <DescriptionSection />
            <Space height={8} />
            <CampAmenities />
            <Space height={8} />
            <FacilitiesEtc />
            <Space height={8} />
            <MapSection />
            <Space height={8} />
        </>
    );
}

export default CampInfo;
