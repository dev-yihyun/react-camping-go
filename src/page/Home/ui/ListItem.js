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
    margin: 20px auto;
    font-family: Arial, sans-serif;
    cursor: pointer;

    @media (max-width: 599px) {
        flex-direction: column;
    }
`;

const ImgComponent = styled.div`
    flex: 1;
    max-width: 300px;
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
function ListItem() {
    return (
        <>
            <ItemCardComponent>
                <ImgComponent>
                    <Img src={null} alt="캠핑장 이미지" />
                </ImgComponent>
                <ContentComponent>
                    <ItemTitleComponent>Title</ItemTitleComponent>
                    <ItemSubtitleComponent>Subitle</ItemSubtitleComponent>
                    <ItemDescriptionComponent>Description</ItemDescriptionComponent>
                    <InfoComponent>
                        <AddressComponent>
                            <FaLocationDot />
                            Address
                        </AddressComponent>
                        <PhoneComponent>
                            <FaPhone />
                            Phone
                        </PhoneComponent>
                    </InfoComponent>
                </ContentComponent>
            </ItemCardComponent>
        </>
    );
}

export default React.memo(ListItem);
