import React from "react";

const registerPage: React.FC = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-3 flex flex-col">
        <h2 className="font-medium text-xl md:mt-36 md:mb-6">
          <span className="text-6xl ">Sign Up </span><br />& Track Medical Records and Book Appointments
        </h2>
        <form action="">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="block w-3/5 px-4 py-2 text-lg border-b-2 border-gray-300 focus:outline-none focus:border-primary peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute font-bold left-1 top-2 text-gray-500 transition-all duration-300 transform peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Name
            </label>
          </div>
          <div className="relative my-8">
            <input
              type="email"
              id="email"
              className="block w-3/5 px-4 py-2 text-lg border-b-2 border-gray-300 focus:outline-none focus:border-primary peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute font-bold left-1 top-2 text-gray-500 transition-all duration-300 transform peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="block w-3/5 px-4 py-2 text-lg border-b-2 border-gray-300 focus:outline-none focus:border-primary peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute font-bold left-1 top-2 text-gray-500 transition-all duration-300 transform peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              password
            </label>
          </div>
       
        </form>
      </div>
    </div>
  );
};

export default registerPage;
