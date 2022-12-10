import React, {Component} from "react" ;
import Child from "./Child"
import { Component } from "react";
export default class Parent extends Component {
    state = {
        Products: [
            {id:"10", name: "Ahmed", age: "27"},
            {id:"11",name: "Mostafa", age: "25"},
            {id:"12",name: "Mariem", age: "22"},
            {id:"13",name: "Marwa", age: "26"},
            {id:"14",name: "Aya", age: "29"},
            {id:"15",name: "Ebrahim", age: "24"},
            {id:"16",name: "Said", age: "23"},
        ]
    }
    render(){
        return(
            <div className="bg-info">
                <div className="container py-5">
                    <h2 className="text-center text-white">Parent</h2>
                </div>
                <div className="row g-3">
                    {this.state.Products.map((element,i) => <Child  key={element.id}  productData={element}/>)}
                </div>

            </div>

        )
    }
}