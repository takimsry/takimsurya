import React, { useEffect } from 'react';
import './App.css';
import RouteConfig from './routers/RouteConfig';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <RouteConfig />
    </div>
  );
}

export default App;
