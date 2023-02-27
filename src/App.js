import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News.js';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
    const pageSize = 9;
    const apiKey='01df854dda7847b3aa763712078ae9ad';

    // emergency APIs
    // apiKey='dbe57b028aeb41e285a226a94865f7a7';
    // apiKey = 'd093053d72bc40248998159804e0e67d';
    
    const [progress,setProgress] = useState(10)

    return (
        <div>
            <Router>
                <LoadingBar
                    // height={3}
                    color='#f11946'
                    progress={progress}
                />
                < Navbar />
                <Switch>
                    <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
                    <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
                    <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
                    <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
                    <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
                    <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
                    <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
                    <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App