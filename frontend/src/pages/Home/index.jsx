import { ArrowRightCircleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline/index.js";
import { useState } from "react";

export default function Home() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();


  function continueMobile() {
    setIsLoading(true);

    fetch(`/api/complainants/${mobileNumber}`)
      .then(res => res.json())
      .then(res => {
        setMessage(res.message);

      })
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
            <div className="join join-vertical md:join-horizontal flex py-2">
              <input type="tel" placeholder="Enter phone number"
                     className="input input-bordered input-primary join-item flex-1"
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
            <>
              <div className="form flex py-2">
                <input type="text" placeholder="What is your name?"
                       className="input input-bordered input-primary join-item flex-1"
                />
              </div>
              <div className="form flex py-2">
                <input type="email" placeholder="Enter your email address"
                       className="input input-bordered input-primary join-item flex-1"
                />
              </div>
              <div className="form flex py-2">
                <input type="email" placeholder="Subject"
                       className="input input-bordered input-primary join-item flex-1"
                />
              </div>
              <div className="form flex py-2">
              <textarea className="textarea textarea-primary flex-1" placeholder="Enter Description"
                        rows={5}
              ></textarea>
              </div>
              <button className="btn btn-primary join-item w-full mt-2"
                      onClick={continueMobile}
                      disabled={isLoading}
              >
                Submit Issue
                <PaperAirplaneIcon className="h-6 w-6" />
              </button>
            </>
            <div className="mb-64"></div>

          </div>
        </div>
      </div>
    </>
  );

}