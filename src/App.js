import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Red Light Violations - Chicago</header>
      <p className="title">Dates vs. Violations in Descending Order.</p>
      <iframe
        title="iframe1"
        className="iframe"
        frameborder="1"
        src="https://observablehq.com/embed/@hsheik8/project-2?cells=dateViolations"
      ></iframe>
      <p className="title">Intersections vs. Violations in Descending Order.</p>
      <iframe
        title="iframe2"
        className="iframe"
        frameborder="1"
        src="https://observablehq.com/embed/@hsheik8/project-2?cells=intersections"
      ></iframe>
      <p className="title">
        Intersections vs. Violations in Descending Order. (Zoomable)
      </p>
      <iframe
        title="iframe3"
        className="iframe"
        frameborder="1"
        src="https://observablehq.com/embed/@hsheik8/project-2?cells=zoom"
      ></iframe>
      <p className="title">Violations in Chicago by Date</p>
      <iframe
        title="iframe4"
        className="iframe"
        frameborder="1"
        src="https://observablehq.com/embed/@hsheik8/project-2?cells=viewof+date%2CcurrentDate%2CmapOne"
      ></iframe>
      <p className="title">
        Violations in Chicago by Date and Violations per Intersection
      </p>
      <iframe
        title="iframe5"
        className="iframe"
        frameborder="1"
        src="https://observablehq.com/embed/@hsheik8/project-2?cells=viewof+date%2CcurrentDate%2CpointsTwo"
      ></iframe>
      <p className="title">
        Violations in Chicago by Date and Violations per Intersection (New
        Interactive Visualization)
      </p>
      <iframe
        title="iframe6"
        className="iframe"
        frameborder="1"
        src="https://observablehq.com/embed/@hsheik8/project-2?cells=viewof+date%2CcurrentDate%2CpointsThree"
      ></iframe>
    </div>
  );
}

export default App;
