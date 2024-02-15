import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      {" "}
      <h1 className="text-3xl text-center font-bold justify-content-center my-14">
        Sign Up
      </h1>
      <form className=" ml-11 flex flex-col gap-4 mr-11">
        <input
          type="text"
          placeholder="username"
          id="usename"
          className=" ml-10 bg-slate-100 p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email Address"
          id="emailaddress"
          className="ml-10 bg-slate-100 p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="ml-10 bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 uppercase text-white rounded-lg p-3 ml-10 hover:opacity-90 font-semibold">
          Sign Up
        </button>
        <div className="flex gap-2 ml-10">
          <p>Already have an account?</p>
          <Link to="/signin">
            <span className=" text-blue-600 ml-3">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
