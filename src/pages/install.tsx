import "../Global.css";

export default function install() {
  return (
    <>
      <div className="installButtons">
        <button onClick={() => window.location.href = "https://github.com/RealRailManager/RealRailManager/releases"}>Windows</button>
        <button onClick={() => window.location.href = "https://github.com/RealRailManager/RealRailManager/releases"}>Linux</button>
      </div>
    </>
  );
}