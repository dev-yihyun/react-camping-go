import styled from "styled-components";

const ListSectionComponent = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

function ListSection({ children }) {
    return <ListSectionComponent>{children}</ListSectionComponent>;
}

export default ListSection;
