import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const LandLoard = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser()
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://upkeep.crmcity.org:8093/adminpanel/landlord/");
    // console.log(result);
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://upkeep.crmcity.org:8093/adminpanel/landlord/${id}/`);
    alert(`Dude! You are Sure to Deleting ${id}`)
    loadUser();
  } 

  return (
    <div className='container'>
      <h1>LandLord Page</h1>
      <Link to="/user/add" className="btn btn-outline-primary float-right">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Series No.</th>
            <th scope="col">LandLord ID</th>
            <th scope="col">LandLord Name</th>
            <th scope="col">Location</th>
            <th scope="col">Rent</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
        {users.map((user, index) => (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{user.landlord_id}</td>
            <td>{user.landlord_name}</td>
            <td>{user.location}</td>
            <td>$ {user.rent}</td>
            <td>{user.created_at}</td>
            <td>
              <Link className='btn btn-outline-primary mr-2' to={`/user/${user.landlord_id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
              <Link className='btn btn-primary mr-2 ml-2' to={`/user/edit/${user.landlord_id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
              <Link className='btn btn-danger mr-2 ml-2' onClick={() => {deleteUser(user.landlord_id)}}><i class="fa fa-trash" aria-hidden="true"></i></Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};

