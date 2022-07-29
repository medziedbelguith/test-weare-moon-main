import React ,{useEffect , useState} from 'react';
import './navbar.css';
import LogoCase from './components/logoCase/LogoCase';
import RechercheCase from './components/rechercherCase/RechercherCase';
import NotreMagasinCase from './components/notreMagasinCase/NotreMagasinCase';
import ConfigurateurCase from './components/configurateurCase/ConfigurateurCase';
import ContactezNousCase from './components/contactezNousCase/ContactezNousCase';
import BoutiqueCase from './components/boutiqueCase/BoutiqueCase';

function Navbar (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="navbar-style" >
        
        <div class="content block-1">
          <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <div class="row">
                 
                        <div class="col-logo case">
                          <LogoCase />
                        </div>
                        <div class="col-recherche case">
                           <RechercheCase />
                        </div>
                        <div class="col-magasin case">
                          <NotreMagasinCase /> 
                        </div> 
                        <div class="col-configurateur case">
                           <ConfigurateurCase /> 
                        </div> 
                         
                    </div>

                </div>

            </div>
          </div>
        </div>

        <div class="container block-2">
            <div class="col-md-12">
                <div class="row">
                   
                  <ul class="nav-class">
                          
                        <li class="navbar-dessous center-text-accueil">
                           <span> Accueil </span> 
                        </li>
                        
                        <li class="navbar-dessous center-text-contact boutique">
                           <span class="contact-transparent"> Boutique transparent </span>

                           <ul class="list-boutique">
                              <li>Lame commposite</li>
                              <li>Lame en bois</li>
                              <li>Panneau bois</li>
                              <li>Grille rigide</li>
                              <li>Gabion</li>
                           </ul>

                           <div class="modal-boutique">
                              <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768 (1).png" />
                                  
                              <button>Boutique</button>
                           </div>
                           
                        </li>
                        
                        <li class="navbar-dessous center-text-accueil">
                           <span> Nos réalisations </span>  
                        </li>
                        
                        <li class="navbar-dessous center-text-contact">
                        
                           <span class="contact-transparent"> Contactez Nous transparent</span>
                           
                           <div class="modal-contact">
                              <div class="modal-contact-body">
                                  <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768 (1).png" />
                                  
                                  <div class="sous-modal-contact">
                                     <p class="description-contact">Hey! Pour toute informations ou suggestions, <br /> Merci de remplir le formulaire suivant</p>
                                     
                                     <input type="text" placeholder="Nom & Prénom" />
                                     <input type="text" placeholder="Email" />
                                    
                                     <p class="label-message">Message</p>
                                    
                                     <textarea type="text" placeholder="" />
                                  </div>
                                  
                                  <label>Coordonnées & Map</label>
                                  <span> Contactez Nous </span>
                                  <button>Envoyer</button>
                              </div>
                          
                           </div>
                        
                        </li>
                
                  </ul>
                
                </div>
            </div>
        </div>

  </div>
 );
}

export default Navbar;
