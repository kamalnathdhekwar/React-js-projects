import './App.css'
import Card from './components/Card/Card.jsx'
import Grid from './components/gird/Grid'
import Nav from './components/nav/Nav'

function App() {
 

  return (
    <>
    <Nav />
    <Grid numberOfCards={9} />
    </>
  )
}

export default App
