import { ArrowRightCircleIcon } from "@heroicons/react/24/outline/index.js";
import { useState } from "react";

export default function Home() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();


  function continueMobile() {
    setIsLoading(true);

    fetch(`/api/complainants/${mobileNumber}`)
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }

  return (
    <>
      <div
        className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Need Help? Fill Out a Support Ticket Today!</h1>
            <p className="py-6">Our support team is made up of experienced professionals who are experts in our products
              and services. We
              are
              committed to providing you with the best possible support, so you can be confident that you are in good
              hands.</p>
            <div className="join join-vertical md:join-horizontal">
              <input type="text" placeholder="Enter phone number"
                     className="input input-bordered input-primary w-full max-w-xs join-item"
                     onChange={event => setMobileNumber(event.target.value)}
              />
              <button className="btn btn-primary join-item"
                      onClick={continueMobile}
                      disabled={isLoading}
              >Continue
                {isLoading ?
                  <span className="loading loading-spinner loading-md"></span>
                  :
                  <ArrowRightCircleIcon className="h-6 w-6" />
                }
              </button>
            </div>
            <div className="mb-64"></div>
            {JSON.stringify(message)}
          </div>
        </div>
      </div>
    </>
  );

}