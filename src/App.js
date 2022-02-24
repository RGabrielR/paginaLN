import React, {useEffect, useState} from 'react';
import db from "./db/db.json";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import FocalLeft from "./components/FocalLeft";
import FocalRight from "./components/FocalRight";
import Editorials from "./components/Editorials";
import Footer from "./components/Footer";
import FooterArticle from "./components/FooterArticle";
import FooterMobile from "./components/FooterMobile";
import MostRead from "./components/MostRead";
import Notes from "./components/Notes";
import Opinion from "./components/Opinion";
import { useBreakpoint, useScreenSize} from "./methods";
import axios from 'axios';
function App() {
  let screen = useScreenSize();
  let breakpoint = useBreakpoint(screen);
  const [dolarHoy, setDolarHoy] = useState({})
  useEffect(() => {
 Promise.all([
     axios.get('https://db-dolar-hoy.herokuapp.com/dolaroficial').then(res => setDolarHoy({...dolarHoy,dolarBNA : res.data})),
      axios.get('https://db-dolar-hoy.herokuapp.com/dolarblue').then(res => setDolarHoy({...dolarHoy, dolarBlue : res.data}))  
])
  }, [dolarHoy])

  return (
    <div className="d-flex flex-col ai-center">
      <Header dolar={dolarHoy}/>
      <MainArticle article={db.header} />
      <main className="p-md-3 row container">
        <div className="col-12 main-content px-md-1 px-lg-2">
          <div className="bg-pink-10 color-pink fw-bold my-4 ads">
            <p>Espacio para Publicidad</p>
          </div>
          <FocalLeft articles={db.focalIzquierdo} />
          <Notes
            articles={db.notasx2}
            articleWidth={"col-md-6"}
            title="Notas x 2"
          />
          <FocalRight articles={db.focalDerecho} title="Focal Derecho" />
          <Notes
            articles={db.notasVarias}
            articleWidth={"col-md-4"}
            title="Notas x 3, 6, 9, 12"
          />
          <Opinion
            articles={db.opinion}
            last={db.opinion.length - 1}
            title="Opinión"
          />
          <Editorials />
          <Notes
            articles={db.notasColor}
            articleWidth={"col-md-4"}
            color={"bg-light-blue bg-md-red bg-lg-pink"}
            title="Notas x 3 Color"
          />
        </div>
        <aside className="col my-4 px-lg-2 ads">
          <p className="bg-pink-10 color-pink fw-bold w-100">
            Espacio para Publicidad
          </p>
        </aside>
      </main>
      <div className="p-md-3 row container">
        <div className="col-12 px-md-1 px-lg-2">
          <MostRead articles={db.masLeidas} title="Las más leídas" />
          <FooterArticle article={db.footer} />
        </div>
      </div>
      {breakpoint == "L"  ? <Footer /> : <FooterMobile />}
    </div>
  );
}

export default App;
