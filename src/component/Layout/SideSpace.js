import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const SideSpaceComponent = styled.div`
    margin-left: ${({ $margin }) => ($margin ? $margin : "20px")};
    margin-right: ${({ $margin }) => ($margin ? $margin : "20px")};
`;

function SideSpace({ children, margin = "20px" }) {
    return <SideSpaceComponent $margin={margin}>{children}</SideSpaceComponent>;
}

SideSpace.propTypes = {
    children: PropTypes.node,
    margin: PropTypes.string,
};

export default React.memo(SideSpace);
