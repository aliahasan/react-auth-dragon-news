import moment from 'moment';
import logo from '../../../../assets/logo.png';
const Header = () => {
    return (
        <div className='text-center'>
          <div className='flex items-center justify-center'>
          <img src={logo} alt="" />
          </div>
           <p>Journalism Without Fear or Favour</p>
           <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;