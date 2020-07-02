import React, { lazy, Suspense } from 'react';
import SocialContainer from './components/SocialContainer';
import Banner from './images/pwaconf-banner.png';
import './App.css';

const Speakers = lazy(() => import('./components/Speakers'));
const About = lazy(() => import('./components/About'));
const renderLoader = () => <p>Loading...</p>;

const AboutContainer = () => (
  <Suspense fallback={renderLoader()}>
    <About />
  </Suspense>
);

const SpeakersContainer = () => (
  <Suspense fallback={renderLoader()}>
    <Speakers />
  </Suspense>
);

const App = () => {
  const trackedTags = ['pwaconf','pwaconfit','pwaconfit2020'];
  return (
    <div className="App">
      <div className="App-header">
        <a href="/" title="Home">
          <img src={Banner} className="App-banner" alt="Banner" />
        </a>
      </div>
      <AboutContainer />
      <SpeakersContainer />
      <h1>What's new on #pwaconfit</h1>
      <SocialContainer trackedTag={trackedTags}/>
    </div>
  );
};

export default App;
