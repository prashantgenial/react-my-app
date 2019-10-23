import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getParams } from '../store/actions/paramAction';

class Parameter extends Component {

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onChange = this.onParamChange.bind(this);
    }

    componentWillMount(){
       this.props.getParams('ALL');
    }

    onChange(e){
        //console.log(e.target.value);
        this.props.getParams(e.target.value);
    }

    onParamChange = (e) => {
        console.log(e.target.value);
       // this.props.getParams(e.target.value);
       //TODO: find object based on param name
      
       for (var i=0; i < this.props.params.length; i++) {
            if (this.props.params[i].name === e.target.value) {
                console.log(this.props.params[i])
                let param = this.props.params[i] ;
                document.getElementById("defaultVal").innerText = param.defaultVal;
                document.getElementById("description").value = param.desc;
                break;
            }
        }
    }

    render() {
        const paramsOption = this.props.params.map( (param,index) => (
                <option key={index}>{param.name.trim()}</option>
            ));

        return (
            <div>
                <form>
                    <label>Type:</label>
                    <select name="type" onChange={this.onChange}>
                        <option value="ALL">ALL</option>
                        <option value="INVENTORY">INVENTORY</option>
                    </select>
                    <br />
                    <label>Parameter Name:</label>
                    <select name="parameterList" onChange={this.onParamChange}>
                        <option value=""></option>
                        {paramsOption}
                    </select>
                    <div>
                        <p>
                            <span>Base Value</span><br />
                            <span>Value:</span><span id="defaultVal">0</span><br />
                            <span>From:</span><span>DEFAULT</span>
                        </p>
                        <p>
                            <input type="checkbox" checked/> <span>Override Base Value</span><br />
                            <span>Value:</span> <input type="text" name="val" />
                        </p>
                        <p>
                            <textarea height="500" width="300" id="description">Hello</textarea>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

const MapsToProps = state => ({
    params: state.parameters.params
});

export default connect(MapsToProps,{ getParams })(Parameter) ;