import React ,{useEffect , useState} from 'react';
import GalerieFixe from './components/GalerieFixe/GalerieFixe';

import Galerie2 from './components/Galerie2/Galerie2';
import Navbar from '../../shared/navbar/Navbar';

import './Accueil.css'

function Accueil (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="content accueil-content " >
      
      
        <div class="navbar-accueil">
          <Navbar />
        </div>
        
                <div class="GalerieFixe-accueil">
                   <GalerieFixe />
                </div>
                
                <div class="container text-accueil">
                   <Galerie2 />
                </div>
       
  </div>
 );
}

export default Accueil;