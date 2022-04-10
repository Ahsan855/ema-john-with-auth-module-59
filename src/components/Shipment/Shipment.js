import React, { useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
    const [user] =useAuthState(auth)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();
  //   const [createUserWithEmailAndPassword, user] =
  //     useCreateUserWithEmailAndPassword(auth);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneNumberBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = {name, email, address, phone}
    console.log(shipping);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onBlur={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhoneNumberBlur}
              type="number"
              name="phone"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            className="form-submit"
            type="submit"
            value="Add Shipping"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
