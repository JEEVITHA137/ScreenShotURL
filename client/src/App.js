import React,{Component} from 'react';

class App extends Component{
  state = {
    api:"7d76b3d273a34ccf9980b49801b72e71",
    link:"",
    img:"",
    option:"jpeg",
    quality:70
  }

  takeScreenshot = async() => {
    const response = await fetch(`https://api.apiflash.com/v1/urltoimage?access_key=${this.state.api}&delay=10&format=${this.state.option}&full_page=true&quality=${this.state.quality}&url=${this.state.link}`);
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
        <div className="form">
        <input type="text" value={this.state.link} onChange={(e)=>{this.setState({link:e.target.value})}}></input>
        <button onClick={this.takeScreenshot}>Take Screenshot</button>
        <select value={this.state.option} onChange={(e)=>(this.setState({option:e.target.value}))}>
          <option value="png">Png</option>
          <option value="jpeg">Jpg</option>
        </select>
        </div>

        <div className="container">
        <div className="row justify-content-center p-2">
        <img className="col-md-12" src={this.state.img.url} ></img>
        <img className="col-md-12" src='./urltoimage.jpeg' ></img>
        </div></div>
        <div>Designed by Jeevitha Venkatesan</div>
      </div>
    );
  }
}

export default App;
