import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { auth, Provider, getRedirectResult, signInWithRedirect, onAuthStateChanged, signOut } from "../Config/index";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom"

function Home() {
  const [isAuth, setIsAuth] = useState(false);
   const [user, setUser] = useState({});
const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    console.log("signing in");
    signInWithRedirect(auth, Provider);
  };

 useEffect(()=> {
  async function getRedirect (){
    try {
      const result = await getRedirectResult(auth);
      if(result){
        console.log('signin successful', result.user);
        setUser({...result.user})
        setIsAuth(true);
      }
  } catch (error){
    console.log(error.message);
  }
 } getRedirect(); 
}, []);

   useEffect(() =>{
    onAuthStateChanged(
      auth,
      (user) => {
        if (user){
           setUser({ ...user });
           setIsAuth(true);
          console.log(user);
        }
        
      },
      (error) =>{
        console.log(error);
      },
      (complete) =>{
        console.log(complete)
      }
    );
   }, []);
   console.log(user)
  return (
    <div className="row">
      <Helmet>
        <title>Home</title>
        <meta
          name="Home"
          content="Sign up on our home page"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="sahara">
        <div className="col">
          <h1 className="head">Sahara</h1>
          <p>
            Welcome to the Desert. Enjoy your stay and take part in our
            luxurious packages. We have different activities you can partake of
            as a group and individually. Explore Sahara your way by selecting
            only the attractions you want to visit
          </p>
          <Link to="/about">
            <button type="button" className="button">
              Explore
            </button>
          </Link>
          {isAuth ? (
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
          ) : (
            <button className="sign" onClick={handleSignIn}>
              Sign in with Google 
            </button>
          )}
        </div>
        <div>
          <div>
            <div className="card card1">
              <h5>Western Desert</h5>
            </div>
            <div className="card card2">
              <h5>AI Bagawat</h5>
            </div>
          </div>
          <div>
            <div className="card card3">
              <h5>Pyramid of Giza</h5>
            </div>
            <div className="card card4">
              <h5>Kalahari Desert</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
