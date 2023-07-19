import { AboutInfo, AboutParagraph, AboutUsWrapper, Div, DivTwo } from "./style";
import about from "images/About-us.jpg";
export default function AboutUs() {
    return (
        <div className="container">
            <AboutUsWrapper>
                <Div>
                    <AboutInfo>
                        New Event is A fully responsive one-page template for events,
                        conferences or workshops
                    </AboutInfo>

                    <AboutParagraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                        dolorum optio itaque asperiores dolor repellendus incidunt nisi.
                        Libero, deleniti repellendus.
                    </AboutParagraph>

                    <AboutParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptate porro reiciendis facilis temporibus perspiciatis
                        deleniti voluptatum laborum quasi dolore dolorem!
                    </AboutParagraph>
                </Div>
                <DivTwo>
                    <img width="100%" src={about} alt="about us pic" />
                </DivTwo>
            </AboutUsWrapper>
        </div>
    )
}
