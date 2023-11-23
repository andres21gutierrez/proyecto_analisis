import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/Navbar";
// import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

export const ProtectedRoute = () => {
    const token = localStorage.getItem('token')

    if (token) {
        return (
            <div className="App">
                <header className="">
                    <NavBar />
                </header>
                <main className=" overflow-hidden min-h-[100vh]">
                    <div className="md:mt-[60px] mt-[65px]">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        )
    } else {
        return <Navigate to="/login" replace />
    }
    // return token ? <Outlet /> : <Navigate to="/login" replace />;
};