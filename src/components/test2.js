import React from "react";
const buttons = [
    { name: "All", value: "All" },
    { name: "Ethiopia", value: "Ethiopia" },
    { name: "Costa Rica", value: "Costa Rica" },
    { name: "Kenya", value: "Kenya" },
    { name: "Columbia", value: "Columbia" },
    { name: "Panama", value: "Panama" }
  ];
  export class Coffee extends React.Component {
    constructor() {
      super();
      this.state = {
        coffees: [
          {
            name: "Banko",
            origin: "Ethiopia",
            price: 16
          },
          {
            name: "Pueblo",
            origin: "Costa Rica",
            price: 14
          },
          {
            name: "Don Pablo",
            origin: "Columbia",
            price: 13
          },
          {
            name: "Hava Lama",
            origin: "Columbia",
            price: 15
          },
          {
            name: "Guillermo Salva",
            origin: "Ethiopia",
            price: 19
          },
          {
            name: "Salla Rosa",
            origin: "Kenya",
            price: 20
          },
          {
            name: "Santor Gustavio",
            origin: "Panama",
            price: 25
          }
        ],
        filterCoffee: []
      };
    }
  
    componentDidMount() {
      this.setState({ filterCoffee: this.state.coffees });
    }
  
    handleClick = name => {
      let filterCoffee = this.state.coffees.filter(coffee => coffee.origin === name);
 
      this.setState({ filterCoffee: filterCoffee });
    };
  
    render() {
      const renderAll = this.state.filterCoffee.map(coffee => (
        <li key={coffee.name}>{coffee.name}</li>
      ));
      return (
        <div>
          {buttons.map(({ name, value }) => (
            <button
              key={name}
              value={value}
              onClick={() => this.handleClick(name)}
            >
              {name}
            </button>
          ))}
  
          <p>Coffee: {renderAll}</p>
          <h2>{this.state.filterCoffee.length}</h2>
        </div>
      );
    }
  }