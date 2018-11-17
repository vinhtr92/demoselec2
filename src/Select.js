import React, { Component } from "react";

const getNameOptionsActive = data => {
  const itemSelected = data.filter(item => item.selected);
  return itemSelected.length > 0 ? itemSelected[0].name : "";
};

export default class Select extends Component {
  static defaultProps = {
    onChangeOptions: () => {}
  };

  state = {
    isActive: false,
    data: []
  };

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  _handleOpenOptions = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  _setOnChangeOptions = () => {
    const { data: newOptions } = this.state;
    const itemSelected = newOptions.filter(item => item.selected);
    const arrayNameSelected = itemSelected.map(item => item.name);
    this.props.onChangeOptions(newOptions, itemSelected, arrayNameSelected);
  };

  _handleItemOptionsClick = id => async () => {
    await this.setState(prevState => ({
      data: prevState.data.map(item => {
        return {
          ...item,
          selected: item.id === id
        };
      }),
      isActive: false
    }));
    this._setOnChangeOptions();
  };

  _renderItemOptions = (item, index) => {
    return (
      <div key={item.id} onClick={this._handleItemOptionsClick(item.id)}>
        {item.name}
        {item.selected && <span> [ v ]</span>}
      </div>
    );
  };

  _renderOptions = () => {
    const { data, isActive } = this.state;
    return (
      <div style={{ display: isActive ? "block" : "none" }}>
        {data.map(this._renderItemOptions)}
      </div>
    );
  };

  _getNameOptionsActive = getNameOptionsActive;

  render() {
    const { data } = this.state;
    const nameOptionsActive = this._getNameOptionsActive(data);
    return (
      <div>
        <div onClick={this._handleOpenOptions}>
          <div>{nameOptionsActive}</div>
          {!nameOptionsActive && <div>Placeholder</div>}
        </div>
        {this._renderOptions()}
      </div>
    );
  }
}
