// Used this for reference https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
// and this https://www.youtube.com/watch?v=UjHT_NKR_gU

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import LoggedInHomePage from "./Pages/LoggedInHomePage";
import MentorInfoPage from "./Pages/MentorInfoPage";
import ErrorPage from "./Pages/ErrorPage";
import SearchLoggedOutPage from "./Pages/SearchLoggedOutPage";

function App() {
  return(<Router>
    <nav>
    <Link to="./">Home </Link>
    <Link to="./LoggedInHomePage">  LoggedInHomePage  </Link>
    <Link to="./MentorInfoPage">  MentorInfoPage_Test_Link</Link>
    <Link to="./SearchLoggedOutPage">SearchLoggedOutPage</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/SignInPage" element={<SignInPage/>}/>
      <Route path="/SignUpPage" element={<SignUpPage/>}/>
      <Route path="/LoggedInHomePage" element={<LoggedInHomePage/>}/>
      <Route path="/MentorInfoPage" element={<MentorInfoPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      <Route path="/SearchLoggedOutPage" element={<SearchLoggedOutPage/>}/>
    </Routes>
  </Router>
  );
  
};
  
export default App;