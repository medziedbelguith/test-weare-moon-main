import React ,{useEffect , useState} from 'react';
import './RechercherCase.css'


function RechercherCase (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="recherche" >
     
      <span class="left item"> <i class="fa fa-search item"></i> </span>
      <span class="item text"> Recherche </span>
      <span class="right item"> <i class="fa fa-search"></i> </span>
      
  </div>
 );
}

export default RechercherCase;