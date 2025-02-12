import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import FlexBox from "../../../component/Layout/FlexBox";
import Space from "../../../component/Layout/Space";
import Text from "../../../component/Text/Text";
import useCampAmenities from "../hook/useCampAmenities";

function CampAmenities({ amenityData }) {
    const amenityDataArray = useCampAmenities(amenityData);
    return (
        <>
            <Text fontWeight="bold" fontSize="24px">
                캠핑장 편의시설
            </Text>
            <Space height={3} />
            <BoxShadowCard gap="10px" justifyContent="center" alignItems="center" wrap="wrap">
                <FlexBox direction="row" gap="20px">
                    {amenityDataArray.map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}
                </FlexBox>
            </BoxShadowCard>
        </>
    );
}

export default CampAmenities;
