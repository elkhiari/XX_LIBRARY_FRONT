import { useContext } from "react";
import BottomNavigation from "./Navigation/Bottom_Navigation ";
import { AuthContext } from "../contexts/AuthContext";
import Routing from "./utils/Routes";
import Navbar from "./Navigation/Navbar";
import Alert from "./utils/Alert";



function App() {
  // console.log(process.env.REACT_APP_API_URL);
  const {user, login, logout, token, loading, error,setError} = useContext(AuthContext);
  return (
    <div className="w-full min-h-screen dark:bg-gray-900 dark:text-slate-50 ">
        <Navbar />
        {token && <BottomNavigation />}
        {error &&<div className="fixed top-20 w-full z-50 place-content-center place-items-center flex">
           <Alert error={error} setError={setError} />
        </div>}
        <Routing />
      </div>
  );
}

export default App;
