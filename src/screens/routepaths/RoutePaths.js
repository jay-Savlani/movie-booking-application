import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import  Details from "../details/Details";
class RoutePaths extends Component {
    render() {
        return (
            
                <Router>
                    <Routes>
                        <Route exact  path='/' element={<Home />} />
                        <Route  path='/Details/:movie' element={<Details  />}/>
                    </Routes>

                </Router>
            
        )
    }
}

export  {RoutePaths};