import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import SideSpace from "../../../component/Layout/SideSpace";
import Space from "../../../component/Layout/Space";

function MapSection() {
    return (
        <>
            <SideSpace margin="20px">
                <h2>캠핑장 위치</h2>
                <Space height={3} />
                <BoxShadowCard>{/* MAP */}</BoxShadowCard>
            </SideSpace>
        </>
    );
}

export default MapSection;
