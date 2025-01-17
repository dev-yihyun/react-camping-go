import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`;

const TabList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
`;

const ButtonComponent = styled.button`
    flex: 1;
    border-radius: 20px 20px 0 0;
    border: 3px solid #9ab3a0;
    border-bottom: none;
    background-color: ${({ $active }) => ($active ? "#ffffff" : "#9ab3a0")};
    color: ${({ $active }) => ($active ? "#000" : "#ffffff")};
    padding: 8px 0;
    padding: 8px 0;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    height: 60px;
    transition: background-color 0.3s, color 0.3s;

    // &:hover {
    //     background-color: #8fa693;
    //     color: #fff;
    // }
`;

const TabCardComponent = styled.div`
    border: 3px solid #9ab3a0;
    border-top: none;
    border-radius: 0 0 20px 20px;
    background-color: #ffffff;
    width: 100%;
    min-height: 100px;
    padding: 16px;
    box-sizing: border-box;
`;

const TabCard = ({ tabs, activeTab: externalActiveTab, setActiveTab: externalSetActiveTab }) => {
    // const [activeTab, setActiveTab] = useState(0); // 활성화된 탭 상태
    // 내부 상태 관리
    const [internalActiveTab, setInternalActiveTab] = useState(0);

    // 외부 상태가 제공되면 외부 상태를 사용, 그렇지 않으면 내부 상태를 사용
    const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
    const setActiveTab =
        externalSetActiveTab !== undefined ? externalSetActiveTab : setInternalActiveTab;

    return (
        <TabContainer>
            {/* Tab Buttons */}
            <TabList>
                {tabs.map((tab, index) => (
                    <ButtonComponent
                        key={index}
                        $active={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </ButtonComponent>
                ))}
            </TabList>

            {/* Tab Content */}
            <TabCardComponent>
                {tabs[activeTab]?.content || "No content available"}
            </TabCardComponent>
        </TabContainer>
    );
};

export default React.memo(TabCard);
