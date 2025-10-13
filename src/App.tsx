import Header from "./Header";
import "./Global.css";

export default function App() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="derail.mp4" type="video/mp4" />
        </video>
      </div>

      <Header />

      <div className="content">
        <h1>Real Rail Manager</h1>
        <p>W.I.P, come back later :)</p>
      </div>
    </>
  );
}