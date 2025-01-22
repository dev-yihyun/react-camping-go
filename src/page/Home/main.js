import Nav from "../../component/Nav/Nav";
import ListItem from "./ui/ListItem";
import ListSection from "./ui/ListSection";
import MainSection from "./ui/MainSection";

function Home() {
    return (
        <>
            <Nav type="home" />
            <MainSection />
            <ListSection>
                <ListItem />
            </ListSection>
        </>
    );
}

export default Home;
