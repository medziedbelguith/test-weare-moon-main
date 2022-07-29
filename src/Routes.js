import React , {useEffect , useState} from 'react';

import Boutiques from './pages/boutiques/Boutiques';
import Accueil from './pages/accueil/Accueil';

import {
  HashRouter as Router ,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { QueryParamProvider } from 'use-query-params';
import Navbar from "./shared/navbar/Navbar";

function Routes (props) {

    return (
    
    <Router>
      <div>
        
        <Switch>
   
           <Route exact path="/">
               <Accueil />        
            </Route> 
            
            <Route path="/boutiques">
                <Boutiques /> 
            </Route>

            <Route path="*">
               <Accueil /> 
            </Route>

        </Switch>

      </div>
    </Router>

     );
}

export default Routes;
