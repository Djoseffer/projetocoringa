import Contato from "./pages/contato";
import Fotos from "./pages/fotos/";
import Home from "./components/home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Comentarios from "./pages/comentarios";


function App() {

  
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home />} />
      <Route path="/fotos" element={ <Fotos />} />
      <Route path="/contato" element={ <Contato />} />
      <Route path ="/comentarios" element={<Comentarios />} />
    </Routes>
    </BrowserRouter>
     
   
  );
}

export default App;
