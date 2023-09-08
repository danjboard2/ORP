import React, { useState } from "react";
import Image from "next/image";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We will be in touch soon.</div>
      </>
    );
  }

  return (
    <>
    <section className="h-[100vh] max-h-[1200px] flex w-full justify-center items-center flex-row max-w-[2000px] m-auto">
        <div className="flex w-1/2 flex-col max-w-[600px] justify-center self-center">
            <h1 className="text-6xl mb-10 text-[#3AAA01] font-bold uppercase">Get in touch</h1>
            <p className="text-2xl mb-10">If there anything we can help you with then please drop us a line and we will get right back to you.</p>
                <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                >
                <div className="pt-0 mb-3">
                    <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-[#F9F9F9] border-2 rounded-lg border-[#777777] outline-none"
                    required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-[#F9F9F9] border-2 rounded-lg border-[#777777] outline-none"
                    required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <input
                    placeholder="Phone"
                    name="phone"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-[#F9F9F9] border-2 rounded-lg border-[#777777] outline-none"
                    required
                    />
                </div>
                <div className="pt-0 mb-3">
                    <textarea
                    placeholder="Message"
                    name="message"
                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-[#F9F9F9] border-2  rounded-lg  border-[#777777] outline-none"
                    required
                    />
                </div>
                <div className="flex pt-0 mb-3 justify-end items-end">
                    <button
                   className="flex w-fit text-2xl rounded-full border-4 border-[#3AAA01] px-10 py-2 font-bold text-[#3AAA01] mt-6 hover:bg-[#3AAA01] hover:text-white"
                    type="submit"
                    >
                    Send a message
                    </button>
                </div>
                </form>
       </div>
       <div className="w-1/2 flex flex-col max-w-[600px]  items-end self-center">
        <Image src="/media/images/contact-img.png" alt="Get in touch" width={500} height={500}/>
       </div>
    </section>
    </>
  );
};

export default ContactUs;