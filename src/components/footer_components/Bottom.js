import React from 'react';

class Bottom extends React.Component{
    render(){
        let menu = this.props.menu();
        return (
            <div className="footer--bottom">
                <div className="footer--content container">
                    <nav className="footer--menu menu ">
                        {menu.map(function(val) {
                            if(val.id!==1){
                                return <a key={val.id} className="footer--menu-item" href={val.href}>{val.name}</a>;
                            }
                        })}
                    </nav>
                    <div className="footer--copyright">
                        © MadAppGang Pty Ltd, 2018
                    </div>
                </div>
            </div>
        );
    }
}

export default Bottom;
