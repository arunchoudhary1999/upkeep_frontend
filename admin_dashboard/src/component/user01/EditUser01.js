import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditUser01 = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact_no: "",
    type_of_repairs: ""
  });

  const { name, email, contact_no, type_of_repairs } = user;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://upkeep.crmcity.org:8093/adminpanel/repaircont/${id}/`, user);
    alert("WellDone! Dude You are Edit SuccessFully Data")
    navigate("/repair");
}

const loadUser = async () => {
  const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/repaircont/${id}/`);
  setUser(result.data);
}

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Repair Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Repair Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Repair Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Repair Contact No"
              name="contact_no"
              value={contact_no}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group mt-1 mb-1">
          <select 
              className="form-control form-control-lg"
              placeholder="Enter Your Repair Type of Repairs"
              name="type_of_repairs"
              value={type_of_repairs}
              onChange={e => onInputChange(e)}
          >
            <option value="plumber">plumber</option>
            <option value="electrician">electrician</option>
            <option value="door repair">door repair</option>
          </select>
          </div>

          <button className="btn btn-primary btn-block">Edit User</button>
          <Link to="/repair" className="btn btn-primary btn-block">Cancel</Link>
        </form>
      </div>
    </div>
  );
};
