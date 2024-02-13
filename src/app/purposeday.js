"use client"
import Image from "next/image";
import root from "window-or-global"
import React, { useState } from "react";
import styled from "styled-components"
import susgato from "./assets/susgato.png"

const Wrap = styled.div`
    height: 100vh;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    background-size: cover;
    position: relative;
`

const ContentWrap = styled.div`
    z-index: 1000;
    margin-top: 20px;
`

const ContentHeader = styled.h1`
    margin: 0;
    font-family: "DM Sans", sans-serif;
    cursor: pointer;
    color: white;
`

const ContentDescription = styled.p`
    margin: 10px;
    font-family: "DM Sans", sans-serif;
    cursor: pointer;
    color: cyan;
`

const Main = () => {

    return (
        <Wrap>
            <Image src={susgato} style={{ position: "absolute", height: "101%", width: "101%" }} />
            <ContentWrap>
                <ContentHeader style={{ marginBottom: "100px" }}>
                    Lekhak hun, badhiya likh dia ohohohoho (propose karde firse)
                </ContentHeader>
                <ContentHeader
                    onClick={() => root.open("https://www.youtube.com/watch?v=DEDjF2tLbhk&ab_channel=micfloyds", "_blank")}
                >
                    Hey you,
                </ContentHeader>
                <ContentHeader
                    onClick={() => root.open("https://www.youtube.com/watch?v=KvMY1uzSC1E&ab_channel=Netflix", "_blank")}
                >
                    I really want to stay at your house.
                </ContentHeader>
                <ContentDescription
                    onClick={() => root.open("https://www.youtube.com/watch?v=bmZQpbNK7t4&ab_channel=sbritt", "_blank")}
                >
                    Whered all the time go?
                </ContentDescription>
                <ContentDescription
                    onClick={() => root.open("https://www.youtube.com/watch?v=Jtauh8GcxBY&ab_channel=LewisCapaldiVEVO", "_blank")}
                >
                    Before you go,
                </ContentDescription>
                <ContentDescription
                    onClick={() => root.open("https://www.youtube.com/watch?v=aKRMNtAdHLM&ab_channel=HarryHudsonVEVO", "_blank")}
                >
                    Just slide
                </ContentDescription>
                <ContentDescription
                    onClick={() => root.open("https://www.youtube.com/watch?v=hEq8jBUbbWE&ab_channel=FrankOcean-Topic", "_blank")}
                >
                    In my room
                </ContentDescription>
            </ContentWrap>
        </Wrap>
    )
}

export default Main
