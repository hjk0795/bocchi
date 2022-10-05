import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
    <Header />
    <div className="mainContainer">
      <h1>
        The elegant act of eating food <br /> without being disturbed by anyone
      </h1>
      <div className="d-grid gap-2 col-1 mx-auto">
        <button type="button" className="btn btn-outline-dark btn-lg">
          <Link to="/category" style={{ textDecoration: 'none' }}>Start</Link>
        </button>
      </div>
    </div>
    </>
  );
}

export default Home;
