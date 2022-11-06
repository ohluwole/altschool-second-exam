import React from "react";
import { useState } from "react";
import { auth, signOut } from "../Config/index";
import "./Users.css";
import useFetch from "./UseFetch";
import ProfileCard from "../Component/ProfileCard";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet-async"

function Users() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  const pages = 20;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }
  return (
    <div className="App">
      <Helmet>
        <title>Users</title>
        <meta
          name="Users"
          content="The amount of our users can be found here"
        />
        <link rel="canonical" href="/user" />
      </Helmet>
      <h1 className="title">List of Users</h1>

      {data?.results.map((each, index) => {
        const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
        return (
          // <li key={name.toLowerCase().replaceAll(" ", "")}>{`${
          //   index + 1
          // }.${name}`}</li>
          <ProfileCard name={name} image={each.picture.medium} />
        );
      })}
      {
        <button
          disabled={page <= 1}
          aria-disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
      }
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      }

      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut(auth)
              .then(() => {
                navigate("/");
              })
              .catch((error) => {
                console.log(error.message);
              });
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Users;
