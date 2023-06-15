import { useState } from "react";
import { Input } from "../../components/Input.jsx";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout.jsx";

export default function Auth() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <AuthLayout>
      <h1 className="w-full text-4xl text-center">Login to your account</h1>
      <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
        <div className="">
          <Input
            label="Email address"
            id="email"
            type="email"
            placeholder="Enter your email"
            error=""
            value={email}
            onChange={handleChange}
          />
        </div>
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={handleChange}
        />

        <div className="relative">
          <a
            className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease"
          >
            Submit
          </a>
        </div>
        <p className="text-sm text-center text-gray-400">
          Don&#x27;t have an account yet?
          <Link
            to="/auth/register"
            className="font-semibold text-primary focus:text-primary focus:outline-none focus:underline"
          >
            &nbsp;Register
          </Link>
          .
        </p>
      </div>
    </AuthLayout>
  );
}
