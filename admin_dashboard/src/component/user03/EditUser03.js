import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser03 = () => {

  const navigate = useNavigate();
  const { id } = useParams();

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
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://upkeep.crmcity.org:8093/adminpanel/proaction/${id}/`, user);
    alert("WellDone! Dude You are Edit SuccessFully Data")
    navigate("/property");
}

const loadUser = async () => {
  const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/proaction/${id}/`);
  setUser(result.data);
}

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Property Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Name"
              name="propertyName"
              value={propertyName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Total Room"
              name="totalRoom"
              value={totalRoom}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Capacity"
              name="propertyCapacity"
              value={propertyCapacity}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LandLoard Address1"
              name="address1"
              value={address1}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LandLoard Address2"
              name="address2"
              value={address2}
              onChange={(e) => onInputChange(e)}
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
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Property Image"
              name="image"
              value={image}
              onChange={e => onInputChange(e)}
            />
          </div> */}

          <button className="btn btn-primary btn-block">Edit User</button>
        </form>
      </div>
    </div>
  );
};
