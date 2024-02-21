import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">REACT AUTHENTICATION</h1>
        </Link>
        <ul className="flex gap-4 font-bold">
          <Link to="/home">
            <li>HOME</li>
          </Link>
          <Link to="/signin">
            <li>SIGN IN</li>
          </Link>
          <Link to="/signup">
            <li>SIGN UP</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
