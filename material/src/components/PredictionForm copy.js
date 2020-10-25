import React, { Component } from "react";
import UploadImage from "./UploadImage";
import ResultCard from "./ResultCard";

export class PredictionForm extends Component {
  state = {
    step: 1,
    fileName: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { fileName } = this.state;

    const values = { fileName };

    switch (step) {
      case 1:
        return (
          <UploadImage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <ResultCard />;
    }
  }
}

export default PredictionForm;
