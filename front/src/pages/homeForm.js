import React, { Component } from 'react';
import axios from 'axios'

import * as actions from '../store/actions/auth'

class homeForm extends Component {

    constructor(props) {
        super(props);
    
        this.state={
            img: "http://zinogene.com/wp-content/uploads/2020/04/Social-Media-Video-Specs-Feature-Image.png",
            img2:null,
            Error_hidden:true
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    imageHandler = (e) =>{
        const reader = new FileReader();
        this.setState({
            img: e.target.files[0],
            img2:e.target.files[0]
        })
        reader.onload=()=>{
            if(reader.readyState===2){
                this.setState({img:reader.result})
            }
        }
        
        reader.readAsDataURL(e.target.files[0])

    
    };
    handleSubmit(e){
        e.preventDefault();
        if(this.state.img2===null){
            this.setState({
                Error_hidden:false  
            })
        }
        else{
            let form_data = new FormData();
            form_data.append('pic', this.state.img2, this.state.img2.name);
            let url = 'http://localhost:8000/api_image/create/';
            axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization' : 'token '.concat(localStorage.getItem('token'))
            }
            })
            .then(res => {
            console.log(res.data);
            })
            .catch(err => console.log(err.response))
            this.setState({
                Error_hidden:true
            })
        }
    };

    render() {
        const { img } = this.state
        return (
        <form className="homefields" onSubmit={this.handleSubmit}>
            <div className="custom-file" >
                <div className="img-holder" hidden={actions.tokenConvertor(localStorage.getItem('token'))? false : true} >
                    <img src={img}  alt="" className="img"></img>
                </div>
                    <label className="fileCustom__Input" hidden={actions.tokenConvertor(localStorage.getItem('token'))? false : true}>
                        <input type="file" id="customFile" accept="image/*" onChange={this.imageHandler}/>
                    </label>

                <button  className="FormField__Button mr-20" hidden={actions.tokenConvertor(localStorage.getItem('token'))? false : true} > Analysis </button>
                <label className="errorMassage_Image"  hidden={this.state.Error_hidden}>Please upload your image first</label>
            </div>
            <label hidden={actions.tokenConvertor(localStorage.getItem('token'))? true : false}>Welcome Please sign up or sign in</label>

        </form>
        );
    }
}

export default homeForm
  

