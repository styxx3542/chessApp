import React, { useState, useEffect } from "react";
import {
    Routes,
    Route,
    Navigate,
    useNavigate
} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Ladder from "./pages/Ladder";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";
import Games from "./pages/Games";
import Admin from "./pages/Admin";
function App() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const handleLogout = () => {
        setUser(null);
        localStorage.clear();
        navigate('/login')
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    return (
        <div className="App">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            user ? (
                                <Navigate to="/dashboard" />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            user ? (
                                <Navigate to="/dashboard" />
                            ) : (
                                <Login setUser={setUser} />
                            )
                        }
                    />
                    <Route path="/signup" element={<Signup />} />

                    <Route
                        path="/dashboard"
                        element={
                            <Layout handleLogout={handleLogout}>
                                <Dashboard user={user} />
                            </Layout>
                        }
                    />

                    <Route
                        path="/ladder"
                        element={
                            <Layout  handleLogout={handleLogout}>
                                <Ladder />
                            </Layout>
                        }
                    />
                    <Route
                        path="/games"
                        element={
                            <Layout handleLogout={handleLogout}>
                                <Games />
                            </Layout>
                        }
                    />
                    <Route
                        path="/profile/:id"
                        element={
                            <Layout handleLogout={handleLogout}>
                                <Profile />
                            </Layout>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            user?
                            (
                              <Navigate to={`/profile/${user.id}`} />
                          ) : (
                              <Navigate to="/login" />
                          )
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <Layout handleLogout={handleLogout}>
                                <Admin user = {user}/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/feedback"
                        element={
                            <Layout handleLogout={handleLogout}>
                                <Feedback user ={user}/>
                            </Layout>
                        }
                    />
                </Routes>
        </div>
    );
}

export default App;
