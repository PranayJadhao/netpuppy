
import "./App.css";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageTop from "./PageTop";
import Navbar from "./Navbar";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import FinalPage from "./FinalPage";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PageTop></PageTop>
      <PageTwo></PageTwo>
      <PageThree></PageThree>
      <PageFour></PageFour>
      <PageFive></PageFive>
      <FinalPage></FinalPage>
     
    </div>
  );
}

export default App;
