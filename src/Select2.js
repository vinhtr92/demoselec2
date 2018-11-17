import React, { Component } from "react";

export default class Select2 extends Component {
  state = {
    isActive: false,
    data: [],
    dataResults: []
  };

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  // componentDidMount called after UI rendered to DOM, set data for state data

  _handleOpenOptions = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  _handleItemClick = item => _ => {
    this.setState(prevState => ({
      dataResults: [item],
      isActive: false
    }));
    console.log(this);
    console.log("stateeees");
  };
  // this _handleItemClick set State for item mapped, its call method
  // setState on mapped item, because the _handleItemClick method called
  // within componentDidUpdate method the setState method can't call directly,
  // the setState method call in callback function

  _renderItem = (item, index) => {
    const { dataResults } = this.state;
    return (
      <div key={index} onClick={this._handleItemClick(item)}>
        {item}
        {console.log(index, item)}
        {dataResults.includes(item) && <span> [ v ]</span>}
      </div>
    );
  };

  //this renderItem method using index as key, return item to UI with map method, and call method _handleClick in every item mapped.

  render() {
    const { isActive, dataResults } = this.state;
    return (
      <div>
        <div onClick={this._handleOpenOptions}>
          {dataResults[0]}
          {console.log(dataResults)}
          {dataResults.length === 0 && <div>Placeholder 2</div>}
        </div>
        <div style={{ display: isActive ? "block" : "none" }}>
          {this.state.data.map(this._renderItem)}
        </div>
      </div>
    );
  }
}
