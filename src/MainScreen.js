import React from 'react'; 
import profile from'./ProfileIcon.png'
import ThreeBars from './ThreeBars.svg'
import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'



const MainScreen = (props) => {
    const options = [
      'Most Recent', 'Low - High', 'High - Low'
    ]
    return(
        <div className="App">
      <header className="App-header">
        <a
          className="Greeting"
        >
          Hi Austin!
        </a>
        <button><img src={ThreeBars} class="Three-Bars" alt="" onClick={() => (console.log("test"))}/></button>
        <button><img src={profile} class="Profile-icon" alt="" onClick={() => (console.log("yo"))}/></button>
        <a 
          className="Enjoy" 
        >
          Enjoy your digital receipts
        </a>
      </header>
    <div className="display-flex">
    <div className="Card">
      <a className="ReceiptsTitle">
        Receipts
      </a>
      <Dropdown className="OrderDropDown"options={options} placeholder={options[0]} />
    </div>
    </div>
    </div>

    );

}

export default MainScreen;