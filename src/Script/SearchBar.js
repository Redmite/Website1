// code I plan on using https:https://www.youtube.com/watch?v=mZvKPtH9Fzo



// orginally I planned on using all the code below but it gave some errors that I couldn't find any answers to, so once we get backend up
// and running I will try to another method from the link above. I will be leaving this code here in case I need a back-up
// plus the code from the guy above seems to work better with files and such

// this code was originally from https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js

// import React, {useState} from 'react';

// const SearchBar = () => {

//  const [searchInput, setSearchInput] = useState("");

//  const countries = [

//   { name: "Belgium", continent: "Europe" },
//   { name: "India", continent: "Asia" },
//   { name: "Bolivia", continent: "South America" },
//   { name: "Ghana", continent: "Africa" },
//   { name: "Japan", continent: "Asia" },
//   { name: "Canada", continent: "North America" },
//   { name: "New Zealand", continent: "Australasia" },
//   { name: "Italy", continent: "Europe" },
//   { name: "South Africa", continent: "Africa" },
//   { name: "China", continent: "Asia" },
//   { name: "Paraguay", continent: "South America" },
//   { name: "Usa", continent: "North America" },
//   { name: "France", continent: "Europe" },
//   { name: "Botswana", continent: "Africa" },
//   { name: "Spain", continent: "Europe" },
//   { name: "Senegal", continent: "Africa" },
//   { name: "Brazil", continent: "South America" },
//   { name: "Denmark", continent: "Europe" },
//   { name: "Mexico", continent: "South America" },
//   { name: "Australia", continent: "Australasia" },
//   { name: "Tanzania", continent: "Africa" },
//   { name: "Bangladesh", continent: "Asia" },
//   { name: "Portugal", continent: "Europe" },
//   { name: "Pakistan", continent:"Asia" },

// ];

// const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };

// if (searchInput.length > 0) {
//     countries.filter((country) => {
//     return country.name.match(searchInput);
// });
// }

// return (<div>

// <input
//    type="search"
//    placeholder="Search here"
//    onChange={handleChange}
//    value={searchInput} />

// <table>
//   <tr>
//     <th>Country</th>
//     <th>Continent</th>
//   </tr>

// {countries.map((country, index) => {
// return (
// <div key={index}>
//   <tr>
//     <td>{country.name}</td>
//     <td>{country.continent}</td>
//   </tr>
// </div>
// );
// })}
// </table>

// </div>)


// };

// export default SearchBar;