import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API_GEETA
  state={
    progress:0
  }
  setprogress=(progress)=>{
      this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color="blue"
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path='*' element={<News apikey={this.apikey} setprogress={this.setprogress} key="general" pagesize={12} category="general" counrty="in"/>} />
          <Route exact path='/business' element={<News apikey={this.apikey} setprogress={this.setprogress} key="business" pagesize={12} counrty="in" category="business"/>} />
          <Route exact path='/entertainment' element={<News apikey={this.apikey} setprogress={this.setprogress} key="entertainment" pagesize={12} category="entertainment" counrty="in"/>} />
          <Route exact path='/health' element={<News apikey={this.apikey} setprogress={this.setprogress} key="health" pagesize={12} category="health" counrty="in"/>} />       
          <Route exact path='/science' element={<News apikey={this.apikey} setprogress={this.setprogress} key="science" pagesize={12} category="science" counrty="in"/>} />
          <Route exact path='/sports' element={<News apikey={this.apikey} setprogress={this.setprogress} key="sports" pagesize={12} category="sports" counrty="in"/>} />
          <Route exact path='/technology' element={<News apikey={this.apikey} setprogress={this.setprogress} key="technology" pagesize={12} category="technology" counrty="in"/>} />
        </Routes>
       </Router>
      </div>
    )
  }
}


//functional base component converted

// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import News from './components/News'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';
// const App=()=>{
//   const apikey=process.env.REACT_APP_NEWS_API_GEETA
//   const [progress,setprogress]=useState(0)
//   setprogress(progress)
//   return (
//       <div>
//         <Router>
//         <Navbar/>
//         <LoadingBar
//         height={3}
//         color="blue"
//         progress={progress}
//         />
//         <Routes>
//           <Route exact path='/' element={<News apikey={apikey} setprogress={setprogress} key="general" pagesize={12} category="general" counrty="in"/>} />
//           <Route exact path='/business' element={<News apikey={apikey} setprogress={setprogress} key="business" pagesize={12} counrty="in" category="business"/>} />
//           <Route exact path='/entertainment' element={<News apikey={apikey} setprogress={setprogress} key="entertainment" pagesize={12} category="entertainment" counrty="in"/>} />
//           <Route exact path='/health' element={<News apikey={apikey} setprogress={setprogress} key="health" pagesize={12} category="health" counrty="in"/>} />       
//           <Route exact path='/science' element={<News apikey={apikey} setprogress={setprogress} key="science" pagesize={12} category="science" counrty="in"/>} />
//           <Route exact path='/sports' element={<News apikey={apikey} setprogress={setprogress} key="sports" pagesize={12} category="sports" counrty="in"/>} />
//           <Route exact path='/technology' element={<News apikey={apikey} setprogress={setprogress} key="technology" pagesize={12} category="technology" counrty="in"/>} />
//         </Routes>
//        </Router>
//       </div>
//     )
//   }
// export default App

