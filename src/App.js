import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        Boboテスト 
        <br/>
        遅延通知メール登録
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Form-container">
          <form action="">
            出発駅
            <input type="text" name="出発駅" id=""/>
            <br/>
            到着駅
            <input type="text" name="到着駅" id="" />
            <br />
            メール
            <input type="text" name="" id="" />
            <br />
            <div class="Submit-button-container"><input type="submit" value="通知の受け取りを登録！" /></div>
            
          </form>
        </div>


      </header>
    </div>



    

  );
}

export default App;
