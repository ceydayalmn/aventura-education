import "./style.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=2")
      .then(response => setUsers(response.data.results))
      .catch(error => alert(error));
  }, []);

  const addButton = () => {
    axios.get("https://randomuser.me/api/")
      .then(response => setUsers([...users, ...response.data.results]))
      .catch(error => alert(error));   
  }

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  }

  return (
    <div className="div">
   <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow className="table-head">
              <TableCell >Title</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell> <button className="addButton" onClick={addButton}>Add User</button></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u, index) => (
              <TableRow key={index}>
                <TableCell>{u.name.title}</TableCell>
                <TableCell>{u.name.first}</TableCell>
                <TableCell>{u.name.last}</TableCell>
                <TableCell>{u.location.country}</TableCell>
                <TableCell>{u.phone}</TableCell>
                <TableCell>
                  <button onClick={() => removeUser(index)} className ="btn"><FontAwesomeIcon icon={faTrash} /></button>
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     </div>
  
  );
}

export default Main;
