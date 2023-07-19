import React, { useState } from 'react'
import { Line, SpanProgram, Wrapper } from './style'
import { tab1, tab2, tab3 } from '../../../../Design-system/components/OurPrograms/OurProgramsData';
import OurPrograms from '../../../../Design-system/components/OurPrograms/OurPrograms';
import { theme } from '../../../../Design-system/Config';

export default function Tabs() {
    const [tab, setTab] = useState("tab1");

    const switchTab = (tabe) => {
        setTab(tabe)
    }

    return (
        <>
            <Wrapper>
                <SpanProgram style={{
                    color: tab === "tab1" ? theme.primary : "",
                    borderBottom: tab === "tab1" ? `1px solid ${theme.black}` : ""
                }}
                    onClick={() => switchTab("tab1")}
                >
                    First Day
                </SpanProgram>

                <SpanProgram style={{
                    color: tab === "tab2" ? theme.primary : "",
                    borderBottom: tab === "tab2" ? `1px solid ${theme.black}` : ""
                }}
                    onClick={() => switchTab("tab2")}
                >
                    Second Day
                </SpanProgram>

                <SpanProgram style={{
                    color: tab === "tab3" ? theme.primary : "",
                    borderBottom: tab === "tab3" ? `1px solid ${theme.black}` : ""
                }}
                    onClick={() => switchTab("tab3")}
                >
                    Third Day
                </SpanProgram>
            </Wrapper>
            <Line />
            {tab === "tab2" ?
                tab2.map((item) => {
                    return (
                        <OurPrograms img={item.img} alt={item.alt} name={item.name} time={item.time}
                            roomNo={item.roomNumber} title={item.title} description={item.description} />
                    )
                })
                : tab === "tab3" ?
                    tab3.map((item) => {
                        return (
                            <OurPrograms img={item.img} alt={item.alt} name={item.name} time={item.time}
                                roomNo={item.roomNumber} title={item.title} description={item.description} />
                        )
                    })
                    : tab1.map((item) => {
                        return (
                            <OurPrograms img={item.img} alt={item.alt} name={item.name} time={item.time}
                                roomNo={item.roomNumber} title={item.title} description={item.description} />
                        )
                    })
            }
        </>
    )
}
