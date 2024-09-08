import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import NotFound from "../pages/NotFound";

import PrivateRouter from "./PrivateRouter";
import CardDetails from "../pages/CardDetails";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile
          başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine
          sahip olması gerekir . */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />

          {/* şifre kontrolü ile girilebilecek sayfalar için PrivateRouter a yönlendir */}

          <Route path="/courses" element={<PrivateRouter />}>
            <Route path="" element={<CourseCard />} />
          </Route>

<Route path="/courses/:name"   element={<CardDetails/>}/>





          <Route path="/contact" element={<PrivateRouter/>}>
            <Route path="" element={<ContactForm />} />
          </Route>



          <Route path="/paths" element={<Paths />} />




          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
