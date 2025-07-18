
import Contact from '../contact/page';
import Banner from './banner';
import Events from './events';
import Gallery from './gallery';
import Menu from './menu';
import Story from './story';


export default function HomePage() {

  return (
    <div>
      <Banner></Banner>
      <Menu></Menu>
      <Events></Events>
      <Story></Story>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
}
