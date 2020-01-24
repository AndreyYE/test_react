import React from 'react';

class ErrorSendEmail extends React.Component{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return (
            <div className="popup--wrapper">
                <div className="popup--content popup--content-result">
                    <h3>Your message could not be delivered. Еry later</h3>
                    <div className="link-button dark wide popup-content--ok" onClick={this.props.handleRemoveModalWindowEmail.handleRemoveModalWindowEmail}>OK</div>
                </div>
            </div>
        );
    }
}

export default ErrorSendEmail;
