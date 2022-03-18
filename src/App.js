import { Component } from "react";
import "./styles.css";
class Sam extends Component{
  constructor(props){
    super(props);
    this.state={
      num:10,
      Butn:"Increment"
    };
    console.log("Constructor was called");
  }
  componentDidMount(){
    this.setState({num:this.state.num-1})
    console.log("Cmd was called once");
  }
    render(){
      const {num} = this.state;
      console.log("Render Was called");
      return (
        <div>
          <h1>{num}</h1>
          <button onClick={()=>{
            this.setState({num:num+1})
          }}>{this.state.Butn}</button>
          </div>
      );
    }
}
class Sam1 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return 10+10+1005+66620
  }
}
export default function App() {
  return (
    <div className="App">
      <Sam1 />
      <Sam />
      <Sam />
      <h1>Class Component Example</h1>
      <h2>Lifecycle methods </h2>
    </div>
  );
}
