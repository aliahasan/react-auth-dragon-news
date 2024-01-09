import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto border border-red-800 font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;