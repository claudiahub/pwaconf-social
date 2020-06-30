import React from 'react';
import SocialContainer from './components/SocialContainer';
import banner from './images/pwaconf-banner.png';
import './App.css';

function App() {
  const trackedTags = ['pwaconf','pwaconfit','pwaconfit2020'];
  return (
    <div className="App">
      <div className="App-header">
        <a href="/" title="Home">
          <img src={banner} className="App-banner" alt="Banner" />
        </a>
      </div>
      <h1>What's new on #pwaconfit</h1>
      <SocialContainer trackedTag={trackedTags}/>
    </div>
  );
}

export default App;
