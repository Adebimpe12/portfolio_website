import './App.css';
import ProfilePic from './images/unnamed.jpg';
import DemoComponents from './components/DemoComponent';
import TitleComponent from './components/TitleComponent';
import ClickEventHandler from './components/ClickEventHandler';
import UserLogin from './components/UserLogin';
import EmployeeList from './components/EmployeeList';
import RegularStyleSheet from './components/RegularStyleSheet';
import Inline from './components/Inline';
import "./components/appStyles.css";
import moduleStyles from "./components/myAppStyles.module.css";
import FormInput from './components/FormInput';
import FormInput2 from './components/FormInput2';

function App() {
  return (
    <div className='App'>
        {/* <DemoComponents name='Tolu' country='Brasil'/>
        <DemoComponents name='Sade' country='US'/>
        <DemoComponents name='Abe' country='Nig'/>
        <DemoComponents name='Ak' country='UK'>
          <p>He is a React developer and is 27yrs old</p>
          <img src={ProfilePic} alt="" width="150"/>
        </DemoComponents> */}
        {/* <TitleComponent/> */}
        {/* <ClickEventHandler/> */}
        {/* <UserLogin/> */}
        {/* <EmployeeList/> */}
        {/* <RegularStyleSheet primary={false}/> */}
      {/* <Inline />
      <h3 className="error">Error!</h3>
      <h3 className={moduleStyles.success}>Success</h3> */}
      {/* <FormInput/> */}
      <FormInput2/>
    </div>
  );
}

export default App;





