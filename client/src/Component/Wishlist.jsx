import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Wishlist = () => {
  const [authToken, setAuthToken] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);
console.log(userFavorites,"ddddddssssss")
  

  useEffect(() => {
    const Token = getCookie("accessToken");
    setAuthToken(Token);
    // Define the Git repository URL or any other API endpoint
    const gitRepoUrl = 'http://127.0.0.1:3001/wishlist';

    // Fetch data using Axios
    axios.get(gitRepoUrl,{
          headers: {
            Authorization: ` ${authToken}`,
          }
          })
      .then(response => {
        console.log(response.data);
        // Assuming the response data is an array of favorites
        setUserFavorites(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [authToken]); // Empty dependency array ensures the effect runs only once when the component mounts


  const getCookie = (name) => {
    let cookieArray = document.cookie.split('; ');
    for (let cookie of cookieArray) {
      let [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };


  const Token = getCookie("accessToken");
console.log(authToken);


  return (
    <div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
        <div className="flex flex-wrap justify-center gap-20">
          {userFavorites.map((favorite, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              {/* <img className="rounded-t-lg" src={favorite.image} alt="" /> */}
              <div className="p-4 text-center">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {favorite.product_name}
                </h5>
                {/* <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                  {favorite.description}
                </p> */}
                <p className="text-bold text-gray-700 dark:text-gray-400 mb-4">
                  {favorite.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;