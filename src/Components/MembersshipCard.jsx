import React from 'react';

const MembersshipCard = () => {
  return (
    <div className="flex justify-center mt-40">
      <div className="rounded-lg shadow-lg px-6 py-8 w-[440px]  bg-white">
        <h1 className="text-2xl text-blue-800 font-bold mb-6 text-center">Membership Card Form</h1>
        <form>
          <div className="mb-6 flex items-center">
            <div className="w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                Name
              </label>
            </div>
            <div className="w-2/3">
              <input
                id="name"
                type="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter Last Name"
                name="name"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <div className="w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                Email
              </label>
            </div>
            <div className="w-2/3">
              <input
                id="email"
                type="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter Email Address"
                name="email"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <div className="w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="contact">
                Contact
              </label>
            </div>
            <div className="w-2/3">
              <input
                id="contact"
                type="text"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[220px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter Phone"
                name="contact"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <div className="w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Gender
              </label>
            </div>
            <div className="w-2/3 flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" value="Male" className="mr-2" />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Female" className="mr-2" />
                <span className="text-gray-700">Female</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Other" className="mr-2" />
                <span className="text-gray-700">Other</span>
              </label>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <div className="w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="passport">
                Upload Passport
              </label>
            </div>
            <div className="w-2/3">
              <input
                id="passport"
                type="file"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="passport"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="reset"
              className="shadow bg-gray-300 hover:bg-gray-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded"
            >
              Reset
            </button>
            <button
              type="submit"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembersshipCard;
