import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postBoss } from '../../actions/BossActions';

class Bosses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bossInfo: {
                bossName: "",
                bossDescription: "",
                bossImage: ""
            }
        }
    }
    onInput(e) {
        this.setState({
            bossInfo:{
                ...this.state.bossInfo,
                [e.target.name]: e.target.value
            }
        });
    }

    addBoss(e){
        e.preventDefault();
        if( this.state.bossInfo.bossName !== "" &&
            this.state.bossInfo.bossDescription !== "" &&
            this.state.bossInfo.bossImage !== ""){

            this.props.postBoss({ 
                name: this.state.bossInfo.bossName, 
                description: this.state.bossInfo.bossDescription, 
                img: this.state.bossInfo.bossImage
            })
        }
        else {
            alert('All fields are required!');
        }
    }

    render(){
        var items = this.props.bosses.map((item, key) =>
            <div key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.img} alt={item.name} className="thumb-nail"/>
                <Link to ={'/bosses/' + item.id }>more about {item.name}</Link>
            </div>
        );
        return (
            <>
                <label htmlFor="bossCreation">Add a boss to the collection!</label>
                <form name="bossCreation" onSubmit={ e => this.addBoss(e) }>
                    <input type="text" name="bossName" placeholder="Enter new boss name.." value={this.state.bossInfo.bossName} onChange={e => this.onInput(e)}/>
                    <input type="text" name="bossDescription" placeholder="Enter new boss description.."value={this.state.bossInfo.bossDescription} onChange={e => this.onInput(e)}/>
                    <input type="text" name="bossImage" placeholder="Enter new boss image url.."value={this.state.bossInfo.bossImage} onChange={e => this.onInput(e)}/>
                    <button type="submit" > Submit </button>
                </form>
                <p>All Megaman bosses</p>
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

export default connect(mapStateToProps, { postBoss })(Bosses);
