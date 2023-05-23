import { useContext } from "react";
import BottomNavigation from "./Bottom_Navigation ";
import { AuthContext } from "../contexts/AuthContext";
import Routing from "./Routes";
import Navbar from "./Navbar";


function App() {
  // console.log(process.env.REACT_APP_API_URL);
  const {user, login, logout, token, loading, error} = useContext(AuthContext);
  return (
    <div className="w-full h-screen dark:bg-gray-500 dark:text-slate-50">
      <Navbar />
    {token && <BottomNavigation />}
    <Routing />
    </div>
  );
}

export default App;
