import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const SideSpaceComponent = styled.div`
    margin-left: ${({ $margin }) => ($margin ? $margin : "20px")};
    margin-right: ${({ $margin }) => ($margin ? $margin : "20px")};
`;

function SideSpace({ children, margin }) {
    return <SideSpaceComponent $margin={margin}>{children}</SideSpaceComponent>;
}

SideSpace.propTypes = {
    children: PropTypes.node,
    margin: PropTypes.string,
};

SideSpace.defaultProps = {
    margin: "20px",
};

export default React.memo(SideSpace);
