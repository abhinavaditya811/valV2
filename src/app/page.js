"use client"
import Image from "next/image";
import React, { useState } from "react";
import pookie from "./assets/pookie.jpg"
import styled from "styled-components"
import root from "window-or-global"

const Wrap = styled.div`
    position: relative;
    height: 100vh;
`

const InputWrap = styled.div`
    z-index: 1000;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;

    p {
        margin: 0;
        color: white;
    }
`

const Text = styled.p`
    color: white;
    font-size: 20px;
`

const Main = () => {

    const getQuestion = (no) => {
        switch(no) {
            case 1:
                return (
                    <>
                        <Text>
                            your budday?
                        </Text>
                        <input type="text" placeholder="mm/dd/yyyy" onChange={(e) => setBudday(e.target.value)} />
                        <button
                            onClick={() => handleBudday()}
                        >
                            enter
                        </button>
                    </>
                )
            case 2:
                return (
                    <>
                        <Text>
                            our first kiss?
                        </Text>
                        <input type="text" placeholder="mm/dd/yyyy" onChange={(e) => setFirst(e.target.value)} />
                        <button
                            onClick={() => handleKiss()}
                        >
                            enter
                        </button>
                    </>
                )
            case 3:
                return (
                    <>
                        <Text>
                            our anniversary?
                        </Text>
                        <input type="text" placeholder="mm/dd/yyyy" onChange={(e) => setAnni(e.target.value)} />
                        <button
                            onClick={() => handleAnni()}
                        >
                            enter
                        </button>
                    </>
                )
            case 4:
                console.log("here")
                setTimeout(() => setSike(true), 5000)
                return (
                    <div>
                        {sike ? (
                            <div>
                                <Text>
                                    hehehe no but fr tho, open this 
                                    <span
                                        style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}
                                        onClick={() => root.open("https://photos.app.goo.gl/j1h1d7FHhKfXADmt7", "_blank")}
                                    >here</span>
                                </Text>
                            </div>
                        ) : (
                            <Text>
                                sike migga u thought
                            </Text>
                        )}
                    </div>
                )
            default:
                return (
                    <>
                        <button
                            onClick={() => setQuestion(1)}
                        >
                            restart
                        </button>
                    </>
                )
        }
    }

    const [budday, setBudday] = useState("")
    const [first, setFirst] = useState("")
    const [anni, setAnni] = useState("")
    const [sike, setSike] = useState(false)
    const [question, setQuestion] = useState(1)
    const handleBudday = () => {
        if (budday === "06/30/2000") {
            setQuestion(2)
        } else {
            setQuestion(-1)
        }
    }

    const handleKiss = () => {
        if (first === "04/19/2023") {
            setQuestion(3)
        } else {
            setQuestion(-1)
        }
    }

    const handleAnni = () => {
        if (anni === "01/01/2024") {
            setQuestion(4)
        } else {
            setQuestion(-1)
        }
    }
    return (
        <Wrap>
        <Image src={pookie} style={{ position: "absolute", height: "101%", width: "101%" }} />
        <InputWrap>
            {getQuestion(question)}
        </InputWrap>
        </Wrap>
    )
}

export default Main
