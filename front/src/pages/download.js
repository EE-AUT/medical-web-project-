import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'


class Download extends Component {
    render(){
        console.log(this.props.isAuthenticated)
        const {isAuthenticated} = this.props.isAuthenticated
        return(
            { 
                ...isAuthenticated ?
                    <div className="FormCenter">
                        <label className="forgetPass-text"> is Authenticated True</label>
                    </div>
                :
                <div className="FormCenter">
                    <label className="forgetPass-text"> is Authenticated False</label>
                </div>
            }
        );
    }

}


const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}
  
  
const mapStateToProps = state => {
    // console.log(state.token)
    return{
      isAuthenticated: state.token !== null
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Download)

