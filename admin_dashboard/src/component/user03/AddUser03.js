import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

export const AddUser03 = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        propertyName: "",
        totalRoom: "",
        propertyCapacity: "",
        address1: "",
        address2: "",
        city: "",
        postCode: "",
        description: "",
        state: "",
        // image: ""
    });

    const {propertyName, totalRoom, propertyCapacity, address1, address2, city, postCode, description, state, image} = user;

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://upkeep.crmcity.org:8093/adminpanel/proaction/", user);
        alert("WellDone! Dude You are Created SuccessFully Data")
        navigate("/property");
    }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Property Add User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Name"
              name="propertyName"
              value={propertyName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Total Room"
              name="totalRoom"
              value={totalRoom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Capacity"
              name="propertyCapacity"
              value={propertyCapacity}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Address1"
              name="address1"
              value={address1}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Address2"
              name="address2"
              value={address2}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property City"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Post Code"
              name="postCode"
              value={postCode}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property State"
              name="state"
              value={state}
              onChange={e => onInputChange(e)}
            />
          </div>

          {/* <div className="form-group mt-1 mb-1">
            <input
              type="file"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Image"
              name="image"
              value={image}
              onChange={e => onInputChange(e)}
            />
          </div> */}

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};
