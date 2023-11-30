import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import filmData from './data/film-data.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        {filmData.map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>
    </>
  )
}


const FilmCard = (props) => {
  return (
    <div className='film-box' key={props.film.id}>
      <h1 key={props.film.id}>{props.film.title}</h1>
      <p>{props.film.original_title}</p>
    </div>
  )
}


export default App
