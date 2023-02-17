import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export const User03 = () => {

    const [user, setUser] = useState({
        id: "",
        propertyName: "",
        totalRoom: "",
        propertyCapacity: "",
        address1: "",
        address2: "",
        city: "",
        postCode: "",
        description: "",
        state: "",
        image: ""
    });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://upkeep.crmcity.org:8093/adminpanel/proaction/${id}/`);
    setUser(result.data);
  }

  return (
    <div className="container py-4">
        <Link className="btn btn-primary" to="/property">
            Back To Home
        </Link>
        <h1 className="display-4">Property ID : {id}</h1><hr />
        <ul className="list-group w-50">
            <li className="list-group-item">Property Name : {user.propertyName}</li>
            <li className="list-group-item">Total Room : {user.totalRoom}</li>
            <li className="list-group-item">Property Capacity : {user.propertyCapacity}</li>
            <li className="list-group-item">Address1 : {user.address1}</li>
            <li className="list-group-item">Address2 : {user.address2}</li>
            <li className="list-group-item">City : {user.city}</li>
            <li className="list-group-item">Post Code : {user.postCode}</li>
            <li className="list-group-item">Description : {user.description}</li>
            <li className="list-group-item">State : {user.state}</li>
            <li className="list-group-item">Image : {user.image}</li>
        </ul>
    </div>
  )
}
