import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';

export default class HomeScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
          file: '',
          imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
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
  
      reader.readAsDataURL(file)
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

        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <Card className='center'>
                        <form onSubmit={(e)=>this._handleSubmit(e)}>

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
                                className='center'
                                type='submit'
                                label='Upload Image'
                                secondary={true}
                                onClick={(e)=>this._handleSubmit(e)}
                            />

                            <br />

                        </form>
                    </Card>
                </div>
            </div>
        </div>
      )
    }
  }