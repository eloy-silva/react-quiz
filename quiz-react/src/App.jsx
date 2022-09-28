
import { Fragment } from 'react'
import Welcome from './components/Welcome/index.jsx'
import { Title } from './components/Welcome/styles.js';
import GlobalStyle from  './styles/globalStyles.js'

function App() {


  return (
    <Fragment>
    <GlobalStyle/>
    <Title>React Quiz</Title>
    <Welcome/>
 
    </Fragment>
  )
}

export default App;
