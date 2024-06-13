import React from "react";
import "../src/App.css"

const Submit = (props) =>
    {
        const {Click,loading} = props;
        return <>
            <div className="submit">
                {!loading?<button onClick={Click}>{"CONVERT"}</button>:<button onClick={Click} disabled><span className="spinner"></span></button>}
                
            </div>
        </>
    }
export default Submit;