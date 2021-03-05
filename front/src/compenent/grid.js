import React, {Component} from 'react';
import './grid.css';
import sample from '../views/2.mp4';
import {Link} from 'react-router-dom';

class grid extends Component {
    render() {
        return (
            <div class="vid-container">
                <video class="bgvid" autoplay="autoplay" muted="muted" preload="auto" loop>
                    <source src={sample} type="video/webm"/>
                </video>
                <div class="inner-container">
                    <div class="box">
                        <h1>Signup</h1>
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Password"/>
                        <Link to='/Category' style={{textDecoration: 'none'}}>
                            <button>Signup</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default grid;