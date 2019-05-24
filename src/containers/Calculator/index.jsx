// Dependencies
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

// Components

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: undefined,
      currency2: "",
      fetchedValue: ""
    };
  }

  componentDidMount() {
    this.fetchData();
    setInterval(() => {
      this.fetchData();
      toast.success("Dollar value Updated!");
    }, 1000 * 60 * 10);
  }

  fetchData = () => {
    fetch(
      "http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757"
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          fetchedValue: result.rates.USD
        });
      });
  };

  handleSubmit = () => {
    if (this.state.currency !== undefined) {
      // Format to Float again the value at this.state.currency to do the maths
      let operation =
        parseFloat(this.state.currency.replace(/[,]/g, "")) *
        this.state.fetchedValue;
      // then add 4 decimals to the result of the previous multiply result
      let operationFixed = operation.toFixed(4);
      // for update the state with the operation fully formated
      this.setState({
        currency2: this.numberToFormat(operationFixed)
      });
    } else {
      this.setState({ currency2: "" });
      toast.warn("currency field can not be Empty!");
    }
  };

  handleInput = e => {
    if (e.value !== "") {
      // Format the input value to separate every thousands with ","
      let inputFormated = e.value
        .replace(/[abc,]/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      //Check if there's a dot "." inside the value
      if (inputFormated.split(".").length > 1) {
        if (inputFormated.split(".")[1].length <= 5) {
          // Split the value to get all values after the dot "." to replace every "," with nothing (this happened because in the last format we format it to add "." every 3 characters)
          let inputDecimal = inputFormated.split(".")[1].replace(/[,]/g, "");
          let inputNatural = inputFormated.split(".")[0];
          let inputFullyFormated = `${inputNatural}.${inputDecimal}`;
          // Print the value formated on the input while we type
          e.value = inputFullyFormated;
          this.setState({
            currency: inputFullyFormated
          });
        }
      } else {
        this.setState({
          currency: inputFormated
        });
        // if there is no dot "." on the value, just print the value formated on the input
        e.value = inputFormated;
      }
    } else {
      this.setState({ currency: "" });
    }
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  numberToFormat = number => {
    let integer = parseFloat(number)
      .toFixed(4)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    let decimals = integer.split(".")[1].replace(",", "");
    let natural = integer.split(".")[0];
    let integerFormated = `${natural}.${decimals}`;
    return integerFormated;
  };

  render() {
    return (
      <div className="calculator">
        <ToastContainer />
        <div className="calculator__instruction">
          <h1 className="calculator__instruction__title">Lorem Ipsum Dolor!</h1>
          <p className="calculator__instruction__content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            maxime fuga voluptatum! Saepe necessitatibus, dicta facilis
            obcaecati quae adipisci pariatur dolor sit! Tenetur nesciunt totam
            eligendi impedit animi nulla fuga.
          </p>
        </div>
        <div className="calculator__box__container">
          <div className="calculator__box">
            <div
              className={`calculator__box--container ${
                this.state.currency !== "" ? "" : "invalid"
              }`}
            >
              <i className="fas fa-euro-sign icon" />
              <input
                type="text"
                className="calculator__box__input"
                onChange={e => {
                  this.handleInput(e.target);
                }}
                onKeyDown={this.handleKeyDown}
              />
            </div>
            <div className="calculator__box--container">
              <i className="fas fa-dollar-sign icon" />
              <input
                type="text"
                className="calculator__box__input"
                readOnly
                value={this.state.currency2}
              />
            </div>
          </div>
        </div>
        <div onClick={this.handleSubmit} className="calculator__button">
          Calculate
        </div>
      </div>
    );
  }
}
