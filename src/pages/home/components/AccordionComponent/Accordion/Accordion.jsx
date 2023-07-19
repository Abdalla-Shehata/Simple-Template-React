import { Wrapper, AccordionWrapper, Item, Title, H2, Span, Content, P } from "./style";
import { data } from "./data"
import { useState } from "react";


export default function Accordion() {
  const [active, setActive] = useState(0)

  const toggle = (i) => {
    if (active === i) {
      return setActive(null)
    }
    setActive(i);
  };

  return (
    <div style={{ height: "350px", margin: "2rem 0" }}>
      <Wrapper>
        <AccordionWrapper>
          {data.map((item, ind) => {
            return (
              <Item key={ind} onClick={() => toggle(ind)}>
                <Title>
                  <H2>{item.question}</H2>
                  <Span>{active === ind ? "-" : "+"}</Span>
                </Title>
                <Content className={active === ind ? "show" : ""}>
                  <P>{item.answerOne}</P>
                  <P>{item.answerTwo}</P>
                </Content>
              </Item>
            )
          })}
        </AccordionWrapper>
      </Wrapper>
    </div>


  )
}
