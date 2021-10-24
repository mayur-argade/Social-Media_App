import "./share.css"
import { Paper, Button } from "@material-ui/core"
import { PermMedia } from "@material-ui/icons"

const share = () => {
    return (
        <Paper elevation={6}>
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img className="shareprofilepic" src="/assests/person/1.jpg" alt="" />
                    <input placeholder="what is in your mid today" className="shareInput" />
                </div>
                <hr className="shareHr"/>

                <div className="sharebottom">
                    <div className="shareoptions">
                    <div className="shareoption">
                        <PermMedia className="shareIcon" />
                        <span className="shareOptionText">photo/video</span>
                    </div>
                    <div className="sharebutton">
                        <Button variant="contained" color="secondary" className="shareButton">Share</Button>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
        </Paper>        
    )
}

export default share
