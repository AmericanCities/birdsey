import CallOut from "./components/HomeIntro/CallOut";
import HomeIntro from "./components/HomeIntro/HomeIntro";
import PlayerCard from "./components/JerseyAdmin/PlayerCard";
import MainHeader from "./components/layout/MainHeader";
import ImageCard from "./components/HomeIntro/ImageCard";
import Login from "./components/auth/Login";

function App() {
  const isLoggedIn = false;

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
          <PlayerCard />
          <PlayerCard />
        </div>
      )}
    </div>
  );
}

export default App;
