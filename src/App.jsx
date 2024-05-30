import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./components/Root"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router}/>     
    </>
  )
}

export default App
