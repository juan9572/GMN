import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import EquationEditor from "equation-editor-react";
import Select from 'react-select'

const optionsVal = [
  {
    label: "Error absoluto",
    value: "1"
  },
  {
    label: "Error relativo",
    value: "0"
  },
];

const normOptions = [
  {
    label: "1",
    value: "1"
  },
  {
    label: "2",
    value: "2"
  },
  {
    label: "3",
    value: "3"
  },
  {
    label: "Inf",
    value: "Inf"
  }
];

const Methods = [
  {
    label: "Jacobi",
    value: "1"
  },
  {
    label: "Gauss-Seidel",
    value: "2"
  },
  {
    label: "SOR",
    value: "3"
  }
];

export class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = { input: props.input };
    this._onChange = this._onChange.bind(this);
    this._onChangeComplete = debounce(this._onChangeComplete.bind(this), 500);
  }

  _onChange(e) {
    let input = "";
    if(typeof(e) != "string") {
      if(e.hasOwnProperty("value")){
        input = e.value;
      }else{
        input = e.target.value;
      }
    }else{
      input = e;
    }
    if(input === '3' && e.hasOwnProperty("label") && e.label === 'SOR'){
      const a = document.getElementById("W");
      a.removeAttribute("disabled");
    }else if(e.hasOwnProperty("label") && (e.label === 'Jacobi' || e.label === 'Gauss-Seidel')){
      const a = document.getElementById("W");
      a.setAttribute('disabled','disabled');
    }
    this.setState(() => ({ input }));
    this._onChangeComplete();
  }

  _onChangeComplete() {
    this.props.onChangeComplete(this.props.options.id, this.state.input);
  }

  render() {
    const opt = this.props.options;
    const cn = opt.id !== "W"? `text__input ${!this.props.valid ? 'invalid__value' : '' }` : '';
    if (opt.type === 'function') return (
      <div className="functionInput"
       style={{backgroundColor: "#fff", padding: "0.35rem", borderRadius: 7,color: "#000"}}>
        <EquationEditor
              className={cn}
              id={opt.id}
              type={opt.type}
              name={opt.name}
              placeholder={opt.placeholder}
              required={opt.options.required ? true : false}
              value={""}
              onChange={this._onChange}
              onBlur={this.props.onBlur}
              onClick={this.props.onClick}
              autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
              autoOperatorNames="sin cos tan"
        />
    </div>
    );
    if (opt.type === 'typeError') return (
      <Select
      defaultValue={optionsVal[0]}
      options={optionsVal} 
      className={cn}
      type={opt.type}
      id={opt.id}
      name={opt.name}
      placeholder={opt.placeholder}
      onChange={this._onChange}
      />
    );
    if (opt.type === 'typeMethod') return (
      <Select
      defaultValue={Methods[0]}
      options={Methods} 
      className={cn}
      type={opt.type}
      id={opt.id}
      name={opt.name}
      placeholder={opt.placeholder}
      onChange={this._onChange}
      />
    );
    if (opt.type === 'typeNorm') return (
      <Select
      defaultValue={normOptions[0]}
      options={normOptions} 
      className={cn}
      type={opt.type}
      id={opt.id}
      name={opt.name}
      placeholder={opt.placeholder}
      onChange={this._onChange}
      />
    );
    
    return (
      <input 
        className={cn}
        type={opt.type}
        id={opt.id}
        name={opt.name}
        placeholder={opt.placeholder}
        disabled={opt.id === 'W'}
        required={opt.options.required ? true : false}
        value={this.state.input} 
        onChange={this._onChange}
        onBlur={this.props.onBlur}
        onClick={this.props.onClick}
      />
    );
  }
}
