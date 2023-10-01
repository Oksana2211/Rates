import style from "./style.module.scss"
import { useState } from "react";


export default function Item(props) {

    const [item, setItem] = useState(false);
    const classItem = `${item ? style.card1 : style.card}`

    const handleChange = () => {
        setItem(!item);
    }

    return (

        <section onClick={handleChange} className={` ${classItem}`}>
            <div className={style[props.item.color]}><h2 className={style.name}>{props.item.name}</h2></div>
            <div className={style[props.item.color]}><h2 className={style.price}>{props.item.price}</h2></div>
            <div ><h3 className={style.speed}>{props.item.speed}</h3></div>
            <div ><h3 className={style.info}>{props.item.info}</h3></div>
        </section>

    )
}