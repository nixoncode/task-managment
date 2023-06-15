import { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout.jsx";
import { Input } from "../../components/Input.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const { name, email, phone, password } = credentials;

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  async function handleSubmit() {
    try {
      let result = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await result.json();
      // console.log(result);

      if (result.status === 201) {
        alert("Registration successful");
        return navigate("/auth/login");
      }
      if (result.status === 422) {
        alert(data.message, data.errors);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthLayout>
      <h1 className="w-full text-4xl text-center">Create an account</h1>
      <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
        <Input
          label="Name"
          id="name"
          type="text"
          placeholder="Enter your full name"
          error=""
          value={name}
          onChange={handleChange}
        />

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
          label="Mobile number"
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          error=""
          value={phone}
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
        <button
          onClick={handleSubmit}
          className="btn btn-primary w-full text-xl"
        >
          Create Account
        </button>
        <p className="text-sm text-center text-gray-400">
          Have an account?
          <Link
            to="/auth/login"
            className="font-semibold text-primary focus:text-primary focus:outline-none focus:underline"
          >
            &nbsp;Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
