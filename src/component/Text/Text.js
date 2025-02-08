import React from "react";
import styled from "styled-components";

const TextComponent = styled.p`
    color: ${(props) => {
        switch (props.color) {
            case "error":
            case "red":
                return "#ff3f3f";
            case "blue":
                return "#0D47A1";
            case "green":
                return "#4CAF50";
            case "grey":
                return "#37474F";
            case "black":
                return "#212121";
            case "white":
                return "#F5F5F5";
            default:
                return props.color;
        }
    }};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => (props.fontWeight === "bold" ? "700" : "400")};
    text-align: ${(props) => {
        switch (props.textAlign) {
            case "center":
            case "left":
            case "right":
                return props.textAlign;
            default:
                return "left";
        }
    }};
    align-self: ${(props) => props.$alignSelf || "auto"};
    margin: 0;
`;

const Text = ({
    children,
    color = "#212121",
    fontSize = "16px",
    fontWeight = "normal",
    textAlign = "left",
    alignSelf = "auto",
}) => {
    return (
        <TextComponent
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            $textAlign={textAlign}
            $alignSelf={alignSelf}
        >
            {children}
        </TextComponent>
    );
};

// Text.defaultProps = {
//     color: "#212121",
//     fontSize: "16px",
//     fontWeight: "normal",
//     textAlign: "left",
//     alignSelf: "auto",
// };

export default React.memo(Text);
