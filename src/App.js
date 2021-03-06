import "./style.css";
import imageInSrc from "./imageInSrc.jpg";
import video from "./Star&DeltaConnection.MP4";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* -------Style inline------- */}
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

          {/* -------external style------- */}
          <h1 className="title-red">Safwan TALEB </h1>

          <br></br>

          {/* -------picture From src folder------- */}
          <h3>Image From "Src" folder</h3>
          <img src={imageInSrc} alt="picInSrc"></img>

          <br></br>

          {/* -------picture From public folder------- */}
          <h3>Image From "Public" folder</h3>
          <img src="/imageInPublic.gif" alt="picInPublic"></img>
        </div>

        {/* -------Video From local------- */}
        <h3>Video From "Local"</h3>
        <video width="auto" height="240px" controls>
          <source src={video} type="video/mp4"></source>
        </video>

        {/* -------Video From Youtube------- */}
        <h3>Video From "Youtube"</h3>
        <ReactPlayer url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" />
        <br></br>
      </header>

      {/* -------Footer of page------- */}
      <div className="foo">
        <footer>
          <div>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/safwan-taleb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MyBio
            </a>
            <span>&copy; 2021 creative_Labs.</span>
          </div>
          <div>
            <span>
              Powered by
              <i>
                <b> Safwan TALEB</b>
              </i>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
