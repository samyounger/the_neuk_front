import React, { Component } from 'react';

// Components

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:        '',
      description: '',
      file:        ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name   = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.uploadImage(this.state);
  }

  render() {
    const name = this.state.first_name;
    return (
      <div className='admin'>
        <h1>Images Component</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <span><input
              name='name'
              value={name}
              onChange={this.handleChange}
              placeholder='Name' /></span>
          </label>
          <label>
            Description:
            <span><input
              name='description'
              value={name}
              onChange={this.handleChange}
              placeholder='description' /></span>
          </label>
          <label>
            File:
            <span><input
              type='file'
              name='file'
              onChange={this.handleChange}/></span>
          </label>
          <input className='button' type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default Images;