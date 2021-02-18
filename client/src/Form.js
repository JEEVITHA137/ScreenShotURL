import React,{Component} from 'react';
import * as BsIcons from "react-icons/bs";

class Form extends Component{
  state = {
    api:"7d76b3d273a34ccf9980b49801b72e71",
    link:"",
    img:"",
    quality:70,
    selectedOption:"png",
    hostname:"https://screenshoturl-server.herokuapp.com/",
    downloadURL:"https://screenshoturl-server.herokuapp.com/download/",
    loading: false,
    fetchError: false,
  }

   validURL = (str) => {
    let pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
      '(\\#[-a-z\\d_]*)?$','i'); 
    return !!pattern.test(str);
  }

  takeScreenshot = () => {

    this.setState({
      loading: true,
      fetchError: false,
      img:" "
    })

    if(this.validURL(this.state.link))
    {
      const values = {
        format:this.state.selectedOption,
        url:this.state.link,
        quality:this.state.quality
      };
  
      const headers = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      };
                
      fetch( `${this.state.hostname}shot`, headers)
        .then(response=>response.json())
        .then(response=>{
          console.log(response.fileName)
          if(!response.fileName)
          {
            this.setState({
              loading :  false,
              fetchError : true
            })
            return;
          }
          this.setState({
            loading: false,
            img: response.fileName,
            link:"",
            quality:70,
            selectedOption:"png",
          })
        })
        .catch(err=>{
          this.setState({
            loading:false,
            fetchError:true
          })
          console.log(err);
        })
    }
    else
    {
      this.setState({
        fetchError: true,
        loading:false,
        img:" ",
        link:"",
        quality:70,
        selectedOption:"png",
      })
    }
  }

  handleOptionChange = (e) =>{
    if(this.state.selectedOption === "jpeg")
    {
      this.setState({
        selectedOption:"png"
      })
    }
    else{
      this.setState({
        selectedOption:"jpeg"
      })
    }
  }

  handleLinkChange = (e) => {
    this.setState({
      link:e.target.value,
      fetchError:false,
      img:""
    })
  }

  render(){
    return(
      <div>
        {
          this.state.loading === true 
            ? <div className="loading justify-content-center">
              <span className="girl"></span>
              <div className="boy">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              </div> 
            :   <div className="searchBox">
                <input className="textBox" type="text" value={this.state.link} onChange={(e) => this.handleLinkChange(e)} placeholder="Paste the Link"></input>
                <BsIcons.BsX className="closeIcon" onClick={()=>(this.setState({link:"",fetchError:false,img:""}))}/>
                <BsIcons.BsCamera className="buttonIcon" onClick={this.takeScreenshot}/>
                {this.state.fetchError === true ? <div className="error">Invalid URL</div> : null}
              </div>
        }

        <div className="row d-flex">
        <div className="range">
              <div className="sliderValue">
                <span style={{left:(this.state.quality/2)*1.4+"%"}}>{this.state.quality}</span>
              </div>
              <div className="field">
                <div className="value left">0</div>
                <input type="range" min="0" max="100" value={this.state.quality} onChange={(e)=>(this.setState({quality:e.target.value}))} steps="1"/>
                <div className="value right">100</div>
              </div>
        </div>

        <div className="format row d-flex">
          <div className="row d-flex"><input type="checkbox" value="png" onChange={() => {}} checked={this.state.selectedOption === 'png'} onClick={this.handleOptionChange}  /><label>png</label></div>
          <div className="row d-flex pl-5"><input type="checkbox" value="jpeg" onChange={() => {}} checked={this.state.selectedOption === 'jpeg'} onClick={this.handleOptionChange} /><label>jpeg</label></div>
        </div>

        </div>

        <div className="main"> 
        <div className="container">
  
          { this.state.img === '' ? null
              : this.state.loading === false && this.state.fetchError === false
              ? <div className="row justify-content-center p-2">
                <img className="col-md-12" src={this.state.hostname+this.state.img} alt={"."}></img>
                <a className="button" onClick={this.download} href={this.state.downloadURL+this.state.img}>Download</a>
                </div>
              : null
          }

        </div></div>
      </div>
    );
  }
}

export default Form;
