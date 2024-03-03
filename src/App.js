import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { IntroBanner } from "./Components/IntroBanner";
import NavBar from "./Components/Nav";
import SliderPanel from "./Components/SliderPanel";
import InsightBlog from "./Components/InsightBlog";
import Partners from "./Components/Partners";
import Careers from "./Components/Careers";
import FeaturedCards from "./Components/FeaturedCards";
import ReadyToBanner from "./Components/ReadyToBanner";
import Footer from "./Components/Footer";
import FirstBanner from "./Components/SectionUnknown";

function App() {
  return (
    <div className="App">
      <Fragment>
        <NavBar />
        <IntroBanner />
        <SliderPanel />
        <FirstBanner/>
        <InsightBlog />
        <Partners/>
        <Careers/>
        <FeaturedCards/>
        <ReadyToBanner/>
        <Footer/>
      </Fragment>
    </div>
  );
}

export default App;
