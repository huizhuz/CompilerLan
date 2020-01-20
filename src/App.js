import React from 'react';
import Styles from './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TextEditor from './TextEditor/TextEditor';
import Console from './Console/Console'

const App = () => (
  <div className={Styles.App}>
    <Header></Header>
    <div className={Styles.Compiler}>
      <TextEditor></TextEditor>
      <Console></Console>
    </div>
    <Footer></Footer>
  </div>
)

export default App;
