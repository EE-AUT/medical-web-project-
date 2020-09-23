import React, { Component } from 'react';
import axios from 'axios'

import * as actions from '../store/actions/auth'

class homeForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "http://zinogene.com/wp-content/uploads/2020/04/Social-Media-Video-Specs-Feature-Image.png",
            img2: null,
            Error_hidden: true,
            Diagnosis:"",
            isUser: actions.tokenConvertor(localStorage.getItem('token')) ? false : true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        this.setState({
            img: e.target.files[0],
            img2: e.target.files[0]
        })
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ img: reader.result })
            }
        }

        reader.readAsDataURL(e.target.files[0])


    };
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.img2 === null) {
            this.setState({
                Error_hidden: false
            })
        }
        else {
            let form_data = new FormData();
            form_data.append('pic', this.state.img2, this.state.img2.name);
            let url = 'http://localhost:8000/api_image/create/';
            axios.post(url, form_data, {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': 'token '.concat(localStorage.getItem('token'))
                }
            })
                .then(res => {
                    // console.log(res.data.result);
                    this.setState({
                        Diagnosis:res.data.result
                    })

                })
                .catch(err => console.log(err.response))
                    this.setState({
                        Error_hidden: true
            })
        }
    };

    render() {
        const { img } = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="custom-file" >
                    <div className="img-holder" hidden={this.state.isUser} >
                        <img src={img} alt="" className="img"></img>
                    </div>
                    <label className="fileCustom__Lable" hidden={this.state.isUser}>
                        <input type="file" id="customFile" className="fileCustom__Input" accept="image/*" onChange={this.imageHandler} />
                    </label>

                    <button className="FormField__Button mr-20" hidden={this.state.isUser} > Analysis </button>
                    <label className="errorMassage_Image" hidden={this.state.Error_hidden}>Please upload your image first</label>
                    <div className="Diagnosis_holder" hidden={this.state.Diagnosis==="" ? true :false}>
                    <label className="Diagnosis" >{this.state.Diagnosis}</label>

                </div>
                </div>
         
                <div className="homePage_isNotUser" >
                    <label hidden={!this.state.isUser}>Welcome Please sign up or sign in</label>
                </div>
                <div className="exmaple">
                    <h1  hidden={this.state.isUser} > Examples :</h1></div>
                <div className="imgs_Example"  >
                    <div   className='img_Example_holder' hidden={this.state.isUser}>
                        <a href="https://i.ibb.co/V37n938/IMG-20200920-190524-105.jpg">
                            <img src="https://i.ibb.co/V37n938/IMG-20200920-190524-105.jpg" alt="" className="img_Example" border="0">
                            </img></a>                  </div>
                    <div className='img_Example_holder'  hidden={this.state.isUser}>
                        <a  href="https://i.ibb.co/PmyxDQx/IMG-20200920-190525-719.jpg">
                            <img src="https://i.ibb.co/PmyxDQx/IMG-20200920-190525-719.jpg" alt="" className="img_Example" border="0">
                            </img></a>                  </div>
                    <div className='img_Example_holder'  hidden={this.state.isUser} >
                        <a href="https://i.ibb.co/C0DJ2X4/IMG-20200920-190521-736.jpg">
                            <img src="https://i.ibb.co/C0DJ2X4/IMG-20200920-190521-736.jpg" alt="" className="img_Example" border="0">
                            </img></a>
                    </div></div>
            </form>
        );
    }
}

export default homeForm


