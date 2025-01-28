import styled from "styled-components";

const FooterComponent = styled.footer`
    background-color: #004d40;
    color: white;
    padding: 10px 0;
    text-align: center;
`;

function Footer() {
    return (
        <>
            <FooterComponent>
                <p>&copy; 2025 Camping Go. All rights reserved.</p>
            </FooterComponent>
        </>
    );
}

export default Footer;
