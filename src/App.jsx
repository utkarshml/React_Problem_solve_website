import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home.jsx"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/Footer.scss"
import Footer from "./components/Footer";
function App() {


  return (
    
    <Router>
      <Header />
   <Routes>
      <Route path="/" element={<Home/>} />
   </Routes>
     <Footer/>
    </Router>
  )
}

export default App
