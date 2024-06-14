import React from "react";
import "../src/App.css"

const Submit = (props) =>
    {
        const {Click,loading} = props;
        return <>
            <div className="submit">
                {!loading?<button onClick={Click}>{"Convert"}</button>:<button onClick={Click} disabled><span className="loader"></span></button>}
                
            </div>
        </>
    }
export default Submit;