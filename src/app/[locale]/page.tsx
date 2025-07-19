
import Contact from './contact';
import Banner from './banner';
import Events from './events';
import Gallery from './gallery';
import Job from './job';
import Menu from './menu';
import Story from './story';
import Reservation from './reservation';



export default function HomePage() {

  return (
    <div>
      <Banner></Banner>
      <Menu></Menu>
      <Events></Events>
      <Story></Story>
      <Gallery></Gallery>
      <Job></Job>
      <Reservation></Reservation>
      <Contact></Contact>
    </div>
  );
}
