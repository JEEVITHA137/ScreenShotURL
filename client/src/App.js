import React,{Component} from 'react';
import * as BsIcons from "react-icons/bs";
import MyIcons from './MyIcons.js';
import Form from './Form.js';

class App extends Component{
  

  render(){
    return(
      <div>
        
       
        <MyIcons/>

        <Form />

        
        <div className="footer">
        <div>Designed by <a href="https://www.linkedin.com/in/jeevithavenkatesan137">Jeevitha Venkatesan</a></div>
        </div>
      </div>
    );
  }
}

export default App;
