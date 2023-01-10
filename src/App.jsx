// Used this for reference https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
// and this https://www.youtube.com/watch?v=UjHT_NKR_gU

// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import LoggedInHomePage from "./Pages/LoggedInHomePage";
import MentorInfoPage from "./Pages/MentorInfoPage";
import ErrorPage from "./Pages/ErrorPage";
import SearchLoggedOutPage from "./Pages/SearchLoggedOutPage";
import ListingCreationPage from "./Pages/ListingCreationPage";

function App() {
  return (
    <Router>
      <nav>
        {/*
    <Link to="./">Home </Link>   
    <Link to="./LoggedInHomePage">  LoggedInHomePage  </Link>
    <Link to="./MentorInfoPage">  MentorInfoPage_Test_Link</Link>
    <Link to="./SearchLoggedOutPage">SearchLoggedOutPage</Link>
    <Link to="./ListingCreationPage">ListingCreationPage</Link>
    */}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/LoggedInHomePage" element={<LoggedInHomePage />} />
        <Route path="/MentorInfoPage" element={<MentorInfoPage />} />
        <Route path="/ListingCreationPage" element={<ListingCreationPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/SearchLoggedOutPage"
          element={<SearchLoggedOutPage category="null" />}
        />
        <Route
          path="/SearchLoggedOutPage/commonCore"
          element={<SearchLoggedOutPage category="commonCore" />}
        />
        <Route
          path="/SearchLoggedOutPage/websiteDesign"
          element={<SearchLoggedOutPage category="websiteDesign" />}
        />
        <Route
          path="/SearchLoggedOutPage/language"
          element={<SearchLoggedOutPage category="language" />}
        />
        <Route
          path="/SearchLoggedOutPage/onlineBusiness"
          element={<SearchLoggedOutPage category="onlineBusiness" />}
        />
        <Route
          path="/SearchLoggedOutPage/designing"
          element={<SearchLoggedOutPage category="designing" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
