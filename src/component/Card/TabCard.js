import React from "react";
import styled from "styled-components";

const TabContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`;

const TabList = styled.ul`
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    /* 데스크톱 */
    @media (min-width: 1024px) {
        width: 490px;
    }

    /* 태블릿 */
    @media (min-width: 600px) and (max-width: 1023px) {
        width: 450px;
    }

    /* 모바일 */
    @media (max-width: 599px) {
        width: 320px;
    }
`;

const ButtonComponent = styled.button`
    flex: 1;
    border-radius: 20px 20px 0 0;
    border: 3px solid #9ab3a0;
    border-bottom: none;
    background-color: #ffffff;
    padding: 8px 0;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    height: 60px;
`;

const TabCardComponent = styled.div`
    border: 3px solid #9ab3a0;
    border-radius: 0 0 20px 20px;
    border-top: none;
    background-color: #ffffff;
    width: 100%;
    min-height: 100px;
    padding: 8px;
    padding-top: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;

    /* 데스크톱 */
    @media (min-width: 1024px) {
        width: 490px;
    }

    /* 태블릿 */
    @media (min-width: 600px) and (max-width: 1023px) {
        width: 450px;
    }

    /* 모바일 */
    @media (max-width: 599px) {
        width: 320px;
    }
`;

const TabCard = ({ children, tab1, tab2 }) => {
    return (
        <TabContainer>
            <TabList>
                <ButtonComponent>{tab1}</ButtonComponent>
                <ButtonComponent>{tab2}</ButtonComponent>
            </TabList>
            <TabCardComponent>{children}</TabCardComponent>
        </TabContainer>
    );
};

export default React.memo(TabCard);
