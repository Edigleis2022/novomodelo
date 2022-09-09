import { Cartao } from './componentes/Cartao';

import './App.css';
import { Header } from './componentes/Header';
import { AppleLogo } from 'phosphor-react';

function App() {
  return (
    <div className="App">
      <Header />
      <Cartao
        foto="https://randomuser.me/api/portraits/men/41.jpg"
        nome="Marion Hoffman"
        email="marion.hoffman@example.com"
      />
      <Cartao
        foto="https://randomuser.me/api/portraits/women/70.jpg"
        nome="Catherine Freeman"
        email="catherine.freeman@example.com"
      />
      <Cartao
        foto="https://randomuser.me/api/portraits/men/14.jpg"
        nome="Herbert West"
        email="herbert.west@example.com"
      />
      <AppleLogo size={60} color="#8218c9" weight="duotone" />
    </div>
  );
}

export default App;
