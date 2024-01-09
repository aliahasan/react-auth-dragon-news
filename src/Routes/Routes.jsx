import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NewsPage from "../Pages/NewsPage/NewsPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/news.json')
            },
            {
                path : '/news/:id',
                element : <PrivateRoute>
                    <NewsPage></NewsPage>
                </PrivateRoute>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path: '/register',
                element : <Register></Register>,
            
            }
        ]
    }
])
export default routes;