import { routes } from "./routes"
import { useRoutes } from "react-router-dom"

function App() {
  let elements = useRoutes(routes)
  return <>{elements}</>
}

export default App
