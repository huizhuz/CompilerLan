import React, { Component } from 'react';
import Styles from './App.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Resource from './Resource/Resource'
import TextEditor from './TextEditor/TextEditor';
import Console from './Console/Console';

class App extends Component {
  state = {
    input: '',
  }

  writeCode = (e) => {
    this.setState({input: e.target.value});
  }

  
  render() {
    return (
      <div className={Styles.App} >
        <style>
          @import url('https://fonts.googleapis.com/css?family=Comfortaa:700|Quicksand:300,400&display=swap');
        </style>
        <Header></Header>
        <Resource></Resource>
        <div className={Styles.Compiler}>
          <TextEditor code={this.state.input}  
                      writeCode={this.writeCode}
                      ></TextEditor>
          <Console></Console>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}


export default App;
