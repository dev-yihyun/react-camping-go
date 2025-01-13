import React from "react";
import styled from "styled-components";
const PageComponent = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Page = ({ children }) => {
    return <PageComponent>{children}</PageComponent>;
};

export default React.memo(Page);
