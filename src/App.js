import { Route, Routes } from "react-router-dom";

import { HomePage, AboutPage, ContactPage, GalleryPage } from "./Pages";
import { Navbar, Sidebar, Footer } from "./Components";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        {/* <Route path="/db" element={<DatabasePage />}></Route> */}
        <Route path="/gallery" element={<GalleryPage />}></Route>
        {/* <Route
          path="/facebook"
          element={() => {
            window.location.href = "https://www.facebook.com/";
            return null;
          }}
        /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
