import { useState } from "react";

function UserSummary({ picture, name, login, email, location}){
    
    const [displayMore, setDisplayMore] = useState(false);

    const displayMoreUserInfo = () => {
        setDisplayMore(!displayMore)
    }
    
    return(
        <div>
            <div className="user-profile">
                <br />
                <img src={picture.large} alt="user" />
                <h5>{login.username}</h5>
                <button onClick={displayMoreUserInfo}>

                {displayMore ? "Hide Info" : "Show Info"}

                </button>
                {displayMore ? (
                    <div className="user-info">
                        <h3>
                        {name.first} {name.last}
                        </h3>
                        <p>{email}</p>
                        <p>
                        {location.state}, {location.country}
                        </p>
                    </div>
                ) : (
                ""
                )}
            </div>
            
        </div>
    )
}
export default UserSummary;