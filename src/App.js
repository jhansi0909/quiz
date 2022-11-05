import logo from './logo.svg';
import './App.css';
// import Container from './component/Container'
// import Button from './component/Button';
// import Widthone from './component/Widthone';
// import Password from './component/Password';
// import Information from './component/Information';
// import Image  from './component/Image';
// import Example from './component/Example';
// import Contact from './component/Contact';
// import Card from './component/Card';
// import Buttonclick from './component/Buttonclick';
import {Link,Routes,Route} from "react-router-dom"
import Card from "./component/Card"
import Newfile from "./component/Newfile"
import Specific from "./component/Specific"
import Quiz from "./component/Quiz"
import Array from "./component/Array"
import Stateupdate from './component/Stateupdate';
import Startquiz from './component/Startquiz'
import Finalquizpage from './component/Finalquizpage';
import Loginpage from './component/Loginpage';
import Home from './component/Home';
import Logout from './component/Logout';
// import questions from "./questions.json"
// import Props from './component/Props';
function App() {
  return (
    <div>
  <Routes>
    <Route path='/' element={<Loginpage></Loginpage>} ></Route>
  <Route path="/Card" element={<Card></Card>}></Route>
  <Route path="/Newfile" element={<Newfile></Newfile>}></Route>
  <Route path="/Specific" element={<Specific></Specific>}></Route>
  <Route path="/Quiz" element={<Quiz></Quiz>}></Route>
  <Route path="/Array" element={<Array></Array>}></Route>
  <Route path="/Loginpage" element={<Loginpage></Loginpage>}></Route>
  <Route path="/Stateupdate" element={<Stateupdate></Stateupdate>}></Route>
  <Route path="/Startquiz" element={<Startquiz></Startquiz>}></Route>
  <Route path="/Finalquizpage" element={<Finalquizpage></Finalquizpage>}></Route> 
  <Route path="/Home" element={<Home></Home>}></Route> 
  {/* <Route path="/Logout" element={<Logout></Logout>}></Route> */}
</Routes>
{/* <ul>
 <li><Link to="/Home">Home</Link></li>
</ul> */}

{/* <Props name="Jhansi" age="dfgh">
  <h1>hellooooo</h1>
</Props>
<Props name="Lakshmi" age="vhbjn">
  <p>gfffhisjkskahuiwttwgf</p>
</Props>
<Props name="Lakshmi" age="dh">
  <button>click me</button>
</Props> */}

</div>
  );
}
export default App;

