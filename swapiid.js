import React, { Component } from "react";
export default class SwapiData extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      planet: ""
    };
  }
  renderHomePlanet = () => {
    fetch(this.state.character.homeworld)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          planet: data.result.properties.name
        });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    fetch("https://www.swapi.tech/api/people/5")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          character: data.result.properties
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Swapi</h1>
        <h3>Name: {this.state.character.name}</h3>
        <h3>Height: {this.state.character.height}</h3>
        <p>Planet: {this.state.planet}</p>
        <button onClick={this.renderHomePlanet}>See Home Planet</button>
      </div>
    );
  }
}
