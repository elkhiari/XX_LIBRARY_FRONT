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
        <div className="fixed flex pt-4 z-50 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 place-content-center place-items-center duration-150 ">
          {error && <Alert error={error} setError={setError} />}
          {/* {loading && <Alert type="info" message="Loading..." />} */}
        </div>
        <Routing />
      </div>
  );
}

export default App;
