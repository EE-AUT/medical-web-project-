import React, { Component } from 'react';
import axios from 'axios'

import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

class homeForm extends Component {

    constructor(props) {
        super(props);
    
        this.state={
            img: "http://zinogene.com/wp-content/uploads/2020/04/Social-Media-Video-Specs-Feature-Image.png"
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    imageHandler = (e) =>{
        // const reader = new FileReader();
        this.setState({
            img: e.target.files[0]
        })
        // reader.onload=()=>{
        //     if(reader.readyState===2){
        //         this.setState({img:reader.result})
        //         console.log(e.target.files[0])

        //     }
        // }
        
        // reader.readAsDataURL(e.target.files[0])

    
    };
    handleSubmit(e){
        e.preventDefault();

        let form_data = new FormData();
        form_data.append('pic', this.state.img, this.state.img.name);
        let url = 'http://localhost:8000/api_image/create/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data',
            'Authorization' : 'token af62fa35531191e8bf922435cca0a43cb25e5c5e'
          }
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err.response))

    };

    render() {
        // console.log(this.props.isAuthenticated)
        const { img } = this.state
        const {isAuthenticated} = this.props.isAuthenticated

        return (
        <form className="homefields" onSubmit={this.handleSubmit}>

            <div className="custom-file">
                <div className="img-holder">
                    <img src={img}  alt="" className="img"></img>
                </div>
                    <label className="fileCustom__Input">
                        <input type="file" id="customFile" accept="image/*" onChange={this.imageHandler}/>
                    </label>

                <button  className="FormField__Button mr-20" > Analysis </button>

            </div>
        </form>

        );
    }
}


// const mapDispatchToProps = dispatch => {
//     return {
//       onTryAutoSignup: () => dispatch(actions.authCheckState())
//     }
// }
  
  
const mapStateToProps = state => {
    return{
      isAuthenticated: state.token !== null
    }
}
  
export default connect(mapStateToProps)(homeForm)
  

