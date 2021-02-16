import React,{Component} from 'react';
import * as BsIcons from "react-icons/bs";

class App extends Component{
  state = {
    api:"7d76b3d273a34ccf9980b49801b72e71",
    link:"",
    img:"d4e7ec7f-f433-494a-b730-158f6010eb82.png",
    quality:70,
    showValue:"none",
    selectedOption:"png",
    hostname:"http://localhost:5000/",
    downloadURL:"Http://localhost:5000/download/",
    loading: false,
    fetchError: false
  }

  takeScreenshot = () => {
    this.setState({
      loading: true,
      fetchError: false,
      img:" "
    })

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
        img: response.fileName
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

  render(){
    return(
      <div>
        <div className="searchBox">
            <input className="textBox" type="text" value={this.state.link} onChange={(e)=>{this.setState({link:e.target.value})}} placeholder="Paste the Link"></input>
            <BsIcons.BsX className="closeIcon" onClick={()=>(this.setState({link:""}))}/>
            <BsIcons.BsCamera className="buttonIcon" onClick={this.takeScreenshot}/>
        </div>
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
          <div className="row d-flex pr-5"><input type="checkbox" value="png" checked={this.state.selectedOption === 'png'} onClick={this.handleOptionChange}  /><label>png</label></div>
          <div className="row d-flex pl-5"><input type="checkbox" value="jpeg" checked={this.state.selectedOption === 'jpeg'} onClick={this.handleOptionChange} /><label>jpeg</label></div>
        </div>
        </div>

        <section>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        <div className="row">
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
          <div>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
              <BsIcons.BsFillBriefcaseFill className="icons"/>
              <BsIcons.BsAlarmFill className="icons"/>
              <BsIcons.BsFillBrightnessHighFill className="icons"/>
              <BsIcons.BsFillChatDotsFill className="icons"/>
              <BsIcons.BsFillPersonLinesFill className="icons"/>
              <BsIcons.BsFillStarFill className="icons"/>
              <BsIcons.BsFillTerminalFill className="icons"/>
              <BsIcons.BsImageFill className="icons"/>
              <BsIcons.BsHouseDoorFill className="icons"/>
              <BsIcons.BsMoon className="icons"/>
              <BsIcons.BsSun className="icons"/>
              <BsIcons.BsTrophy className="icons"/>
              <BsIcons.BsPuzzleFill className="icons"/>
              <BsIcons.BsMicFill className="icons"/>
              <BsIcons.BsHeartFill className="icons"/>
              <BsIcons.BsGridFill className="icons"/>
              <BsIcons.BsGiftFill className="icons"/>
              <BsIcons.BsFolderFill className="icons"/>
              <BsIcons.BsCloudFill className="icons"/>
              <BsIcons.BsCamera className="icons"/>
          </div>
        </div>
        </section>

        <div className="main"> 
        <div className="container">
  
          { this.state.loading === true 
              ? <div className="loading justify-content-center">
                <span className="girl"></span>
                <div className="boy">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                </div>
              :  this.state.img === '' ? null
              :<div className="row justify-content-center p-2">
                <img className="col-md-12" src={this.state.hostname+this.state.img} alt={"."}></img>
                <a className="button" onClick={this.download} href={this.state.downloadURL+this.state.img}>Download</a>
                </div>
          }
          
        </div></div>
        <div className="footer">
        <div>Designed by Jeevitha Venkatesan</div>
        </div>
      </div>
    );
  }
}

export default App;
