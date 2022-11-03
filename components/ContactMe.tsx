import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:simont.codes@gmail.com?subject=${formData.subject}
    &body=Hi, My name is ${formData.name}.${formData.message} (${formData.email})`;
  };
  return (
    <div
      className=" h-screen flex relative flex-col text-center md:text-left md:flex-row
   max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="hidden absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className=" flex flex-col space-y-10">
        <h4 className=" text-4xl font-semibold text-center">
          <span className=" decoration-[#f7ab0a]/50 underline">Lets Talk</span>
        </h4>

        <div>
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">+6478708554</p>
          </div>

          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">simont.codes@gmail.com</p>
          </div>

          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className=" text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">Toronto, ON, Canada</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  max-w-[350px] md:max-w-fit flex flex-col space-y-2  mx-auto"
        >
          <div className=" flex-col md:flex-row flex md:space-x-2">
            <input
              {...register("name")}
              className="contactInput mb-2 md:mb-0"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput "
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
