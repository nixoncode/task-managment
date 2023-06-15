import { useState } from "react";
import { Input } from "../../components/Input.jsx";

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
    <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0">
      <div
        className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row mt-20"
      >
        <div className="flex flex-col justify-center items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
            >
              <h1 className="w-full text-4xl text-center">
                Login to your account
              </h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
