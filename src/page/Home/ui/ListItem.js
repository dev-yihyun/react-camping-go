import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import styled from "styled-components";
const ItemCardComponent = styled.div`
    display: flex;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 80%;
    height: 300px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    cursor: pointer;

    @media (max-width: 599px) {
        flex-direction: column;
        height: auto;
    }
`;

const ImgComponent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ContentComponent = styled.div`
    flex: 2;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const ItemTitleComponent = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0 0 8px;
`;

const ItemSubtitleComponent = styled.h4`
    font-size: 14px;
    font-weight: bold;
    color: #555;
    margin: 0 0 12px;
`;

const ItemDescriptionComponent = styled.p`
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 16px;

    display: -webkit-box;
    -webkit-line-clamp: 4; /* 최대 4줄 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal; /* 줄바꿈 허용 */
    @media (max-width: 599px) {
        -webkit-line-clamp: 6; /* 최대 6줄 */
    }
`;

const InfoComponent = styled.div`
    font-size: 14px;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const AddressComponent = styled.p`
    display: flex;
    gap: 10px;
    margin: 4px 0;
`;

const PhoneComponent = styled.p`
    display: flex;
    gap: 10px;
    margin: 4px 0;
`;
function ListItem({ campInfo }) {
    return (
        <>
            {campInfo &&
                campInfo.map((item, index) => (
                    <ItemCardComponent key={index}>
                        <ImgComponent>
                            <Img
                                src={item?.firstImageUrl || <>이미지 없음</>}
                                alt="캠핑장 이미지"
                            />
                        </ImgComponent>
                        <ContentComponent>
                            <ItemTitleComponent>
                                {item?.facltNm || "캠핑장 이름 정보 없음"}
                            </ItemTitleComponent>
                            <ItemSubtitleComponent>
                                {item?.lineIntro || "정보 없음"}
                            </ItemSubtitleComponent>
                            <ItemDescriptionComponent>
                                {item?.intro || "설명 정보 없음"}
                            </ItemDescriptionComponent>
                            <InfoComponent>
                                <AddressComponent>
                                    <FaLocationDot />
                                    {item?.addr1 || "주소 정보 없음음"}
                                </AddressComponent>
                                <PhoneComponent>
                                    <FaPhone />
                                    {item?.tel || "전화번호 정보 없음"}
                                </PhoneComponent>
                            </InfoComponent>
                        </ContentComponent>
                    </ItemCardComponent>
                ))}
        </>
    );
}

export default React.memo(ListItem);
