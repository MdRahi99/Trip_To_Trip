import React from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "@firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {

  const navigate = useNavigate();
  const { providerLogin, signIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then( res => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate('/');
    })
    .catch(error => console.error(error))
  };

  return (
    <div className="bg-slate-200 my-12 lg:p-10 p-4 mx-4 lg:w-1/2 lg:mx-auto">
      <h1 className="text-3xl font-serif text-center">Log In</h1>
      <div className="flex-grow border-t border-slate-600 mt-3 mb-9 w-2/4 mx-auto"></div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto shadow-2xl shadow-slate-500 p-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="enter your email"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            name="password"
            placeholder="enter your password"
            required={true}
          />
        </div>
        
        <Button type="submit">Login</Button>
      </form>

      <div className="flex lg:w-64 w-40 mx-auto py-5 my-3 items-center">
        <div className="flex-grow border-t border-slate-900"></div>
        <span className="flex-shrink mx-4 text-slate-900">OR</span>
        <div className="flex-grow border-t border-slate-900"></div>
      </div>

      <div className="flex justify-center p-2 bg-white lg:w-1/2 mx-auto rounded">
        <button
          className="flex gap-2 items-center"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <h3 className="text-md">Sign in with Google</h3>
        </button>
      </div>

      <div className="flex gap-2 mt-6 justify-center items-center">
        <h3>Have not any Account?</h3>
        <Link className="text-sm font-bold hover:text-slate-500" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
