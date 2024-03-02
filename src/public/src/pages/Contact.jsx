import React from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import { initEmail, sendForm } from "../utils/app.utils";
import { validateContactEmail } from "../api/requests";
import ErrorMessage from "../components/ErrorMessage";

const Contact = () => {
  const form = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  initEmail();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus(null);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [status]);

  const formOnSumbit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const validate = await validateContactEmail(
        email.current.value,
        subject.current.value,
        message.current.value
      );
      if (validate) {
        setError(validate.msg);
        setLoading(false);
        return;
      }
      const res = await sendForm(form.current);
      setStatus(res.message);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError("Error sending email, please try again later");
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-10">Contact</h2>
      {error ? (
        <ErrorMessage message={error} />
      ) : status ? (
        <div className="bg-green-300 w-fit shadow-md flex items-center text-black text-sm">
          <img src="/assets/svg/tick.svg" alt="" width={35} />
          <p className="pr-2">{status}</p>
        </div>
      ) : null}
      <form className="grid gap-10 bg-white p-10 shadow-md mt-2" ref={form}>
        <TextField
          placeholderTextField="youremail@email.com"
          legendTextField="Email"
          nameTextField="from_email"
          refTextField={email}
        />
        <TextField
          placeholderTextField="subject"
          legendTextField="Subject"
          nameTextField="subject"
          refTextField={subject}
        />
        <textarea placeholder="Write your message here..." rows={5} name="message" ref={message} />

        {loading ? (
          <span>
            <img src="/assets/svg/spinner.svg" alt="" width={30} className="animate-spin" />
          </span>
        ) : (
          <Button
            typeButton="submit"
            textButton="Send"
            styles="w-fit py-2 px-6"
            clickEvent={formOnSumbit}
          />
        )}
      </form>
    </div>
  );
};

export default Contact;
