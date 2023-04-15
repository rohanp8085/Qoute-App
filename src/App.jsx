import Card from "./Components/card"
import { QouteProvider } from "./Context/QouteContext"


function App() {

  return (
    <QouteProvider>
   <Card/>
    </QouteProvider>
  )
}

export default App
