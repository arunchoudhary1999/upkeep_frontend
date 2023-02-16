import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const User01 = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact_no: "",
        type_of_repairs: ""
    });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/repaircont/${id}/`);
    setUser(result.data);
  }

  return (
    <div className="container py-4">
        <Link className="btn btn-primary" to="/repair">
            Back To Home
        </Link>
        <h1 className="display-4">Repair ID : {id}</h1><hr />
        <ul className="list-group w-50">
            <li className="list-group-item">Repair Name : {user.name}</li>
            <li className="list-group-item">Repair Email : {user.email}</li>
            <li className="list-group-item">Repair Contact No. : {user.contact_no}</li>
            <li className="list-group-item">Repair Type Of Repairs : {user.type_of_repairs}</li>
        </ul>
    </div>
  )
}
