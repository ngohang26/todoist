import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sidebar/SideBar';
import { TopBar } from './components/topbar/TopBar';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar handleCollapse={handleCollapse} />
      <SideBar collapsed={collapsed} />
      {/* <LeftMenu/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
