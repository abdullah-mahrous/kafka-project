/* import { useNavigate } from "react-router-dom"; */

export const UseCheckLogin = () => {
  const user = localStorage.getItem("name");
  const islogin = localStorage.getItem("isLogin");

  if (user && islogin) {
    return true;
  } else {
    return false;
  }
};


/* UseCheckLogin uses the useNavigate hook from the "react-router-dom" library
to check if a user is logged in by retrieving information from the local storage. */

/* The component uses the localStorage API to retrieve values stored in the browser's local storage.
  It fetches the values associated with the keys "name" and "isLogin" and stores them
  in the user and islogin variables, respectively. */