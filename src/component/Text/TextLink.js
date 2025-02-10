import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Text from "./Text";

const TextLink = ({
    text,
    links = [],
    color = "#212121",
    fontSize = "16px",
    fontWeight = "normal",
    textAlign = "left",
    alignSelf = "auto",
    target = false,
}) => {
    const parsedText = text.split(/(\{link\})/);

    return (
        <Text
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            textAlign={textAlign}
            alignSelf={alignSelf}
            style={{
                whiteSpace: "normal",
                wordBreak: "break-word",
            }}
        >
            {parsedText.map((segment, index) => {
                if (segment === "{link}") {
                    const currentLink = links.shift();
                    return (
                        <Link
                            key={index}
                            to={currentLink.to}
                            style={{
                                color: currentLink.color,
                                textDecoration: "none",
                                fontWeight: currentLink.fontWeight === "bold" ? "700" : "400",

                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                                display: "inline-block",
                                maxWidth: "100%",
                            }}
                            target={target ? "_blank" : undefined}
                            rel={target ? "noopener noreferrer" : undefined}
                        >
                            {currentLink.label}
                        </Link>
                    );
                }
                return <span key={index}>{segment}</span>;
            })}
        </Text>
    );
};
TextLink.propTypes = {
    text: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOf(["normal", "bold"]),
    textAlign: PropTypes.oneOf(["left", "center", "right"]),
    alignSelf: PropTypes.string,
    target: PropTypes.bool,
};

export default React.memo(TextLink);
