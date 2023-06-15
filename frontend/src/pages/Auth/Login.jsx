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
        <Input
          label="Email address"
          id="email"
          type="email"
          placeholder="Enter your email"
          error=""
          value={email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={handleChange}
        />

        <a className="btn btn-primary w-full text-xl">Log in</a>
        <p className="text-sm text-center text-gray-400">
          Don't have an account yet?
          <Link
            to="/auth/register"
            className="font-semibold text-primary focus:text-primary focus:outline-none focus:underline"
          >
            &nbsp;Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
