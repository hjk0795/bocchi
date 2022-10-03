function Home() {
  return (
    <div className="mainContainer">
      <h1>
        The elegant act of eating food <br /> without being disturbed by anyone
      </h1>
      <div className="d-grid gap-2 col-1 mx-auto">
        <form action="/category" method="post">
          <button type="submit" className="btn btn-outline-dark btn-lg">
          Start
          </button>
        </form>
      </div>

    </div>
  );
}

export default Home;
