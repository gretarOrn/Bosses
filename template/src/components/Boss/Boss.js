import React from 'react';
import { connect } from 'react-redux';

class Boss extends React.Component {
    
    constructor(props) {
        super(props);
       }

    render(){
        return (
            <>
                <p>bla</p>
            </>
        );
    }
}

const mapStateToProps = ({ bosses }) => {
    return {
        bosses
    };
};

export default connect(mapStateToProps)(Boss);