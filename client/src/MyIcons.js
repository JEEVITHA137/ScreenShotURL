import React from 'react';
import * as BsIcons from "react-icons/bs";

const MyIcons = () => {
    const icons = ["bath","id-card","telegram","superpowers","user-circle","anchor","bell","bicycle","bluetooth","book","briefcase","coffee","cloud","cube","diamond","car","compass","fighter-jet","gift","gamepad",
                 "heartbeat","laptop","image","leaf","rocket","snowflake-o","truck","unlock","umbrella","trophy","train","bitcoin","random","apple","gitlab","html5","css3","github","linux","pinterest","ra","safari",
                 "skyatlas","snapchat","twitter","windows","usb","vimeo","trello","yelp","yahoo","wpbeginner","yoast","wordpress","renren","opencart","meetup","modx","lastfm","joomla","ge","joomla","fort-awesome","foursquare"]
    const LoopArray = [{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    return(
        <section>
        {
            LoopArray.map((value,i)=>{
                return(
                    <div className="row" key={i}>
                    <div className="line">
                    {
                        icons.sort(() => Math.random() - 0.5).map((value,i)=>{
                        return(
                             <i key={i} className= {`fa fa-${value} icons`} ></i>
                        )
                    })
                    }
                    </div>
                    <div className="line">
                    {
                        icons.sort(() => Math.random() - 0.5).map((value,i)=>{
                        return(
                             <i key={i} className= {`fa fa-${value} icons`} ></i>
                        )
                    })
                    }
                    </div>
                    </div>
                );
            })
        }
        </section>
    );
}

export default MyIcons;