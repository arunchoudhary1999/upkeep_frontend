import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

export const AddUser02 = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        tenant_name: "",
        location: "",
        moved_in: "",
        moved_out: ""
    });

    const {tenant_name, location, moved_in, moved_out} = user;

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://upkeep.crmcity.org:8093/adminpanel/tenant/", user);
        alert("WellDone! Dude You are Created SuccessFully Data")
        navigate("/tenant");
    }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Tenant Add User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Tenant Name"
              name="tenant_name"
              value={tenant_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Tenant Location"
              name="location"
              value={location}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Tenant Moved In"
              name="moved_in"
              value={moved_in}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group mt-1 mb-1">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Your Tenant Moved Out"
              name="moved_out"
              value={moved_out}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};
