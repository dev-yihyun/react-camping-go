import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const BoxShadowCardComponent = styled.div`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    ${({ $flex }) => $flex && `flex: ${$flex};`}

    display: flex;
    // flex-direction: column;
    // justify-items: center;
    // justify-content: center;
    // align-items: flex-start;
    // align-content: center;
    // gap: 20px;

    ${({ $flex }) => $flex && `flex: ${$flex};`}
    ${({ $gap }) => $gap && `gap: ${$gap};`}
    ${({ direction }) => direction && `flex-direction: ${direction};`}
    ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
    // ${({ justifyItems }) => justifyItems && `justify-items: ${justifyItems};`}
    ${({ $justifyContent }) => $justifyContent && `justify-content: ${$justifyContent};`}
    ${({ $alignItems }) => $alignItems && `align-items: ${$alignItems};`}
    ${({ $alignContent }) => $alignContent && `align-content: ${$alignContent};`}
`;

const BoxShadowCard = ({
    children,
    flex,
    gap,
    direction,
    wrap,
    // justifyItems,
    justifyContent,
    alignItems,
    alignContent,
}) => {
    return (
        <BoxShadowCardComponent
            $flex={flex}
            $gap={gap}
            direction={direction}
            wrap={wrap}
            // justifyItems={justifyItems}
            $justifyContent={justifyContent}
            $alignItems={alignItems}
            $alignContent={alignContent}
        >
            {children}
        </BoxShadowCardComponent>
    );
};

BoxShadowCard.propTypes = {
    children: PropTypes.node,
    gap: PropTypes.string,
    direction: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    justifyItems: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ]),
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ]),
    alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center", "stretch", "baseline"]),
    alignContent: PropTypes.oneOf(["flex-start", "flex-end", "center", "stretch", "baseline"]),
};

BoxShadowCard.defaultProps = {
    gap: "0px",
    direction: "column",
    wrap: "wrap",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
};

export default React.memo(BoxShadowCard);
