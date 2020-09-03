import React, { Component } from 'react';


class homeForm extends Component {
    state = {
        img: "http://zinogene.com/wp-content/uploads/2020/04/Social-Media-Video-Specs-Feature-Image.png"
    }

    imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState===2){
                this.setState({img:reader.result})
                // console.log(e.target.files[0])

            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render() {
        const { img } = this.state
        return (
            <div className="custom-file">
                <div className="img-holder">
                    <img src={img}  alt="" className="img"></img>
                </div>
                    <label className="fileCustom__Input">
                        <input type="file" id="customFile" accept="image/*" onChange={this.imageHandler}/>
                    </label>

                <input type="submit" value='Upload' className="FormField__Button mr-20" />

            </div>

        );
    }
}

export default homeForm;
