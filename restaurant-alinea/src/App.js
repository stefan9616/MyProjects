import { Alergens } from "./components/Alergens";
import { Deserts } from "./components/Deserts";
import { Drinks } from "./components/Drinks";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainDishes } from "./components/MainDishes";
import { MenuHeader } from "./components/MenuHeader";
import { PastaAndRizoto } from "./components/PastaAndRizoto";
import { Pizas } from "./components/Pizas";
import { Salads } from "./components/Salads";
import { Starters } from "./components/Starters";
import { TopDishes } from "./components/TopDishes";
import { Home } from "./components/Home";

import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/top" element={<TopDishes />}> </Route>
        <Route path="/salads" element={<Salads />}> </Route>
        <Route path="/starters" element={<Starters />}> </Route>
        <Route path="/pasta" element={<PastaAndRizoto />}> </Route>
        <Route path="/pizas" element={<Pizas />}> </Route>
        <Route path="/main" element={<MainDishes />}> </Route>
        <Route path="/deserts" element={<Deserts />}> </Route>
        <Route path="/drinks" element={<Drinks />}> </Route>
      </Routes>
      <Footer />
    </>
  );

}

export default App;
