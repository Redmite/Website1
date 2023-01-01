// Used this for reference https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
// and this https://www.youtube.com/watch?v=UjHT_NKR_gU

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import LoggedInHomePage from "./Pages/LoggedInHomePage";

function App() {
  return(<Router>
    <nav>
    <Link to="./Pages/LoggedInHomePage.jsx">Home</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignInPage" element={<SignInPage />} />
      <Route path="/SignUpPage" element={<SignUpPage />} />
      <Route path="*" element={<ErrorPage/>}/>
      <Route path="/LoggedInHomePage" element={<LoggedInHomePage/>}/>
    </Routes>
  </Router>
  );
  
};
  
export default App;