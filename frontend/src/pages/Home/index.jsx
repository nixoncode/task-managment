import {
  ArrowRightCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline/index.js";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import isMobilePhone from "validator/es/lib/isMobilePhone";

export default function Home() {
  const [mobileNumber, setMobileNumber] = useState({
    value: "",
    hasError: false,
    errorMsg: "Invalid mobile number",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showRestOfTheForm, setShowRestOfTheForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  function continueMobile() {
    if (!isMobilePhone(mobileNumber.value, "en-KE")) {
      setMobileNumber({ ...mobileNumber, hasError: true });
      return;
    }
    setMobileNumber({ ...mobileNumber, hasError: false });
    setIsLoading(true);

    fetch(`/api/complainants/${mobileNumber.value}`)
      .then(res => res.json())
      .then(res => {
        // initialize form with data from server
        setName(res.complainant.name);
        setEmail(res.complainant.email);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setShowRestOfTheForm(true);
      });
  }

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Need Help? Fill Out a Support Ticket Today!
            </h1>
            <p className="py-6">
              Our support team is made up of experienced professionals who are
              experts in our products and services. We are committed to
              providing you with the best possible support, so you can be
              confident that you are in good hands.
            </p>
            <div className="py-2">
              <div className="join join-vertical md:join-horizontal flex">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className={`input input-bordered join-item flex-1 ${
                    mobileNumber.hasError ? "input-error" : "input-primary"
                  }`}
                  onChange={event =>
                    setMobileNumber({
                      ...mobileNumber,
                      value: event.target.value,
                    })
                  }
                />
                {showRestOfTheForm ? null : (
                  <button
                    className="btn btn-primary join-item"
                    onClick={continueMobile}
                    disabled={isLoading}
                  >
                    Continue
                    {isLoading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      <ArrowRightCircleIcon className="h-6 w-6" />
                    )}
                  </button>
                )}
              </div>
              {mobileNumber.hasError ? (
                <span className="text-sm text-error flex mt-1 ml-1">
                  {mobileNumber.errorMsg}
                </span>
              ) : null}
            </div>
            <Transition
              show={showRestOfTheForm}
              enter="transition-opacity duration-5000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="form flex py-2">
                <input
                  type="text"
                  placeholder="What is your name?"
                  className="input input-bordered input-primary join-item flex-1"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </div>
              <div className="form flex py-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered input-primary join-item flex-1"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <div className="form flex py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered input-primary join-item flex-1"
                  value={subject}
                  onChange={event => setSubject(event.target.value)}
                />
              </div>
              <div className="form flex py-2">
                <textarea
                  className="textarea textarea-primary flex-1"
                  placeholder="Enter Description"
                  value={description}
                  rows={5}
                  onChange={event => setDescription(event.target.value)}
                ></textarea>
              </div>
              <button
                className="btn btn-primary join-item w-full mt-2"
                onClick={continueMobile}
                disabled={isLoading}
              >
                Submit Issue
                <PaperAirplaneIcon className="h-6 w-6" />
              </button>
            </Transition>
            <div className="mb-64"></div>
          </div>
        </div>
      </div>
    </>
  );
}
