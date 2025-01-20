import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Text from "./Text";

const TextLink = ({ text, links = [], color, fontSize, fontWeight, textAlign, alignSelf }) => {
    const parsedText = text.split(/(\{link\})/); // "{link}"로 텍스트를 분리

    return (
        <Text
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            textAlign={textAlign}
            alignSelf={alignSelf}
        >
            {parsedText.map((segment, index) => {
                if (segment === "{link}") {
                    const currentLink = links.shift(); // links 배열에서 하나씩 꺼냄
                    return (
                        <Link
                            key={index}
                            to={currentLink.to}
                            style={{
                                color: currentLink.color,
                                textDecoration: "none",
                                fontWeight: currentLink.fontWeight === "bold" ? "700" : "400",
                            }}
                        >
                            {currentLink.label}
                        </Link>
                    );
                }
                return <span key={index}>{segment}</span>; // 일반 텍스트 반환
            })}
        </Text>
    );
};
TextLink.propTypes = {
    text: PropTypes.string.isRequired, // 텍스트 내용
    links: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired, // 라우트 경로
            label: PropTypes.string.isRequired, // 링크 라벨
        })
    ).isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOf(["normal", "bold"]),
    textAlign: PropTypes.oneOf(["left", "center", "right"]),
    alignSelf: PropTypes.string,
};

TextLink.defaultProps = {
    color: "#212121", // 기본 검정색
    fontSize: "16px", // 기본 폰트 크기
    fontWeight: "normal", // 기본 폰트 굵기
    textAlign: "left", // 기본 텍스트 정렬
    alignSelf: "auto", // 기본 Flexbox 정렬
};
export default React.memo(TextLink);
