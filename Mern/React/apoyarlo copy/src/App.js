import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const persons = [
    {
      name: {
        first: "Jane", last: "Doe"
      },
      age: 45,
      color: "Black"
    },
    {
      name: {
        first: "John", last: "Smith"
      },
      age: 88,
      color: "Black"
    },
    {
      name: {
        first: "Jane", last: "Fillmore"
      },
      age: 50,
      color: "Black"
    },
    {
      name: {
        first: "Kale", last: "Me"
      },
      age: 62,
      color: "Brown"
    },
  ]
  return (
    <div className="App">
      {persons.map(person => <PersonCard {...person}/>)}
    </div>
  );
}

export default App;
