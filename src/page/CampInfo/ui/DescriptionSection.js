import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import Space from "../../../component/Layout/Space";
import Text from "../../../component/Text/Text";

function DescriptionSection({ descriptionData }) {
    return (
        <>
            <Text fontWeight="bold" fontSize="24px">
                캠핑장 소개
            </Text>
            <Space height={3} />
            <BoxShadowCard>
                {descriptionData?.description ? (
                    <>{descriptionData?.description}</>
                ) : (
                    <Text>😁 준비 중입니다.</Text>
                )}
            </BoxShadowCard>
        </>
    );
}

export default DescriptionSection;
