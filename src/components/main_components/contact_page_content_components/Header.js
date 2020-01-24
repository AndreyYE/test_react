import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className="contacts-page--head section--head">
                <h1 className="section--title">
                    Get in touch
                </h1>
                <div className="section--subtitle">
                    Let us know <br/>
                    how we can help
                </div>
            </div>
        );
    }
}

export default Header;
