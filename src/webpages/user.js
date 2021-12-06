import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

  let { id } = useParams();
    
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(res => res.json())
        .then(
          (data) => {
            setIsLoaded(true);
            setUsers(data);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (users) {
    return (
      <div>
        <h1> {users.name} </h1>
        <div> Email: {users.email} </div>
        <div> Phone: {users.phone} </div>
        <div> Website: {users.website} </div>
      </div>
    );
  }
}
export default User;
