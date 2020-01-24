import React from 'react';
import {Form, Field} from 'react-final-form';

class CustomForm extends React.Component{

   constructor(props){
       super(props);
       this.state = {errors: {}};
   }
    async onSubmit(values){

        let response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(values)
        });
        let result = await response.text();

        if(result==='success'){
            this.props.handleEmail.success();
       }else if(result==='error'){
            this.props.handleEmail.error();
       }
    }

    render(){
        return(
            <Form
                onSubmit={this.onSubmit.bind(this)}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <div className="contact--form-wrapper">
                        <form onSubmit={handleSubmit} className="contact--form" name="getintouch">
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Name"
                                className="contact--form-input"
                                required
                            />
                            <Field
                                name="email"
                                component="input"
                                type="email"
                                placeholder="E-mail"
                                className="contact--form-input"
                                required

                            />
                            <Field
                                name="message"
                                component="textarea"
                                placeholder="Message"
                                className="contact--form-input"
                            />

                            <button type="submit" className={'link-button dark wide'}>
                                SEND
                            </button>
                        </form>
                    </div>
                )}
            />
        );
    }
}


export default CustomForm;
