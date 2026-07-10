import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import PrincipalMessage from "../components/PrincipalMessage/PrincipalMessage";
import NoticeEvents from "../components/NoticeEvents/NoticeEvents";
import TopAchievers from "../components/TopAchievers/TopAchievers";
import Facilities from "../components/Facilities/Facilities";
import Gallery from "../components/Gallery/Gallery";
import Faculty from "../components/Faculty/Faculty";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <PrincipalMessage />
      <NoticeEvents />
      <TopAchievers />
      <Facilities />
      <Gallery />
      <Faculty />
    </>
  );
};

export default Home;