import React from 'react';

const Navbar = (props)=>{


return (<nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid mx-4">
        <a className="navbar-brand">{props.text}</a>
        <div className={`form-check form-switch text-${props.mode==='light'?'Dark':'light'}`}>
          <label className="form-check-label" for="flexSwitchCheckDefault">Change Mode</label>
          <input className="form-check-input mx-4" type="checkbox"           
          style={{'box-shadow': '0.2 0.2 0.2 0.8rem rgba(128, 0, 128, 0.25)', 'border-color': 'purple'}} 
          role="switch" id="flexSwitchCheckDefault" onClick={props.switchMode}
          />
        </div>
      </div>
    </nav>);
}


export default Navbar;