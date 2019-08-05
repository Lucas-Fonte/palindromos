import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
          <h1>Learn Yogaa</h1>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick/"/>
              <input type="hidden" name="hosted_button_id" value="N33Y38VK79FMU"/>
              <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1"/>
            </form>


      </header>
    </div>
  );
}

export default App;
