
import './App.css';
import Footer from './components/Footer/Footer';
import HeaderComponent from './components/Header/HeaderComponent';
import Iframes from './components/Iframes/Iframes';  
import Setting from './Setting';


function App() {
  return (
    <div className="App">   
      <Setting />
       <HeaderComponent />
        
       <Footer /> 
       <div>
       <Iframes />

       </div>
    </div>
  );
}

export default App;
