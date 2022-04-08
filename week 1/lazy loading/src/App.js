// @ts-nocheck
import React, { Suspense, lazy } from "react";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import "./App.css";

const Sidebar = lazy(() => import("./components/Sidebar"));
const Products = lazy(() => import("./components/Products"));
const BoringContent = lazy(() => import("./components/BoringContent"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => (
  <>
    <Menu />
    <Suspense fallback={<div>Loading</div>}>
      <Sidebar />
    </Suspense>
    <div id="main">
      <Hero />
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Products />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <BoringContent />
        </Suspense>
      </main>
    </div>
    <Suspense fallback={<div>Loading</div>}>
      <Footer />
    </Suspense>
  </>
);

export default App;
