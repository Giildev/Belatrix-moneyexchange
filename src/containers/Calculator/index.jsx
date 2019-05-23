// Dependencies
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import NumberFormat from "react-number-format";

// Components
import Header from "../Header";
import Footer from "../Footer";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollar: "",
      euro: undefined
    };
  }

  handleSubmit = () => {
    if (
      this.state.euro == undefined ||
      this.state.euro == null ||
      this.state.euro == ""
    ) {
      toast.warn("Euro field can not be Empty!");
    } else {
      console.log(typeof this.state.euro);
      axios
        .get(
          "http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757"
        )
        .then(result => {
          let operation =
            parseFloat(this.state.euro.replace(",", "")) *
            result.data.rates.USD;
          let operationFixed = operation.toFixed(4);
          this.setState({
            dollar: operationFixed
          });
        });
    }
  };

  render() {
    return (
      <div className="calculator">
        <ToastContainer />
        <div className="calculator__box__container">
          <div className="calculator__box">
            <div
              className={`calculator__box--container ${
                this.state.euro !== "" ? "" : "invalid"
              }`}
            >
              <i className="fas fa-euro-sign icon" />
              <NumberFormat
                className="calculator__box__input"
                thousandSeparator={true}
                value={this.state.euro}
                onChange={e => {
                  this.setState({ euro: e.target.value });
                }}
              />
            </div>
            <div className="calculator__box--container">
              <i className="fas fa-dollar-sign icon" />
              <NumberFormat
                className="calculator__box__input"
                thousandSeparator={true}
                value={this.state.dollar}
                readOnly
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
