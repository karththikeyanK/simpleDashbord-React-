import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import Header from "../headers/sampleHeader";
import 'bootstrap/dist/css/bootstrap.min.css';



const SampleLayout = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <div style={{ display: 'flex', flex: 1 }}>
              <Sidebar />
              <div className="classoutlet" style={{ flex: 1, overflow: 'auto' }}>
                  <Outlet />
              </div>
          </div>
        
      </div>
    )
  }   

export default SampleLayout;