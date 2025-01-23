import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import SideSpace from "../../../component/Layout/SideSpace";
import Space from "../../../component/Layout/Space";

function CampAmenities() {
    return (
        <>
            <SideSpace margin="20px">
                <h2>캠핑장 편의시설</h2>
                <Space height={3} />
                <BoxShadowCard gap="10px" justifyContent="center" alignItems="center" wrap="wrap">
                    <p>CampAmenities</p>
                    <p>CampAmenities</p>
                    <p>CampAmenities</p>
                    <p>CampAmenities</p>
                    <p>CampAmenities</p>
                    <p>CampAmenities</p>
                    <p>CampAmenities</p>
                </BoxShadowCard>
            </SideSpace>
        </>
    );
}

export default CampAmenities;
