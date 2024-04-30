import { BrowserRouter as Routers , Routes ,Route, BrowserRouter } from "react-router-dom"
import Home from "./Home/Home"
// import Signup from "./registation/Signup"
import Signup from "./registation/Signup"
import Login from "./login/Login"
import Chat from "./Chat/Chat"
import Event from "./Events/Event"
import Forums from "./Forums/Forums"
import Resources from "./Resources/Resources"
import Profile from "./UserProfile/Profile"
import TournamentPage from "./competative/TournamentPage"
import "./index.css"
import Feature from "./Features/Feature"
import Navbar from "./Navbar/Navbar"
// import { useHistory } from "react-router-dom";

const Router = () => {
  return (
    <Routers>
    <Routes>
    <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/home" element={<Home />} /> */}
      
    </Routes>

    <Navbar/>
    <Routes>
    <Route path="/signup" element={<Signup />} />

      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/event" element={<Event />} />
      <Route path="/forum" element={<Forums />} />
      <Route path="/resource" element={<Resources />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/tournament" element={<TournamentPage />} />
      <Route path="/forums" element={<Forums/> } />
      <Route path="/feature" element={<Feature/> } />
    </Routes>
  </Routers>
  )
}

export default Router