import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mainContainer">
      <h1>
        The elegant act of eating food <br /> without being disturbed by anyone
      </h1>
      <div className="d-grid gap-2 col-1 mx-auto">
        <button type="button" className="btn btn-outline-dark btn-lg">
          <Link to="/category">Start</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
