import React, {Component} from 'react';
import './nav.css';
import logo from '../views/1.png';

class appNavbar extends Component {
    render() {
        return (
          <nav class="navbar navbar-inverse" id="nav">
            <div class="container-fluid">
              <img id="img" src={logo} />
            </div>
          </nav>
        )
    }
}
export default appNavbar;