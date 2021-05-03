import React, { Component } from "react";
import styles from "./Filter.module.css";

class Filter extends Component {
  
  change = (event) => {
    let { name, value } = event.target;
    this.props.onChange(name, value);
  };
  
  render() {
    console.log('props', this.props)
    return (
      <div>
        <input
          type='text'
          name="filter"
          value={this.props.filter}
          onChange={this.change}
          placeholder={`Search`}
        />
      </div>
    );
  }
}

export default Filter