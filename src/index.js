import React from "react";
import ReactDOM from "react-dom";
import {Draggable} from 'react-beautiful-dnd';



class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      check1:false,
      check2:false,
      check3:false
    }
    this.onCheckChange=this.onCheckChange.bind(this)
  }
  onCheckChange(e){
    this.setState({[e.target.name]:e.target.checked

    })
  }
  render(){
    return (
      <div> 
        <input type="checkbox" name="check1" checked={this.state.check1} onChange={this.onCheckChange}/>apple<br/>
        <input type="checkbox" name="check2" checked={this.state.check2} onChange={this.onCheckChange}/>watermelon<br/>
        <input type="checkbox" name="check3" checked={this.state.check3} onChange={this.onCheckChange}/>banana<br/>
      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
