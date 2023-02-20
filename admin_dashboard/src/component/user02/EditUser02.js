import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditUser02 = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    tenant_name: "",
    location: "",
    moved_in: "",
    moved_out: ""
  });

  const { tenant_name, location, moved_in, moved_out } = user;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://upkeep.crmcity.org:8093/adminpanel/tenant/${id}/`, user);
    alert("WellDone! Dude You are Edit SuccessFully Data")
    navigate("/tenant");
}

const loadUser = async () => {
  const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/tenant/${id}/`);
  setUser(result.data);
}

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Tenant Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Tenant Name"
              name="tenant_name"
              value={tenant_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Location"
              name="location"
              value={location}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Moved In"
              name="moved_in"
              value={moved_in}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group mt-1 mb-1">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Moved Out"
              name="moved_out"
              value={moved_out}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Edit User</button>
          <Link to="/tenant" className="btn btn-primary btn-block">Cancel</Link>
        </form>
      </div>
    </div>
  );
};
