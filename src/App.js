
// import Overview from './Design-system/components/Overview/Overview';
import Overview from './Design-system/components/Overview';
import overviewData from './Design-system/components/Overview/OverviewData';

import CreativeSpeakers from './Design-system/components/CreativeSpeakers/CreativeSpeakers';
import speakerData from './Design-system/components/CreativeSpeakers/SpeakersData';
import './Design-system/main.css'

import OurPrograms from './Design-system/components/OurPrograms/OurPrograms';
import ourProgramsData from './Design-system/components/OurPrograms/OurProgramsData';

import ourSponsors from './Design-system/components/OurSponsors/OurSponsorsData';
import OurSponsors from './Design-system/components/OurSponsors/OurSponsors';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div>

    //   {/* <div style={{ display: 'flex' }}>
    //     {overviewData.map((ele) => { return <Overview key={ele.id} icon={ele.icon} title={ele.title} description={ele.description} /> })}
    //   </div> */}

    //   {/* <div style={{ display: 'flex' }}>
    //     {speakerData.map((item) => {
    //       return <CreativeSpeakers key={item.id}
    //         img={item.image}
    //         alt={item.alt}
    //         name={item.name}
    //         job={item.job}
    //       />
    //     })}
    //   </div> */}


    //   {/* {ourProgramsData.map((prog) => <OurPrograms key={prog.id} img={prog.img}
    //     alt={prog.alt} time={prog.time} roomNo={prog.roomNumber} title={prog.title}
    //     name={prog.name} description={prog.description} />)} */}

    //   {/* <div style={{ display: "flex", gap: "1rem" }}>
    //     {ourSponsors.map((sponsor) => { return <OurSponsors key={sponsor.id} source={sponsor.src} alternate={sponsor.alt} /> })}
    //   </div> */}

    //   <Home />

    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
