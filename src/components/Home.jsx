import "../styles/home.css"
import Discover from './Discover';
import  Numbers  from './Numbers';
import Whatwedo from './Whatwedo';
import Designcc from './Designcc';
import Findpcc from './Findpcc';
import Threecards from './Threecards';
import Faq from './Faq';
import Easyway from './Easyway';
import Footers from './Footers'
// import Login from './Login';

const Home = () => {
  return (
    <>
      <div className="home h-max min-w-full">
        <Discover />
        <Numbers />
        <Whatwedo />
        <Designcc />
        <Findpcc />
        <Threecards />
        <Faq />
        <Easyway />
        <Footers />
      </div>
    </>
  );
}

export default Home