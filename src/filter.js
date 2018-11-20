import React,{ Component } from 'react';

export default class Filter extends Component {
  constructor(props){
  super(props)
    this.state = {
    retrive: '',
    people : [],
    arrByID: []
    }
  }

//update component and rneder with out infinit loop
componentDidUpdate(prevState, nextState){
  let people = this.state.people
  if(this.props.list !== people){
     this.setState({people: this.props.list})
  }
}

//start with list retrive
filteredSearch = (query) =>{
  console.log(query);
  function isValue (value) {
    return value
  }
  //function to filter by company or name
  function filterById(item) {
    if(isValue(item.name) && item.name === query){
      return true
    }else if(isValue(item.company) && item.company === query){
      return true
    }else{
      return false
    }
  }
  this.setState({
    arrByID : this.state.people.filter(filterById)
  })
}
//used to fire filteredSearch
fireFilteredSearch = () =>{
  this.filteredSearch(this.state.retrive);
  this.setState({
    retrive:''
  })
}

updateSearch = (e) =>{
  this.setState({ retrive : e.target.value })
}

  render(){
    console.log('filtered results are here', this.state.arrByID);
    return(
    <div>
      <div className="input_container">
        <input
          className="input_box"
          onChange={this.updateSearch}
          type="text"
          placeholder="enter data here"
          value={this.state.retrive}
          />
      </div>
      <div className="search_button_container">
        <button
          className="search_button"
          onClick={this.fireFilteredSearch}
          type="submit">
          employess
        </button>
      </div>
    </div>
    )
  }
}
