import React ,{useEffect , useState} from 'react';
import './GalerieFixe.css'

function GalerieFixe (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="galeriefixe" >
      <div className="galeriefixe2" >
            <div class="row">
               <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768 (5).png"/>
            </div>

            <div class="container galerie-images">
              <div class="row images">
                 
                 <div class="item-image">
                    <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768 (4).png"/>
                    <div class="item-image-2"></div>
                    <span>Lame commposite</span>
                 </div>
                 <div class="item-image">
                    <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768 (3).png"/>
                    <div class="item-image-2"></div>
                    <span>Lame en bois</span>
                 </div>
                 <div class="item-image">
                    <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768 (2).png"/>  
                    <div class="item-image-2"></div>
                    <span>Panneau bois</span>
                 </div>
                 <div class="item-image">
                    <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768 (6).png"/>
                    <div class="item-image-2"></div>
                    <span>Grille rigide</span>
                 </div>
                 <div class="item-image item-image5">
                    <img src="./images/urn_aaid_sc_US_1f59e84d-92f4-40e0-a6bd-bcf0856bd768.png"/>
                    <div class="item-image-2"></div>
                    <span>Gabion</span>
                 </div>
      
              </div>
            </div>
      </div>
      
    
  </div>
 );
}

export default GalerieFixe;