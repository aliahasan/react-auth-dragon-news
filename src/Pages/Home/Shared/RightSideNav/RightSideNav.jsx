import {
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import qZone1 from '../../../../assets/qZone1.png';
import qZone2 from '../../../../assets/qZone2.png';
import qZone3 from '../../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl ">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with Google
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a href="" className="p-4 flex items-center border rounded-t-lg">
          <FaFacebook className="text-2xl mr-2"></FaFacebook>
          <p>Facebook</p>
        </a>
        <a href="" className="p-4 flex items-center border-x ">
          <FaInstagram className="text-2xl mr-2"></FaInstagram>
          <p>Instagram</p>
        </a>
        <a href="" className="p-4 flex items-center border rounded-b-lg">
          <FaTwitter className="text-2xl mr-2"></FaTwitter>
          <p>Twitter</p>
        </a>
      </div>

      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl ">Q zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
       
      </div>

    </div>
  );
};

export default RightSideNav;
