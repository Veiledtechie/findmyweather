import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Ila Orangun" />

        <footer>
          This website was built by{" "}
          <a
            href="https://www.linkedin.com/in/hikmah-adetunji-325011250"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hikmah Adetunji
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Veiledtechie/findmyweather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
