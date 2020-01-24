import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import HeaderFooterMenu from './components/HeaderFooterMenu';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            menu: HeaderFooterMenu
        };
    }
    render(){
        return (
            <div style={{outline:"none"}} >
                <div>
                    <Header menu={this.state.menu}/>
                    <Main />
                    <Footer  menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}

export default App;
