import React, { useState } from "react"
import styles from "./Header.module.css"

const Header = ({ arr, setArr, blur, setBlur }) => {

    const [text, setText] = useState("")

    const onBlur = () => (text.length === 0 || text === '') ? setBlur(true) : null

    const offBLur = () => setBlur(false)

    const addItem = (e) => {
        e.preventDefault()
        text.length > 0 ? setArr([text, ...arr]) : setBlur(blur === true)
        setText("")
    }

    const errMessage = (
        <div className={styles.err}>Поле ввода не может быть пустым</div>
    )

    return (
        <div className={styles.header}>
            <form className={styles.form}>
                <input type="text" className={!blur ? styles.input : styles.inputErr} placeholder="Введите текст..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onFocus={offBLur}
                    onBlur={onBlur}
                />
                <button className={styles.button} disabled={!text} onClick={ addItem }>Отправить</button>
            </form>
            {blur ? errMessage : null}
        </div>
    )
}

export default Header