import RatesCards from "./components/RatesCards/RatesCards";
import st from "./styles/index.scss"
import rates from './components/RatesCards/Rates.json'


function App() {
  return (
    <div>
      <h1 className={st.header}>Карточки с тарифами</h1>
      <RatesCards arr={rates} />
    </div>
  )
}

export default App;