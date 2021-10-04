import CallOut from "./components/HomeIntro/CallOut";
import HomeIntro from "./components/HomeIntro/HomeIntro";
import MainHeader from "./components/layout/MainHeader";
import ImageCard from "./components/HomeIntro/ImageCard";
import Login from "./components/auth/Login";
import {useSelector} from 'react-redux';
import JerseyForm from "./components/JerseyAdmin/JerseyForm";
import ActiveJerseyList from "./components/JerseyAdmin/ActiveJerseyList";

function App() {
  const isLoggedIn = useSelector((state)=>state.auth.isAuthenticated);

  return (
    <div className="App container">
      <MainHeader />

      {!isLoggedIn && (
        <div className="mt-4">
          <HomeIntro />
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <ImageCard />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Login />
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <CallOut />
            </div>
          </div>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <JerseyForm />
          <ActiveJerseyList/>
        </div>
      )}
    </div>
  );
}

export default App;
