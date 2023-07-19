import { Div, DivTwo, WatchVideoInfo, WatchVideoParagraph, WatchVideoSubtitle, WatchVideoWrapper } from "./style";
const link = "https://www.youtube.com/embed/XDPwXQjAlB0"

export default function WatchVideo() {
    return (
        <div className="container">
            <WatchVideoWrapper>
                <Div>
                    <WatchVideoInfo>
                        WATCH VIDEO
                    </WatchVideoInfo>

                    <WatchVideoSubtitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                        dolorum optio itaque asperiores dolor repellendus incidunt nisi.
                        Libero, deleniti.
                    </WatchVideoSubtitle>

                    <WatchVideoParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptate porro reiciendis facilis temporibus perspiciatis
                        deleniti voluptatum laborum quasi dolore dolorem!
                    </WatchVideoParagraph>
                </Div>
                <DivTwo>
                    <iframe width="100%" height="350px" src={link} frameborder="0"></iframe>
                </DivTwo>
            </WatchVideoWrapper>
        </div>
    )
}
