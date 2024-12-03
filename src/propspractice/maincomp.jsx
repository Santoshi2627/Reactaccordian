import { Usercomp } from "./usercomp";
import { Admincomp } from "./admincomp";
import React from "react";
class Maincomp extends React.Component{
    render(){
        return(
            <>
            {this.props.login==="admin"?<Admincomp/>:<Usercomp/>}
            </>
            // <>
            
            // <Usercomp/>
            // <Admincomp/>
            // </>
        )
    }
}
export default Maincomp;