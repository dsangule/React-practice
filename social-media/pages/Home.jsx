import { Link } from "react-router-dom";

export default function Home(){
    return(
      <div>
          <h1>Home Page</h1>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/post">Post</Link>
          <Link to="/show-post">Show Post</Link>
      </div>
    )
}