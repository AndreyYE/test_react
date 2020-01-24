import React from 'react';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            MenuMobile: 0
        };
    }
    openMobileMenu(){
        console.log(1111111111);
        document.body.style.overflow='hidden';
        this.setState(prevState => ({
            MenuMobile: prevState.MenuMobile?0:1
        }));
    }
    render(){
        let menu = this.props.menu();
        return (
            <header className="header">
                <div className="header--content container">
                    <a className="header--logo" href="/">Madappgang</a>
                    <nav className={`header--menu menu ${this.state.MenuMobile?'opened':''}`}>
                        {menu.map(function(val) {
                            if(val.id===1) {
                                return <a key={val.id} className="header--menu-item mobile--menu-item" href={val.href}>{val.name}</a>;
                            }else{
                                return <a key={val.id} className="header--menu-item" href={val.href}>{val.name}</a>;
                            }
                        })}
                    </nav>
                    <div className={`header--menu-mobile ${this.state.MenuMobile?'opened':''}`} onClick={this.openMobileMenu.bind(this)}><span></span></div>
                    <a aria-current="page" className="header--link link-button blue" href="/">Get in Touch</a>
                </div>
            </header>
        );
    }
}

export default Header;
