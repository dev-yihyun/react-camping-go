import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import Space from "../../../component/Layout/Space";
import Text from "../../../component/Text/Text";

function CampAmenities({ amenityData }) {
    console.log("##amenityData", amenityData);

    const arr = amenityData?.amenities.split(",");
    console.log(arr); // ["전기", "무선인터넷", "물놀이장"]
    return (
        <>
            <Text fontWeight="bold" fontSize="24px">
                캠핑장 편의시설
            </Text>
            <Space height={3} />
            <BoxShadowCard gap="10px" justifyContent="center" alignItems="center" wrap="wrap">
                {arr.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))}
            </BoxShadowCard>
        </>
    );
}

export default CampAmenities;
