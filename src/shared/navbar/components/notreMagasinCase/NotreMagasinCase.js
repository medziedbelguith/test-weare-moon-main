import React ,{useEffect , useState} from 'react';
import './NotreMagasinCase.css'


function NotreMagasinCase (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="magasin" >
        
      <span class="left item"> <i class="fa fa-map-marker-alt"></i> </span>
      <span class="item text"> Notre Magasin </span>
      <span class="right item"> <i class="fa fa-map-marker-alt"></i> </span>
      
  </div>
 );
}

export default NotreMagasinCase;