import React, { Component } from 'react';
import employees from './employees';
import Filter from './filter.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : [],
      add: ''
    };
  }
  //initial state for list
  componentDidMount(){
    this.setState((state) => {
      //updatew salary in employee obj
      employees.forEach((employee, i ) => {
        //this.numToMoney(employees.salary)
        let result = this.numToMoney(employee.salary)
        //set the employees prop on state to employeen obj
        employees[i].salary = result
      })
      state.list = employees
      //return state
      return state
    })
  }

  //function for convert num to money
  numToMoney = (number) =>{
    //convert num to str step1
    let str = number.toString();
      //str to arr step2
      let split = str.split('');
        //add an element at the end step3
        split.splice(-3, 0, ',');
          // make a str again step4
          let backToStr = split.join('');
            //concat a $ sing in front and first decimal to end step5
            let num = ('$' + backToStr + '.' );
    // repeat step2
    let firstO = num.split('');
      // repeat step3 to add 0 at the end
      firstO.splice(firstO.length,0,'0');
        // repeat step4
        let backFirst = firstO.join('');
    //repeat step 2
    let lastO = backFirst.split('');
      // repeat step3
      lastO.splice(lastO.length,0,'0')
        //repeat step4
        let interger = lastO.join('')

    console.log(interger);
    //return number
    return interger
  }

//this deletes the user by using id of them
deleteUser = (item) => {
  console.log('this is the id',item.id);
  let {list} = this.state;
  list.splice(item.id,1);
  this.setState({
    list : list
  });
}
//to add user
addUser = () => {
  this.setState({
      add : this.state.list
  })
  console.log('yessss!!! click ma agai');
}
//value of user
update = (e) => {
  this.setState({ add: e.target.value })
}

  render() {
    const {list} = this.state
    return (
    <div id='employees'>
        <table>
          <tbody>
            <tr className="top_Row">
              <th>Age</th>
              <th>Company</th>
              <th>Email</th>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Salary</th>
            </tr>
              {this.state.list.map(item => {
                return (
            <tr className="bottom_Row" key={item.id}>
              <td>{item.age}</td>
              <td>{item.company}</td>
              <td>{item.email}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.salary}</td>
              <a className="delete" onClick={this.deleteUser.bind(this,item)} href='#'>X</a>
            </tr>
              )
            })}
          </tbody>
        </table>
        <Filter list={list}/>
        <input
          onChange={this.update}
          className="input_add_user"
          type="text"
          value={this.state.add}/>
        <button
          className="add_use_button"
          onClick={this.addUser}
          type="submit"
          >agregar empleado</button>
     </div>
    )
  }
}

export default App;
