import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }
  
    _handleSubmit(e) {
        e.preventDefault();
        // do something with this.state.file like send it to the api.
        console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        if (file) {
            reader.readAsDataURL(file)
        } else {
            return null;
        }
    }
  
    render() {

        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = (
                <img 
                    style={{
                        marginTop : '10px',
                        height: '350px',
                        width: '350px',
                        borderRadius: '100%',
                        border: 'solid white 5px',
                        objectFit: 'cover'
                    }} 
                    alt='' 
                    src={imagePreviewUrl} 
                />
            );
        } else {
            $imagePreview = (
                <img 
                    style={{
                        marginTop : '10px',
                        height: '350px',
                        width: '350px',
                        borderRadius: '100%',
                        border: 'solid white 5px',
                        objectFit: 'cover'
                    }} 
                    alt='' 
                    src={'img/avatar.png'} 
                />
            );
        }
  
      return (
        <div className='outer-div'>
            <form className='inner-div' onSubmit={(e)=>this._handleSubmit(e)}>
                <h3>Upload an image</h3>
                <div>
                    {$imagePreview}
                </div>

                <input 
                    type="file" 
                    onChange={(e)=>this._handleImageChange(e)} 
                />

                <br /> 
                <br />

                <RaisedButton 
                    type='submit'
                    label='Upload Image'
                    secondary={true}
                    onClick={(e)=>this._handleSubmit(e)}
                />
            </form>
        </div>
      )
    }
  }