import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import Space from "../../../component/Layout/Space";

function MapSection() {
    return (
        <>
            <h2>캠핑장 위치</h2>
            <Space height={3} />
            <BoxShadowCard>{/* MAP */}</BoxShadowCard>
        </>
    );
}

export default MapSection;
