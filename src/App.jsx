import RatesCards from "./components/RatesCards/RatesCards";
import style from "./styles/index.scss"
import rates from './components/RatesCards/Rates.json'


function App() {

  return (
    <div>
      <h1 className={style.header}>Карточки с тарифами</h1>
      <RatesCards arr={rates} />
    </div>
  )
}

export default App;