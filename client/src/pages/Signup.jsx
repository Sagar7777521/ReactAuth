import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.error) {
        setError(true);
        return;
      }
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      {" "}
      <h1 className="text-3xl text-center font-bold justify-content-center my-14">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" ml-11 flex flex-col gap-4 mr-11"
      >
        <input
          type="text"
          placeholder="username"
          id="username"
          className=" ml-10 bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email Address"
          id="email"
          className="ml-10 bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="ml-10 bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-slate-700 uppercase text-white rounded-lg p-3 ml-10 hover:opacity-90 font-semibold">
          {loading ? "Loading..." : "SIGN UP"}
        </button>
        <div className="flex gap-2 ml-10">
          <p>Already have an account?</p>
          <Link to="/signin">
            <span className=" text-blue-600 ml-3">Sign in</span>
          </Link>
        </div>
      </form>
      <div>
        <p className="text-red-700 mt-5">
          {error && "Username or email address already exist!"}
        </p>
      </div>
    </div>
  );
}
