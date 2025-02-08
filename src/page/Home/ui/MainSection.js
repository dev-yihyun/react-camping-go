import styled, { keyframes } from "styled-components";
import mainsection from "../../../assets/img/Home/mainsection.jpg";

const MainComponent = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;
const BackgroundComponent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${mainsection}) no-repeat center center fixed;
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    opacity: 0.8;
    z-index: 0;
`;

const ContentComponent = styled.div`
    z-index: 10;
    text-align: start;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 2rem;
    gap: 20px;
`;

const TitleComponent = styled.h1`
    font-size: 6rem;
    font-weight: bold;
    color: white;

    @media (max-width: 599px) {
        font-size: 4rem;
    }
`;

const DescriptionComponent = styled.p`
    font-size: 1.4rem;
    color: white;
    text-align: start;
    max-width: 600px;
    line-height: 1.6;

    @media (max-width: 599px) {
        font-size: 1.2rem;
    }
`;

// const CurrentLocationComponent = styled.div`
//     display: flex;
//     align-items: center;
//     font-size: 1.5rem;
//     color: white;
//     gap: 10px;

//     i {
//         font-size: 1.2rem;
//     }
// `;

const fadeInOut = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
`;

const ScrollIndicatorComponent = styled.div`
    margin-top: 1.4em;
    font-size: 1.2rem;
    color: white;
    animation: ${fadeInOut} 2s infinite;
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
`;

const Bouncy = styled.div`
    animation: ${bounce} 3.5s infinite;
`;

function MainSection() {
    return (
        <>
            <MainComponent>
                <BackgroundComponent />
                <ContentComponent>
                    <TitleComponent>Camping Go</TitleComponent>

                    <DescriptionComponent>
                        Camping is not just a journey,
                        <br />
                        it is a journey to build deeper connections with nature.
                    </DescriptionComponent>
                    {/* <CurrentLocationComponent>
                        <i className="location-icon">
                            <FaLocationDot />
                        </i>
                        <span>Current Location</span>
                    </CurrentLocationComponent> */}
                    <ScrollIndicatorComponent>
                        <Bouncy>
                            <p>↓ Scroll down to explore more ↓</p>
                        </Bouncy>
                    </ScrollIndicatorComponent>
                </ContentComponent>
            </MainComponent>
        </>
    );
}

export default MainSection;
