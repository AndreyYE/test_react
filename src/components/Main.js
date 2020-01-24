import React from 'react';
import ContactPageContent from './main_components/ContactPageContent';
import ContentPageVisit from './main_components/ContactPageVisit';
import Popup from './main_components/Popup';
import ErrorSendEmail from './main_components/ErrorSendEmail';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            EmailSuccess: 0,
            EmailError: 0,
        };

        this.handleSuccessEmail = this.handleSuccessEmail.bind(this);
        this.handleErrorEmail = this.handleErrorEmail.bind(this);
        this.handleRemoveModalWindowEmail = this.handleRemoveModalWindowEmail.bind(this);
    }

    handleSuccessEmail(){
        this.setState(prevState => ({
            EmailSuccess: 1,
            EmailError: 0
        }));
        document.body.style.overflow = 'hidden';
    }

    handleErrorEmail(){
        this.setState(prevState => ({
            EmailError: 1,
            EmailSuccess: 0
        }));
        document.body.style.overflow = 'hidden';
    }
    handleRemoveModalWindowEmail(){
        this.setState(prevState => ({
            EmailError: 0,
            EmailSuccess: 0
        }));
        document.body.style.overflow = 'auto';
    }
    render(){
        return (
            <div className="page-wrapper">
                <section className="contacts-page">
                    <ContactPageContent handleEmail={{"success":this.handleSuccessEmail, "error":this.handleErrorEmail}}/>
                    <ContentPageVisit />
                    {this.state.EmailSuccess?<Popup handleRemoveModalWindowEmail={{"handleRemoveModalWindowEmail":this.handleRemoveModalWindowEmail}}/>:''}
                    {this.state.EmailError?<ErrorSendEmail handleRemoveModalWindowEmail={{"handleRemoveModalWindowEmail":this.handleRemoveModalWindowEmail}}/>:''}
                </section>
            </div>
        );
    }
}

export default Main;
