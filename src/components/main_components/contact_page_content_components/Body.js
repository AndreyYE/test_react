import React from 'react';
import CustomForm from './body_components/CustomForm';
import Next from './body_components/Next';

class Body extends React.Component{
    render(){
        return (
            <div className="contacts-page--body">
                <CustomForm handleEmail={this.props.handleEmail}/>
                <Next />
            </div>
        );
    }
}

export default Body;
