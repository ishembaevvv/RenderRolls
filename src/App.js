import Cards from './components/Cards';
import './App.scss';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';


const data = [
  {
    img: one,
    title: "Унаги Урамака",
    text: "угорь, авокада, сливочный сыр, огурец, соус унаги, кунжут.",
    price: "1900,00 ТГ",
    kl: "Калорийность Ккаль 298"
  },
  {
    img: two,
    title: "Мадрид Ролл",
    text: "Лосось, авокада, спайси соус, перец чили, икра тобико.",
    price: "1100,00 ТГ",
    kl: "Калорийность Ккаль 275"
  },
  {
    img: three,
    title: "Теплая креветка",
    text: "угорь, авокада, сливочный сыр, огурец, соус унаги, кунжут",
    price: "1700,00 ТГ",
    kl: "Калорийность Ккаль 298"
  },
  {
    img: four,
    title: "Фрэш роллы",
    text: "угорь, авокада, сливочный сыр, огурец, соус унаги, кунжут",
    price: "550,00 ТГ",
    kl: "Калорийность Ккаль 298"
  },
]

function App() {
  return (
    <div className="App">
      {
        data.map((el, id) => {
          return <Cards 
          img={el.img}
          title={el.title}
          text={el.text}
          price={el.price}
          kl={el.kl}
          />
        })
      }
    </div>
  );
}

export default App;
