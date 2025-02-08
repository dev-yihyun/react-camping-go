import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    border: 3px solid #9ab3a0;
    border-radius: 50px;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
    background-color: ${({ $active }) => ($active ? "#D9E4CC " : "#ffffff")};
`;

function PageButton({ children = "Button", onClick = () => {}, active = false }) {
    return (
        <>
            <ButtonComponent onClick={onClick} $active={active}>
                {children}
            </ButtonComponent>
        </>
    );
}

PageButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    active: PropTypes.bool,
};

// PageButton.defaultProps = {
//     children: "Button",
//     onClick: () => {},
//     active: false,
// };

export default React.memo(PageButton);
