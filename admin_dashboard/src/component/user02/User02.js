import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const User02 = () => {

    const [user, setUser] = useState({
        tenant_name: "",
        location: "",
        moved_in: "",
        moved_out: ""
    });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/tenant/${id}/`);
    setUser(result.data);
  }

  return (
    <div className="container py-4">
        <Link className="btn btn-primary" to="/tenant">
            Back To Home
        </Link>
        <h1 className="display-4">Tenant ID : {id}</h1><hr />
        <ul className="list-group w-50">
            <li className="list-group-item">Tenant Name : {user.tenant_name}</li>
            <li className="list-group-item">Location : {user.location}</li>
            <li className="list-group-item">Moved In. : {user.moved_in}</li>
            <li className="list-group-item">Moved Out : {user.moved_out}</li>
        </ul>
    </div>
  )
}
