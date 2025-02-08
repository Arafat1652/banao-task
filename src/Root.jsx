import { Outlet } from "react-router-dom";
import NavScrollExample from "./components/Navbar";

const Root = () => {
    return (
        <div>
            <NavScrollExample/>
            <Outlet/>
        </div>
    );
};

export default Root;