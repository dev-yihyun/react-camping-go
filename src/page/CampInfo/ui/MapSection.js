import { Container as MapDiv, Marker, NaverMap, useNavermaps } from "react-naver-maps";
import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import FlexBox from "../../../component/Layout/FlexBox";
import Space from "../../../component/Layout/Space";
import Text from "../../../component/Text/Text";

function MapSection({ mapX, mapY }) {
    const navermaps = useNavermaps();

    if (!navermaps || !mapX || !mapY) {
        return (
            <FlexBox>
                <Text>위치를 표시할 수 없습니다.</Text>
            </FlexBox>
        );
    }

    return (
        <>
            <Text fontWeight="bold" fontSize="24px">
                캠핑장 위치
            </Text>
            <Space height={3} />
            <BoxShadowCard>
                <MapDiv
                    style={{
                        width: "100%",
                        height: "600px",
                    }}
                >
                    <NaverMap defaultCenter={new navermaps.LatLng(mapY, mapX)} defaultZoom={15}>
                        <Marker position={new navermaps.LatLng(mapY, mapX)} />
                    </NaverMap>
                </MapDiv>
            </BoxShadowCard>
        </>
    );
}

export default MapSection;
