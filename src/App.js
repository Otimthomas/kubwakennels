import { Route, Routes } from "react-router-dom";

import { HomePage, AboutPage, ContactPage, Females, Males } from "./Pages";
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
        <Route path="/our-males" element={<Males />}></Route>
        <Route path="/our-females" element={<Females />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
