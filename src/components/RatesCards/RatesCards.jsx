import Item from '../Item/Item'
import style from './slyle.module.scss'
import { useState } from "react";



export default function Cards(props) {
    // console.log(item.id);

    const [id, setId] = useState(0)

    return (
        <div className={style.cards}>
            {props.arr.map((item, index) => (
                <Item item={item} key={index} activeCards={item.id === id} setId={setId} />))}
        </div>
    );
}