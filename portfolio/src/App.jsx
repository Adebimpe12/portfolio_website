import './App.css'
import DemoComponents from './components/DemoComponent';
import TitleComponent from './components/TitleComponent';
import ClickEventHandler from './components/ClickEventHandler';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div className='App'>
        {/*<DemoComponents name='Tolu' country='Brasil'/>
        <DemoComponents name='Sade' country='US'/>
        <DemoComponents name='Abe' country='Nig'/>
        <DemoComponents name='Ak' country='UK'>
          <p>He is a React developer and is 27yrs old</p>
          <img src="./images/unnamed.jpg" alt="" />
        </DemoComponents> */}
        {/* <TitleComponent/> */}
        {/* <ClickEventHandler/> */}
        <UserLogin/>
    </div>
  );
}

export default App;





