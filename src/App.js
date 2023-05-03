import React, { useState } from 'react';
import './App.css';
import BotsPage from './containers/BotsPage';
import BotSpecs from './components/BotSpecs';

function App() {
  const [army, setArmy] = useState([]);
  const [botSpecs, setBotSpecs] = useState(null);
  const [collectionVisible, setCollectionVisible] = useState(true);

  const addToArmy = (bot) => {
    setArmy([...army, bot]);
    setCollectionVisible(true);
  };

  const viewBotSpecs = (bot) => {
    setBotSpecs(bot);
    setCollectionVisible(false);
  };

  return (
    <div className="App">
      {collectionVisible ? (
        <BotsPage army={army} viewBotSpecs={viewBotSpecs} />
      ) : (
        <BotSpecs bot={botSpecs} addToArmy={addToArmy} />
      )}
    </div>
  );
}

export default App;