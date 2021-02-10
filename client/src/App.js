import React,{Component} from 'react';

class App extends Component{
  state = {
    link:"",
    img:""
  }

  takeScreenshot = async() => {

    const response = await fetch(`https://api.apiflash.com/v1/urltoimage?access_key=7d76b3d273a34ccf9980b49801b72e71&delay=10&format=jpeg&full_page=true&quality=80&url=${this.state.link}`);
    if(response.ok)
    {
      this.setState({
        img:response
      })
    }
    else
      console.log("error")
  }
     
  render(){
    return(
      <div>
        <input type="text" value={this.state.link} onChange={(e)=>{this.setState({link:e.target.value})}}></input>
        <button onClick={this.takeScreenshot}>Submit</button>

        <img src={this.state.img.url}></img>
      </div>
    );
  }
}

export default App;
