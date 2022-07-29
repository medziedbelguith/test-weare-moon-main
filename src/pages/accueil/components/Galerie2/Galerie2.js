import React ,{useEffect , useState} from 'react';

import GalerieFixe from '../GalerieFixe/GalerieFixe';

import './Galerie2.css';

function Galerie2 (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="container galerie " >
      
      
      <div class="row image-1">
          <div class="col-md-12">
          
            <div class="row image-1-1">
                <div class="col-3 image-1-1-1">
                   <div class="image-1-1-1-1">
                      <img class="" src="./images/008-fence.png" />
                    </div> 
                </div>
                
                <div class="col-8 image-1-1-2">
                    <h1>Configurez votre espace</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu.</p>
                </div>

                <div class="col-1 image-1-1-3">
                    <div class="image-1-1-3-1">
                       <i class="fa fa-arrow-right"></i>
                    </div>
                </div>
            </div>

          </div>
          <div class="image-1-2"></div>
          
          <img src="./images/redImage.png" class="image-1-3-1" />
          <img src="./images/greenImage.png" class="image-1-3-2" /> 
        =
      </div>
      
  </div>
 );
}

export default Galerie2;