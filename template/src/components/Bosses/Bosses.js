import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom';

class Bosses extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render(){
        var items = this.props.bosses.map((item, key) => 
            <div key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.img} alt={item.name} className="thumb-nail"/>
                <Link to={ '/bosses/' + item.id }>linkur</Link>
            </div>
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