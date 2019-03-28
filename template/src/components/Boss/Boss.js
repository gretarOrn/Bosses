import React from 'react';
import { connect } from 'react-redux';
import { getBossById, deleteBossById, updateBossById } from '../../actions/BossActions';

class Boss extends React.Component {
    componentDidMount(){
        this.props.getBossById(this.props.match.params.id);
    }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            img: ''
        }
    }
    
    deleteBoss(e) {
        e.preventDefault();
        const id = this.props.boss.id;
        this.props.deleteBossById(id);
        this.props.history.push('/bosses');
    }

    onInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateBoss(e) {
        e.preventDefault();
        let name, description, img;
        if(this.state.name != ''){
            name = this.state.name;
        } else {
            name = this.props.boss.name;
        }
        if(this.state.description != ''){
            description = this.state.description;
        } else {
            description = this.props.boss.description;
        }
        if(this.state.img != ''){
            img = this.state.img;
        } else {
            img = this.props.boss.img;
        }
        this.props.updateBossById(this.props.boss.id, {name, description, img});
    }

    render(){
        return (
            <div>
                <button type="button" onClick={e => this.deleteBoss(e)}>Delete boss</button>
                <h2>{this.props.boss.name}</h2>
                <img src={this.props.boss.img} alt={this.props.boss.name} className="detail-pic"/>
                <p>{this.props.boss.description}</p>
                <form onSubmit={e => this.updateBoss(e)} className="form-horizontal">
                <div className="form-goup">
                    <input type="text" name="name" id="name" placeholder="Name" onChange={e => this.onInput(e)}/>
                    <input type="text" name="img" id="img" placeholder="image URL" onChange={e => this.onInput(e)}/>
                    <textarea rows = "5" cols = "50" name = "description" id="description"  placeholder="Description" onChange={e => this.onInput(e)}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="update Boss" className="btn btn-primary" />
                </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ boss }) => {
    return {
        boss
    };
};

export default connect(mapStateToProps, { getBossById, deleteBossById, updateBossById })(Boss);