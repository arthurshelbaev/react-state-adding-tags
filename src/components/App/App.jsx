import React, { useState } from "react"
import Header from "../Header/Header"
import Main from "../Main/Main"
import styles from "./App.module.css"

const App = () => {

    const [arr, setArr] = useState([])
    const [blur, setBlur] = useState(false)

    return (
        <div className={styles.body}>
            <Header arr={arr} setArr={setArr} blur={blur} setBlur={setBlur}/>
            <Main arr={arr} setArr={setArr} blur={blur} setBlur={setBlur}/>
        </div>
    )
}

export default App