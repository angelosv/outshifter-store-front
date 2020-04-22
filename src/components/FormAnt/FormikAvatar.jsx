import React from 'react';
import injectSheet from 'react-jss';
import { fileToBase64 } from 'Util/Utils';
import { defaultAvatar } from 'Constants/defaultValues';

const styles = {
  button: {
    margin: '0 auto',
    display: 'flex',
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    marginTop: '1rem',
    cursor: 'pointer',
    borderRadius: 30,
    padding: '8px 0px',
    color: '#4A4A4A',
    fontSize: '0.7rem',
    boxShadow: 'rgba(50, 50, 93, 0.05) 0px 0px 0px 1px, rgba(50, 50, 93, 0.1) 0px 2px 5px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px',
    '@media screen and (min-width: 1024px)': {
      width: 150,
    },
  },
  inputFile: {
    visibility: 'hidden',
    width: 0,
    height: 0,
  },
  imgContainer: {
    width: 130,
    height: 'auto',
    margin: '0 auto',
    '@media screen and (min-width: 1024px)': {
      width: 150,
    },
  },
  image: {
    width: '100%',
    borderRadius: '50%',
  },
};

class FormikAvatar extends React.PureComponent {
  handleSubmit = async (evt) => {
    const { onUpload, name } = this.props;
    const file = evt.target.files[0];
    if (file && file.type && file.type.includes('image')) {
      const image = await fileToBase64(file);
      onUpload(name, image);
    }
  }

  render() {
    const { classes, value } = this.props;
    const img = value || defaultAvatar;
    return (
      <div>
        <div className={classes.imgContainer}>
          <img className={classes.image} src={img} alt="avatar" />
        </div>
        <div>
          <label htmlFor="avatar" className={classes.button}>
            Upload Picture
          </label>
          <input
            id="avatar"
            accept="image/*"
            className={classes.inputFile}
            type="file"
            onChange={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(FormikAvatar);
