import "./rightbar.css"

const rightbar = (profile) => {
    
const HomeRightbar=()=>{
    return(
        <>
        
        </>
    );
};

const ProfileRightbar =() =>{
    return (
        
        <>
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City: </span>
                <span className="rightbarInfoKey">Mumbai</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Birthdate:</span>
                <span className="rightbarInfoKey">29th may</span>
            </div>
        </div>
        </>

       )
}
    return (
        <div className="rightbar">
        <div className="rightbarwrapper">
        <ProfileRightbar />
        </div>       
        </div>
    )
}

export default rightbar
