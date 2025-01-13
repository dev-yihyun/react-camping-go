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
    /* gap이 주어지면 사용하고, 없으면 기본값 0px */
    gap: ${({ $gap }) => $gap || "0"};
`;

const FlexBox = ({ children, gap, direction, wrap, justify, align }) => {
    return (
        <FlexBoxContainer
            $gap={gap} // $gap으로 전달
            direction={direction}
            $wrap={wrap}
            $justify={justify}
            $align={align}
        >
            {children}
        </FlexBoxContainer>
    );
};

FlexBox.propTypes = {
    children: PropTypes.node, // React node (e.g., JSX elements or strings)
    gap: PropTypes.string, // Gap between flex items, e.g., "10px", "1rem"
    direction: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"]), // Valid flex directions
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]), // Valid wrap values
    justify: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ]), // Valid justify-content values
    align: PropTypes.oneOf(["flex-start", "flex-end", "center", "stretch", "baseline"]), // Valid align-items values
};
FlexBox.defaultProps = {
    gap: "0px",
    direction: "column",
    wrap: "wrap",
    justify: "center",
    align: "center",
};
export default React.memo(FlexBox);
