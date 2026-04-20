import { useState } from "react";
import { useAppContext } from "../context/AppProvider";

const Login = () => {
  const [state, setState] = useState("login");
  const { setShowUserLogin, setUser } = useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    setUser(formData);
    setShowUserLogin(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 

  return (
    <div onClick={()=> setShowUserLogin(false)} className="fixed inset-0 w-200px z-30 flex items-center justify-center text-sm text-gray-600 bg-black/50">
      <form
        onClick={(e)=>e.stopPropagation()}
        onSubmit={handleSubmit}
        className="text-center bg-white border border-gray-800 rounded-2xl px-8 w-[30%] "
      >
        <h1 className="text-black text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
            
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-white placeholder:text-black-400 border-none outline-none "
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
          
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none "
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className=" flex items-center mt-4 w-full bg-white-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2 ">
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left">
          <button className="text-sm text-primary hover:underline">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-primary hover:bg-primary-dull transition "
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-primary hover:underline ml-1">
            click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
