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
        <TextLink text="🔴 Please read this!" link="" />
        <TextLink text="🙏 Read more for XYZ!" link="" />
        <TextLink text="🛠 Currently we are building...!" link="" />
        <YoutubeLink text="🎥 Watch our intro" />
        <YoutubeLink/>
      </TemplateBasic>
    );
  }
  
  export default Landing;
  