import { Link } from "react-router-dom";
import SideNav from "../Components/SIdeNavigation/SideNav";
const Home = () => {
  const data = { name: "naveen", age: "18" };

  return (
    <div className="main">
      <SideNav />
      <div>
        <div className="Head">
          <h3 className="title">Home</h3>
          <div className="profile">
            <h4>Profile</h4>
          </div>
        </div>

        <div className="Department"></div>
      </div>
    </div>
  );
};

export default Home;
