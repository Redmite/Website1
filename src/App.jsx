// Used this for reference https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
// and this https://www.youtube.com/watch?v=UjHT_NKR_gU

// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "Backend/auth";

import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import LoggedInHomePage from "./Pages/LoggedInHomePage";
import MentorInfoPage from "./Pages/MentorInfoPage";
import ErrorPage from "./Pages/ErrorPage";
import ListingCreationPage from "./Pages/ListingCreationPage";
import AccountManagment from "./Pages/AccountManagement.jsx";
import SessionPage from "./Pages/SessionPage.jsx";
import MessagesPage from "Pages/Messages";
import OrdersPage from "Pages/Orders";
import SearchPage from "Pages/Search";

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
      <>
        <Auth />
      </>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/LoggedInHomePage" element={<LoggedInHomePage />} />
        <Route path="/MentorInfoPage" element={<MentorInfoPage />} />
        <Route path="/ListingCreationPage" element={<ListingCreationPage />} />
        <Route path="/AccountManagement" element={<AccountManagment />} />
        <Route path="/SessionPage" element={<SessionPage />} />
        <Route path="/Messages" element={<MessagesPage />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Orders" element={<OrdersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
