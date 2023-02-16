import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const User = () => {

    const [user, setUser] = useState({
        landlord_name: "",
        location: "",
        rent: "",
        created_at: ""
    });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/landlord/${id}/`);
    setUser(result.data);
  }

  return (
    <div className="container py-4">
        <Link className="btn btn-primary" to="/">
            Back To Home
        </Link>
        <h1 className="display-4">LandLord ID : {id}</h1><hr />
        <ul className="list-group w-50">
            <li className="list-group-item">LandLord Name : {user.landlord_name}</li>
            <li className="list-group-item">Location : {user.location}</li>
            <li className="list-group-item">Rent : {user.rent}</li>
            <li className="list-group-item">Created At : {user.created_at}</li>
        </ul>
    </div>
  )
}
