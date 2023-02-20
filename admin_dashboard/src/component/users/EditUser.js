import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    landlord_name: "",
    location: "",
    rent: "",
    created_at: ""
  });

  const { landlord_name, location, rent, created_at } = user;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://upkeep.crmcity.org:8093/adminpanel/landlord/${id}/`, user);
    alert("WellDone! Dude You are Edit SuccessFully Data")
    navigate("/");
}

const loadUser = async () => {
  const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/landlord/${id}/`);
  setUser(result.data);
}

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">LandLord Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LandLoard Name"
              name="landlord_name"
              value={landlord_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LandLoard Location"
              name="location"
              value={location}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your LandLoard Rent"
              name="rent"
              value={rent}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group mt-1 mb-1">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your LandLoard Created At"
              name="created_at"
              value={created_at}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Edit User</button>
          <Link to="/landloard" className="btn btn-primary btn-block">Cancel</Link>
        </form>
      </div>
    </div>
  );
};
