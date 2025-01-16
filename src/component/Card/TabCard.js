import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
    // width: 100%;
    width: 90%;
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
    background-color: ${(props) => (props.active ? "#ffffff" : "#9ab3a0")};
    color: ${(props) => (props.active ? "#000" : "#ffffff")};
    padding: 8px 0;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    height: 60px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #8fa693;
        color: #fff;
    }
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

const TabCard = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0); // 활성화된 탭 상태

    return (
        <TabContainer>
            {/* Tab Buttons */}
            <TabList>
                {tabs.map((tab, index) => (
                    <ButtonComponent
                        key={index}
                        active={activeTab === index}
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
