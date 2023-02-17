import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Property = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser()
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://upkeep.crmcity.org:8093/adminpanel/proaction/");
    // console.log(result);
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://upkeep.crmcity.org:8093/adminpanel/proaction/${id}/`);
    alert(`Dude! You are Sure to Deleting ${id}`)
    loadUser();
  } 

  return (
    <div className='container'>
      <h1>Property Page</h1>
      <Link to="/user03/add" className="btn btn-outline-primary float-right">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Series No.</th>
            <th scope="col">Property ID</th>
            <th scope="col">Property Name</th>
            <th scope="col">Total Room</th>
            <th scope="col">Property Capacity</th>
            <th scope="col">Address1</th>
            {/* <th scope="col">Address2</th> */}
            <th scope="col">City</th>
            {/* <th scope="col">Post Code</th> */}
            {/* <th scope="col">Description</th> */}
            <th scope="col">State</th>
            {/* <th scope="col">Image</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
        {users.map((user, index) => (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{user.id}</td>
            <td>{user.propertyName}</td>
            <td>{user.totalRoom}</td>
            <td>{user.propertyCapacity}</td>
            <td>{user.address1}</td>
            {/* <td>{user.address2}</td> */}
            <td>{user.city}</td>
            {/* <td>{user.postCode}</td> */}
            {/* <td>{user.description}</td> */}
            <td>{user.state}</td>
            {/* <img src={user.image} alt="img" width="10" height="10"/> */}
            <td>
              <Link className='btn btn-outline-primary mr-2' to={`/user03/${user.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
              <Link className='btn btn-primary mr-2 ml-2' to={`/user03/edit/${user.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
              <Link className='btn btn-danger mr-2 ml-2' onClick={() => {deleteUser(user.id)}}><i class="fa fa-trash" aria-hidden="true"></i></Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};

