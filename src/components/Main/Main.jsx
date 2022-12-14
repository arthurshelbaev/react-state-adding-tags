import React from "react"
import styles from "./Main.module.css"

const Main = ({ arr, setArr, blur, setBlur }) => {
    const del = (i) => setArr(arr.filter((item, index) => {
        setBlur(false)
        return index !== i
    }))

    return (
        <div className={styles.main}>
            {arr.map((item, index) => {
                return (
                    <div className={styles.elem} key={index}>
                        <div className={styles.text}>{item}</div>
                        <button className={styles.button} onClick={() => del(index)}>×</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Main