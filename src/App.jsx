import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import EventList from "./pages/EventList/EventList"
import FilterEvents from './pages/FilterEvents/FilterEvents'
import EventDetails from'./pages/EventDetails/EventDetails'
import "./App.css"

const router = createBrowserRouter([
  {path:'/',element:<EventList/>},
  {path:'/ find-events',element:<FilterEvents/>},
  {path:'/ events/:id',element:<EventDetails/>}
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
