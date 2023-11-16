import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import SampleLayout from "./component/layouts/mainLayout/sampleLayout"

import Home from "./component/pages/Home"
import Project from "./component/pages/dashbord/Project";
import Reports from "./component/pages/dashbord/Reports/Reports";
import TimeSheet from "./component/pages/dashbord/Reports/TimeSheet";
import Teams from "./component/pages/dashbord/Teams/Teams";
import TeamsMembers from "./component/pages/dashbord/Teams/TeamsMembers";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SampleLayout />}>
        <Route path="/Dashboard" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Reports/TimeSheet" element={<TimeSheet />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Teams/TeamMembers" element={<TeamsMembers />} />
      </Route>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
