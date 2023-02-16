import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Repair = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser()
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://upkeep.crmcity.org:8093/adminpanel/repaircont/");
    // console.log(result);
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://upkeep.crmcity.org:8093/adminpanel/repaircont/${id}/`);
    alert(`Dude! You are Sure to Deleting ${id}`)
    loadUser();
  } 

  return (
    <div className='container'>
      <h1>Repair Page</h1>
      <Link to="/user01/add" className="btn btn-outline-primary float-right">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Series No.</th>
            <th scope="col">Repair ID</th>
            <th scope="col">Repair Name</th>
            <th scope="col">Repair Email</th>
            <th scope="col">Repair Contact No.</th>
            <th scope="col">Types Of Repair</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
        {users.map((user, index) => (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact_no}</td>
            <td>{user.type_of_repairs}</td>
            <td>
              <Link className='btn btn-outline-primary mr-2' to={`/user01/${user.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
              <Link className='btn btn-primary mr-2 ml-2' to={`/user01/edit/${user.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
              <Link className='btn btn-danger mr-2 ml-2' onClick={() => {deleteUser(user.id)}}><i class="fa fa-trash" aria-hidden="true"></i></Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};

