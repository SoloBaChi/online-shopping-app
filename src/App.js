import React,{Component} from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom'




const App = () => {

  return(
    <div>
    <BrowserRouter>
      <Main/>
     </BrowserRouter>
    </div>
    );

}
export default App;