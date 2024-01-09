import { useParams } from 'react-router-dom';
import Header from "../Home/Shared/Header/Header";
import Navbar from '../Home/Shared/Navbar/Navbar';
import RightSideNav from "../Home/Shared/RightSideNav/RightSideNav";

const NewsPage = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <h1>News Detail</h1>
        </div>
    );
};

export default NewsPage;