import style from "./index.module.css";
import Mainroute from "./routes/Mainroute";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className={style.background}>
      <Navbar />
      <Mainroute />
    </div>
  );
};

export default App;
