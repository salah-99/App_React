import React, { Component } from 'react'
import Test from './Test'
class Cla extends Component {


    
    state = {
        name:'Salah',
        select :"1",
        check:false
    }
    
     chan = (e)=>{
        const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
     }


    render() {

        return (
            <div>
                 <input type='test' name='name' value={this.state.name} onChange={this.chan} />
                 <div>{this.state.name}</div>
                 <select value ={this.state.select} name='select' onChange={this.chan} >
                 <option value='1'>one</option>
                 <option value ='2'>two</option>

                 </select>
                <input type='checkbox' name='check' checked={this.state.check} onChange={this.chan}   />
                 
            </div>
        )
    }
}

export default Cla
