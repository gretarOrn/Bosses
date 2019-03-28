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
            },
            errorInfo: {
                nameError: "",
                descriptionError: "",
                imageError: ""
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
    validate(){
        const setErrors = {};
        if(this.state.bossInfo.bossName === "") {setErrors.nameError = "The name field is required!"};
        if(this.state.bossInfo.bossDescription === "") {setErrors.descriptionError = "The description field is required!"};
        if(this.state.bossInfo.bossImage === "") {setErrors.imageError = "The image field is required!"};
        if(Object.keys(setErrors).length > 0){
            this.setState({...this.state.errorInfo, setErrors});
            return false;
        }
        return true;
    }
    addBoss(e){
        e.preventDefault();
        if(this.validate()){
            this.props.postBoss({ 
                name: this.state.bossInfo.bossName, 
                description: this.state.bossInfo.bossDescription, 
                img: this.state.bossInfo.bossImage
            })
        }
        else {
            alert(this.state.errorInfo.nameError);
            alert(this.state.errorInfo.descriptionError);
            alert(this.state.errorInfo.imageError);
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

export default connect(mapStateToProps, { postBoss })(Bosses);
