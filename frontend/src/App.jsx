import { Route,Routes } from "react-router-dom";
// import './App.css'

//import halaman
import homePage from "./pages/homePage";
import menuPage from "./pages/menuPage";
import aboutPage from "./pages/aboutPage";
import masukPage from "./pages/masukPage";
import daftarPage from "./pages/daftarPage";
import keranjangPage from "./pages/keranjangPage";
import profilPage from "./pages/profilPage";
import infoPage from "./pages/infoPage";
import bayarPage from "./pages/bayarPage";
import konfirmasiPage from "./pages/konfirmasiPage";
import detailPage from "./pages/detailPage";


  
function App() {
  
  return (
    <>
     <Routes>
      
      <Route path="/" Component={homePage} />
      <Route path="/menu" Component={menuPage} />
      <Route path="/about" Component={aboutPage} />
      <Route path="/masuk" Component={masukPage} />
      <Route path="/daftar" Component={daftarPage} />
      <Route path="/keranjang" Component={keranjangPage} />
      <Route path="/info" Component={infoPage} />
      <Route path="/bayar" Component={bayarPage} />
      <Route path="/konfirmasi" Component={konfirmasiPage} />
      <Route path="/profil" Component={profilPage} />
      <Route path="/detail" Component={detailPage} />

      
      
     </Routes>
    </>
  )
}

export default App
