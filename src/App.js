import "./App.css";

const App = () => {
  return (
    // Navbar / menu
    <div>
      <div
        style={{
          backgroundImage: `url(${"warm-dragon-landscape.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
        className="justify-center items-center flex"
      >
        <Placeholder name="About" />
      </div>
      <div
        style={{
          backgroundImage: `url(${"blue-mountain-landscape.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
        className="justify-center items-center flex"
      >
        <Placeholder name="About" />
      </div>
      <div
        style={{
          backgroundImage: `url(${"lake-landscape.jpg"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
        className="justify-center items-center flex"
      >
        <Placeholder name="About" />
      </div>
    </div>

    // <div>

    //   <div>
    //     About
    //     <ul>
    //       <li>Picture</li>
    //       <li>Bio</li>
    //       <li>Github / LinkedIn / Email</li>
    //       <li>Resume</li>
    //     </ul>
    //   </div>

    //   <div>PROJECTS</div>
    //   <ul>
    //     <li>Picture</li>
    //     <li>Bio</li>
    //   </ul>
    //   <div>EDUCATION</div>
    //   <div>BLOG</div>
    //   <div>CONTACTS</div>
    //   <ul>
    //     <li>Send Email to Me</li>
    //   </ul>
    // </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${"warm-dragon-landscape.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
};

const Section = (props) => {
  const { backgroundImage, content } = props;
  return;
};

const Placeholder = (props) => {
  const { name } = props;
  return (
    <p className="bg-black rounded-xl text-white items-center px-5 py-5">
      {props.name}
    </p>
  );
};

export default App;
