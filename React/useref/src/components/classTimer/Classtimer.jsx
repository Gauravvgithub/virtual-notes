import React, { Component } from 'react'

export class Classtimer extends Component {
    interval
    constructor(props){
        super(props)
        this.state={
            timer:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState((prevState)=>({timer:prevState.timer + 1}))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
        <h1>{this.state.timer}</h1>
        <button onClick={()=>(clearInterval(this.interval))}>Stop Timer</button>
      </div>
    )
  }
}

export default Classtimer