import "./rightbar.css"

const rightbar = ({user}) => {
    
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
                <span className="rightbarInfoKey">{user.city}</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Birthdate:</span>
                <span className="rightbarInfoKey">{user.birthday}</span>
            </div>
        </div>
        </>

       )
}
    return (
        <div className="rightbar">
        <div className="rightbarwrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar /> }
        </div>       
        </div>
    )
}

export default rightbar
