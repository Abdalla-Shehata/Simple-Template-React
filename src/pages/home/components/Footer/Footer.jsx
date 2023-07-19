import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { madeby } from "../../../../Design-system/Config";
import { FooterWrapper, Li, Madeby, Span, UL } from "./style";
import { faBehance, faDribbble, faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="container">
                <div>
                    <Span>Copyright 2018 Your Company | Design: </Span>
                    <Madeby>{madeby}</Madeby>
                </div>
                    <UL>
                        <Li>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Li>
                        <Li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Li>
                        <Li>
                            <FontAwesomeIcon icon={faDribbble} />
                        </Li>
                        <Li>
                            <FontAwesomeIcon icon={faBehance} />
                        </Li>
                        <Li>
                            <FontAwesomeIcon icon={faGoogle} />
                        </Li>
                    </UL>

            </div>
        </FooterWrapper>
    )
}
