import React from "react";
import "../src/App.css"

const Submit = (props) =>
    {
        const {Click} = props;
        return <>
            <div className="submit">
                <button onClick={Click}>Check</button>
            </div>
        </>
    }

export default Submit;