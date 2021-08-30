import React from "react";
import { Button } from '@material-ui/core';

export default class TodoList extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            item_input: "",
            items: []
        };

        this.update = this.update.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    update(event) {
        this.setState({
            item_input: event.target.value
        });
    }

    add(){
        this.setState(prevState => {
            return{
                item_input: "",
                items: prevState.items.concat(prevState.item_input)
            }

        })
        console.log(this.state)
    }

    remove(key){
        this.setState(prevState => {
            let items = [...prevState.items]
            items.splice(key,1)
            return{
                item_input:"",
                items
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{"Todo List"}</h1>
                <ul className={"List"}>
                    {this.state.items.map((item, i) =>(
                            <li key={i}>
                                <h4 className={"ItemName"}>{item}</h4>
                                <Button className={"Button"}  variant="contained"  color="secondary" onClick={() => this.remove(i)}>x</Button>
                            </li>
                    ))}
                </ul>
                <input
                    type={"text"}
                    value={this.state.item_input}
                    onChange={this.update}
                    className={"TextInput"}
                />
                <Button
                    type={"button"}
                    onClick={this.add}
                    variant="contained"
                >Add</Button>
            </div>
        )
    }
}