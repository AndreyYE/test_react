import React from 'react';
import Header from './contact_page_content_components/Header';
import Body from './contact_page_content_components/Body'

class ContactPageContent extends React.Component{
    render(){
        return (
            <div className="contacts-page--content container">
                <Header />
                <Body handleEmail={this.props.handleEmail}/>
            </div>
        );
    }
}

export default ContactPageContent;
