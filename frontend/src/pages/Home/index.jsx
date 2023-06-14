import {
  ArrowRightCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline/index.js";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import isMobilePhone from "validator/es/lib/isMobilePhone";

export default function Home() {
  const [mobileNumber, setMobileNumber] = useState({ value: "", error: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showRestOfTheForm, setShowRestOfTheForm] = useState(false);
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [subject, setSubject] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });

  function continueMobile() {
    if (!isMobilePhone(mobileNumber.value, "en-KE")) {
      setMobileNumber({ ...mobileNumber, error: "Invalid mobile number" });
      return;
    }
    setMobileNumber({ ...mobileNumber, error: "" });
    setIsLoading(true);

    fetch(`/api/complainants/${mobileNumber.value}`)
      .then(res => res.json())
      .then(res => {
        // initialize form with data from server
        setName({ ...name, value: res.complainant.name });
        setEmail({ ...email, value: res.complainant.email });
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
        setShowRestOfTheForm(true);
      });
  }

  function handleValidationErrors(errors) {
    if (errors.hasOwnProperty("phone_number")) {
      setMobileNumber({ ...mobileNumber, error: errors.phone_number });
    }
    if (errors.hasOwnProperty("name")) {
      setName({ ...name, error: errors.name });
    }

    if (errors.hasOwnProperty("email")) {
      setEmail({ ...email, error: errors.email });
    }
    if (errors.hasOwnProperty("subject")) {
      setSubject({ ...subject, error: errors.subject });
    }
    if (errors.hasOwnProperty("description")) {
      setDescription({ ...subject, error: errors.description });
    }
  }

  function resetState() {
    setMobileNumber({ value: "", error: "" });
    setName({ value: "", error: "" });
    setEmail({ value: "", error: "" });
    setSubject({ value: "", error: "" });
    setDescription({ value: "", error: "" });
  }

  async function handleSubmitIssue() {
    try {
      const response = await fetch("/api/issues", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          phone_number: mobileNumber.value,
          email: email.value,
          subject: subject.value,
          description: description.value,
          category_id: 5,
        }),
      });
      let data = await response.json();

      if (response.status === 422) {
        const { message, errors } = data;
        console.log(message);
        handleValidationErrors(errors);
        return;
      }

      if (response.status == 201) {
        alert("submitted successfully");
        resetState();
      }
    } catch (error) {
      console.log(error, "error");
    }
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
                    mobileNumber.error ? "input-error" : "input-primary"
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
              {mobileNumber.error && (
                <span className="text-sm text-error flex mt-1 ml-1">
                  {mobileNumber.error}
                </span>
              )}
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
              <div className="py-2">
                <input
                  type="text"
                  placeholder="What is your name?"
                  className={`input input-bordered ${
                    name.error ? "input-error" : "input-primary"
                  } w-full`}
                  value={name.value}
                  onChange={event =>
                    setName({ ...name, value: event.target.value })
                  }
                />
                {name.error && (
                  <p className="text-sm text-error text-start px-2">
                    {name.error}
                  </p>
                )}
              </div>
              <div className="py-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`input input-bordered ${
                    email.error ? "input-error" : "input-primary"
                  } w-full`}
                  value={email.value}
                  onChange={e => setEmail({ ...email, value: e.target.value })}
                />
                {email.error && (
                  <p className="text-sm text-error text-start px-2">
                    {email.error}
                  </p>
                )}
              </div>
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className={`input input-bordered ${
                    subject.error ? "input-error" : "input-primary"
                  } w-full`}
                  value={subject.value}
                  onChange={e =>
                    setSubject({ ...subject, value: e.target.value })
                  }
                />
                {subject.error && (
                  <p className="text-sm text-error text-start px-2">
                    {subject.error}
                  </p>
                )}
              </div>
              <div className="py-2">
                <textarea
                  className={`textarea ${
                    description.error ? "textarea-error" : "textarea-primary"
                  } w-full`}
                  placeholder="Enter Description"
                  value={description.value}
                  rows={5}
                  onChange={e =>
                    setDescription({ ...description, value: e.target.value })
                  }
                ></textarea>
                {description.error && (
                  <p className="text-sm text-error text-start px-2">
                    {description.error}
                  </p>
                )}
              </div>
              <button
                className="btn btn-primary join-item w-full mt-2"
                onClick={handleSubmitIssue}
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
