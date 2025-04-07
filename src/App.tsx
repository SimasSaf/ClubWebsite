import "./App.css";
import CustomHeader from "./components/header/customheader";
import Card from "./components/card/card";
import LeftPage from "./components/pages/leftPage";
import RightPageDown from "./components/pages/rightPageDown";
import RightPageUp from "./components/pages/rightPageUp";
import PhoneCase from "./images/phoneCase.png";
import PhoneCaseSkeleton from "./images/phoneCaseSkeleton.png";
import Logo from "./images/BarFightClub.png";
import UnderConstruction from "./images/underConsturction.png";

function App() {
  return (
    <div>
      {/* <CustomHeader />
      <div className="Layout">
        <div className="LeftPage">
      <Card>
        <LeftPage />
      </Card>
      </div>

      <div className="PhoneCaseDiv">
      <img src={PhoneCase} className="PhoneCase"></img>
      <img src={PhoneCaseSkeleton} className="PhoneCaseSkeleton"></img>
      </div>

      <div className="RightPage">
      <Card>
        <RightPageUp />
      </Card>

      <Card>
        <RightPageDown />
      </Card>
      </div> */}
      <div className="UnderConstructionBackground">
        {[...Array(500)].map((_, i) => (
          <img
            key={i}
            src={UnderConstruction}
            className={`UnderConstruction ${
              i % 2 === 0 ? "tiltLeft" : "tiltRight"
            }`}
            alt="Under Construction"
          />
        ))}
      </div>
      <div className="CenterWrapper">
        <img className="Logo" src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default App;
