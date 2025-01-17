import React from "react";
import styled from "styled-components";
const SpaceComponent = styled.div`
    height: ${({ height }) => (height ? height + "px" : "0px")};
`;

const Space = ({ height = 0 }) => {
    return <SpaceComponent height={height * 4}></SpaceComponent>;
};

export default React.memo(Space);
