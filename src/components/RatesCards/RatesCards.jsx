import Item from '../Item/Item'
import st from './slyle.module.scss'



export default function Cards(props) {
    // console.log(props);
    return (
        <div className={st.cards}>
            {props.arr.map((item, index) => (
                <Item item={item} key={index} />))}
        </div>
    );
}