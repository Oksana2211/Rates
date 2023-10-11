import React from "react"
import style from "./style.module.scss"
// import { useState } from "react";


export default function Item(props) {

    // const [classIt, setClassIt] = useState(false);
    const classItemActive = props.activeCards ? 'card1' : ""
    const classItem = 'card'
    // const handleChange = () => {
    //     setClassIt(!classIt);
    // }
    function handleActive() {
        props.setId(props.item.id)
    }

    return (

        <section className={`${style[classItem]} ${style[classItemActive]}`} onClick={handleActive}>
            <div className={style[props.item.color]}><h2 className={style.name}>{props.item.name}</h2></div>
            <div className={style[props.item.color]}><h2 className={style.price}>{props.item.price}</h2></div>
            <div ><h3 className={style.speed}>{props.item.speed}</h3></div>
            <div ><h3 className={style.info}>{props.item.info}</h3></div>
        </section>

    )
}