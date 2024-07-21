import './App.css'
import ChoosePage from './pages/ChoosePage/ChoosePage'
import { Provider } from 'react-redux'
import { store } from './shared/store'

function App() {

  return (
    <Provider store={store}>
     <ChoosePage />
    </Provider>
  )
}

export default App
