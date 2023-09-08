import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Content } from './components/content/Content';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Content/>
      </BrowserRouter>
    </div>
  );
}

export default App;
