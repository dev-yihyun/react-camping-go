import { useLocation } from "react-router-dom";
import FlexBox from "../../../component/Layout/FlexBox";
import Text from "../../../component/Text/Text";

export const useCampInfo = () => {
    const userId = localStorage.getItem("userId");
    const location = useLocation();
    const campData = location?.state?.item;
    if (!campData) {
        return (
            <FlexBox>
                <Text>캠핑장의 정보를 불러올 수 없습니다.</Text>
            </FlexBox>
        );
    }
    const InfoData = {
        firstImageUrl: campData?.firstImageUrl,
        facltNm: campData?.facltNm,
        addr1: campData?.addr1,
        tel: campData?.tel,
        homepage: campData?.homepage,
        operPdCl: campData?.operPdCl,
        resveCl: campData?.resveCl,
        resveUrl: campData?.resveUrl,
    };

    const descriptionData = {
        description: campData?.intro,
    };

    const amenityData = {
        amenities: campData?.sbrsCl,
    };
    return { userId, campData, InfoData, descriptionData, amenityData };
};
