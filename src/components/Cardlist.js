import React from 'react';
import {useState, useEffect} from 'react';
// We  destructure a users variable from
// the users to object.
import Card from './Card';

function Cardlist() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setUsers(data);
    });
}, []);
  //Populate card component dynamically from users.js
  const cardLists = users.map(function (element) {
    return <Card id={element.id} name={element.name} email={element.email} />;
  });

  return <div>{cardLists};</div>;
}

export default Cardlist;
//<Card id={users[0].id} name={users[0].name} email={users[0].email} />
//<Card id={users[0].id} name={users[1].name} email={users[1].email} />
//<Card id={users[0].id} name={users[2].name} email={users[2].email} />
