import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AddAddress = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [country, setcountry] = useState("");
  const [phone, setphone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formdata = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      street: street,
      city: city,
      state: state,
      zipCode: zipcode,
      country: country,
      phone: phone,
    };
    console.log("Address submitted:", formdata);
    setfirstname("");
    setlastname("");
    setemail("");
    setstreet("");
    setcity("");
    setstate("");
    setzipcode("");
    setcountry("");
    setphone("");
    toast.success("Address saved successfully!");
  };

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-6xl mx-auto">
      {/* Left Side: Address Form */}
      <div className="flex-1 bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 text-center md:text-left">
          Address Details
        </h2>
        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Street</label>
            <input
              type="text"
              name="street"
              value={street}
              onChange={(e) => setstreet(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">State</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Zip Code</label>
            <input
              type="number"
              name="zipCode"
              value={zipcode}
              onChange={(e) => setzipcode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md text-sm"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={assets.add_address_iamge}
          alt="Address Illustration"
          className="w-full max-w-xs rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AddAddress;
