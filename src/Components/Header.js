import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <header className="bg-light font-small black pb-2 mb-5">
                <div className="header text-center py-3">
                    <h1>The Cat React App</h1>
                </div>
            </header>
        );
    }
}

export default Header;
