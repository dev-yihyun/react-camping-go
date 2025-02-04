import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import Space from "../../../component/Layout/Space";

function CampAmenities() {
    return (
        <>
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
        </>
    );
}

export default CampAmenities;
