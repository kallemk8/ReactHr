import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import './stylesheet/main.css';
import { Home } from './components/Home';
import { Addemployee } from './components/Addemployee';
import { Editemployee } from './components/Editemployee';
import { GlobalProvider } from './context/GlobalState';
import { Topheader } from './Header/Topheader';
import { Sideheader } from './Header/Sideheader';
import Department from './components/Department';
import Designation from './components/Designation';

function App() {
  const [size, setSize] = useState(false);
    const handlechange = () => {
        setSize(!size);
    }
  return (
    <GlobalProvider>
      <Topheader onviewchange={handlechange} view={size}/>
      <Sideheader view={size}/>
      <div className='contentView'>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/department" component={Department} exact />
          <Route path="/designation" component={Designation} exact />
          <Route path="/edit/:id" component={Editemployee} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
