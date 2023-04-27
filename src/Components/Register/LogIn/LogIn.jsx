import React from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "@firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="my-12">
      <div className="bg-slate-200 lg:w-2/4 lg:mx-auto p-8 mx-8 lg:p-20">
        <h1 className="text-3xl font-serif text-center">Log In</h1>
        <div class="flex-grow border-t border-slate-600 mt-3 mb-9 w-2/4 mx-auto"></div>

        <form className="flex flex-col gap-4 max-w-md mx-auto shadow-2xl shadow-slate-500 p-4">
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

        <div class="flex w-64 mx-auto py-5 my-3 items-center">
          <div class="flex-grow border-t border-slate-900"></div>
          <span class="flex-shrink mx-4 text-slate-900">OR</span>
          <div class="flex-grow border-t border-slate-900"></div>
        </div>

        <div className="flex justify-center p-2 bg-white lg:w-1/3 mx-auto rounded">
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
    </div>
  );
};

export default LogIn;
