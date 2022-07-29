import React ,{useEffect , useState} from 'react';
import './ConfigurateurCase.css';

function ConfigurateurCase (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="configurateur" >
      
      <span class="left item"> <img src="./images/008-fence.png" /> </span>
      <span class="item text"> Configurateur </span>
      <span class="right item"> <img src="./images/008-fence.png" /> </span>
  
  </div>
 );
}

export default ConfigurateurCase;