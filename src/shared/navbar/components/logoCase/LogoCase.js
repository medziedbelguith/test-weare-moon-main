import React ,{useEffect , useState} from 'react';
import './LogoCase.css'


function LogoCase (props) {

    const [reload, setReload] = useState(true);
  
  

 return(
  <div className="logo" >
      <img src="./images/logo.jpg" className="style-img-logo" />
  </div>
 );
}

export default LogoCase;