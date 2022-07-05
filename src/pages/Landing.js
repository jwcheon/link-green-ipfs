import TemplateBasic from "../components/TemplateBasic";
import Profile from "../components/Profile";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import TextLink from "../components/TextLink";
import ImageLink from "../components/ImageLink";
import YoutubeLink from "../components/YoutubeLink";
import Breakline from "../components/Breakline";
import Footer from "../components/Footer";

function Landing() {
    return (
      <TemplateBasic>
        {/* TODO: Refactor this based on LandingSample.json */}
        <Profile />
        <TextLink text="🔴 Please read this!" />
        <TextLink text="🙏 Read more for XYZ!" />
        <TextLink text="🛠 Currently we are building...!" />
      </TemplateBasic>
    );
  }
  
  export default Landing;
  