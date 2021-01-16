import Search from "./components/Search";
import Results from "./components/Results";
import Nominations from "./components/Nominations";

function App() {
  return (
    <div className="App" style={{ padding: "3% 10%" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2%" }}>The Shoppies</h1>
      <Search />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Results />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
