import React from 'react';
import { connect } from 'react-redux';

class Bosses extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render(){
        var items = this.props.bosses.map((item, key) => 
            <div key={item.id}>{item.name}</div>
        );
        return (
            <>
                <p>hérna koma bosses</p>
                {items}
            </>
        );
    }
}

const mapStateToProps = ({ bosses }) => {
    return {
        bosses
    };
};

export default connect(mapStateToProps)(Bosses);