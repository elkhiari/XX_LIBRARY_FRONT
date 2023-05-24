import { useContext } from "react";
import BottomNavigation from "./Bottom_Navigation ";
import { AuthContext } from "../contexts/AuthContext";
import Routing from "./Routes";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import Bookjson from "./book.json"; 


function App() {
  // console.log(process.env.REACT_APP_API_URL);
  const {user, login, logout, token, loading, error} = useContext(AuthContext);
  return (
    <div className="w-full min-h-screen dark:bg-gray-900 dark:text-slate-50">
        <Navbar />
        {token && <BottomNavigation />}



    

        <Routing />
      </div>
  );
}

export default App;
