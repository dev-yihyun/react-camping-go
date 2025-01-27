import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import SideSpace from "../../../component/Layout/SideSpace";
import Space from "../../../component/Layout/Space";

function FacilitiesEtc() {
    return (
        <>
            <SideSpace margin="20px">
                <h2>기타 주요 시설</h2>
                <Space height={3} />
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
                    <h2>📍 주소</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <h2>📞 연락처</h2>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</p>

                    <h2>🚗 주차</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <h2>⛺ 운영 기간</h2>
                    <p>봄, 여름, 가을, 겨울</p>
                    <h2>⭐ 특징</h2>
                    <p>평가: 4점</p>
                </BoxShadowCard>
            </SideSpace>
        </>
    );
}

export default FacilitiesEtc;
