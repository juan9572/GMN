import React, { Component } from 'react';
import { ControlledInput } from './input';

const validate = (value, options) => {
  if (options.required) {
    if (!value || value === '') return false;
  }
  if (options.length) {
    if (value.length > 120) return false;
  }
  if (options.float) {
    if (!/[0-9]+\.[0-9]+|[0-9]+/.test(value)) return false;
  }
  return true;
};

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

function name(str){
  if(str === "Niter"){
    return "Número de iteraciones";
  }else if(str === "Funcion"){
    return "Función";
  }else{
    return str;
  }
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onChangeComplete = this._onChangeComplete.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._resetValidation = this._resetValidation.bind(this);
    this._submit = this._submit.bind(this);
    props.fields.map(n => {
      this.state[n.id] = { value: '', valid: true, options: n.options };
    });
  }

  _onChangeComplete(id, value) {
    this.setState(state => { state[id].value = value; return state });
  }

  _onBlur(e) {
    const { id, value } = e.target;
    const valid = validate(value, this.state[id].options);
    this.setState(state => {state[id].valid = valid; return state });
  }

  _resetValidation(e) {
    const { id } = e.target;
    this.setState(state => {state[id].valid = true; return state });
  }

  _submit(e) {
    e.preventDefault();
    if(this.state.hasOwnProperty("W")){
      this.state.W.value = 1;
    }
    if(this.state.Tipo && 
      this.state.Tipo.value === ''){
      this.state.Tipo.value = "1";
    }
    if(this.state.Metodo && 
        this.state.Metodo.value === ''){
        this.state.Metodo.value = "1";
    }
    if(this.state.Norm && 
        this.state.Norm.value === ''){
        this.state.Norm.value = "1";
    }
    const keys = Object.keys(this.state);
    const valid = keys.reduce((memo, n) => {
      if (!memo) return memo;
      if (!this.state[n].value) memo = false;
      return memo;
    }, true);

    if (!valid) keys.map(n => this.setState(state => { 
      if (!state[n].value) {
        state[n].valid = false;
      }
      return state 
    }));
    else {
      this.props.parentCallback(this.state);
    }
  }

  render() {
    return (
      <form noValidate>
        <h2>Parámetros</h2>
        <ColoredLine color={"#5464d4"} />
        <fieldset>
          { this.props.fields.map(n =>
            <div key={n.id} className='form-row'>
              <label htmlFor={n.id}>{name(n.label)}</label> 
              <ControlledInput
                options={n}
                input={this.state[n.id].value}
                valid={this.state[n.id].valid}
                onBlur={this._onBlur}
                onClick={this._resetValidation}
                onChangeComplete={this._onChangeComplete}
              />
            </div>)
          }
        </fieldset>
        <div className='submit-row'>
          <input type='submit' value={this.props.submitText} onClick={this._submit} className='form-submit' />
        </div>
      </form>
    );
  }
}
