import './App.scss';
import Cards from './components/Cards';


const data = [
  {
    title: "Hello",
    index: 1,
    color: "red"
  },
  {
    title: "Hello",
    index: 2,
    color: "green"
  },
  {
    title: "Hello",
    index: 3,
    color: "blue"
  },
  {
    title: "Hello",
    index: 1,
    color: "yellow"
  },
]

function App() {
  return (
    <div className="App">
      {
        data.map((el, id) => {
          return <Cards title={el.title} color={el.color} index={el.index}/>
        })
      }
    </div>
  );
}

export default App;
