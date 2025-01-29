import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
const FlexBoxContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || "column"};
    flex-wrap: ${({ wrap }) => wrap || "wrap"};
    justify-content: ${({ justify }) => justify || "center"};
    justify-items: center;
    align-items: ${({ align }) => align || "center"};
    align-content: center;
    gap: ${({ $gap }) => $gap || "0"};
`;

const FlexBox = ({ children, gap, direction, wrap, justify, align }) => {
    return (
        <FlexBoxContainer
            $gap={gap}
            direction={direction}
            $wrap={wrap}
            $justify={justify}
            align={align}
        >
            {children}
        </FlexBoxContainer>
    );
};

FlexBox.propTypes = {
    children: PropTypes.node,
    gap: PropTypes.string,
    direction: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    justify: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ]),
    align: PropTypes.oneOf(["flex-start", "flex-end", "center", "stretch", "baseline"]),
};
FlexBox.defaultProps = {
    gap: "0px",
    direction: "column",
    wrap: "wrap",
    justify: "center",
    align: "center",
};
export default React.memo(FlexBox);
