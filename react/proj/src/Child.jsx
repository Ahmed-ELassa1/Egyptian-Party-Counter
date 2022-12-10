import React, { Component } from "react";



export default class Child extends Component {
    der(){
        let {name, age}=  this.props.productData
        return (
            <div className="col-md-3">
                <div className="bg-light p-2">
                    <h4> Name : {name}</h4>
                    <p> age : {age}</p>
                </div>
            </div>
        )
    }

}