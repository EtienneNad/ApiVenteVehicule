import React from "react";


class Hello extends React.Component{
    render(){
        return(
            <h1>Hello, {this.props.nom}</h1>
        )
    }
}
export default Hello;