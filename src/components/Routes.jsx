import React, { useContext } from 'react'
import { Route ,Routes} from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function Routing() {
  const {token} = useContext(AuthContext)

  return (
    <div>
        <Routes>
            <Route path="/register" element={!token?"register page":<Navigate to="/"/>} />
            <Route path="/login" element={!token?"login page":<Navigate to="/"/>} />
            <Route path="/" element={"Home page"} />

            <Route path="/Profile" element={token?"Profile page":<Navigate to="/login"/>} />
            <Route path="/Dashboard" element={token?"Dashboard page":<Navigate to="/login"/>} />
            <Route path="/Settings" element={token?"Settings page":<Navigate to="/login"/>} />
            <Route path="/Book/:id" element={token?"One book page":<Navigate to="/login"/>} />
            <Route path="/Add_books" element={token?"Add book page":<Navigate to="/login"/>} />
            <Route path="/search" element={"search page"} />
            <Route path="/categories" element={"categories page"} />
            <Route path="/categories/:id" element={"categories books page"} />
            <Route path="*" element={"Error 404"} />
    </Routes>
    </div>
  )
}

export default Routing