import React from "react";
import styled from "styled-components";

const SideSpaceComponent = styled.div`
    margin-left: ${({ margin }) => (margin ? margin : "0px")};
    margin-right: ${({ margin }) => (margin ? margin : "0px")};
`;

function SideSpace({ children, margin = "0px" }) {
    return <SideSpaceComponent margin={margin}>{children}</SideSpaceComponent>;
}
export default React.memo(SideSpace);
