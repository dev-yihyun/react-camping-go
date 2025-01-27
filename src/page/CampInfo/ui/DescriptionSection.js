import BoxShadowCard from "../../../component/Card/BoxShadowCard";
import SideSpace from "../../../component/Layout/SideSpace";
import Space from "../../../component/Layout/Space";

function DescriptionSection() {
    return (
        <>
            <SideSpace margin="20px">
                <h2>캠핑장 소개</h2>
                <Space height={3} />
                <BoxShadowCard>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.
                    Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio
                    facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec
                    adipiscing tristique
                </BoxShadowCard>
            </SideSpace>
        </>
    );
}

export default DescriptionSection;
