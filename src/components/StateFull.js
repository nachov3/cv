import React, { Component } from 'react';


class StateFull extends React.Component {
    constructor(){
        super();
        this.state={


            isOK:true,

            


        };
    }
    render(){
        return(
            <React.Fragment>
                {
            
            this.state.isOK==true
            ?
            "si esta ok"
            :
            "No esta ok"
                }
            </React.Fragment>
        );
    }
}

export default StateFull;