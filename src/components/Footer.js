import React from 'react';
import Top from './footer_components/Top';
import Bottom from './footer_components/Bottom';


class Footer extends React.Component{
    render(){
        return (
            <footer className="footer">
                <Top />
                <Bottom menu={this.props.menu}/>
            </footer>
        );
    }
}

export default Footer;
