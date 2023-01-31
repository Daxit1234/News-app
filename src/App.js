import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key="general" pagesize={12} category="general" counrty="in"/>} />
          <Route exact path='/business' element={<News key="business" pagesize={12} counrty="in" category="business"/>} />
          <Route exact path='/entertainment' element={<News key="entertainment" pagesize={12} category="entertainment" counrty="in"/>} />
          <Route exact path='/health' element={<News key="health" pagesize={12} category="health" counrty="in"/>} />       
          <Route exact path='/science' element={<News key="science" pagesize={12} category="science" counrty="in"/>} />
          <Route exact path='/sports' element={<News key="sports" pagesize={12} category="sports" counrty="in"/>} />
          <Route exact path='/technology' element={<News key="technology" pagesize={12} category="technology" counrty="in"/>} />
        </Routes>
       </Router>
      </div>
    )
  }
}

