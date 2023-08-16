import React, { useState } from 'react';

import { Input } from '@mui/material';
import Button from '@mui/material/Button';

const ImageUploadForm: React.FC = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await fetch('http://localhost:8080/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Image uploaded successfully');
        } else {
          console.error('Failed to upload image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className={classes.root}>
      <Input 
        type="file"
        onChange={handleImageChange}
        endAdornment
        disableUnderline
        classes={{ input: classes.input }}
        inputProps={{ 'aria-label': 'custom input' }}
        sx={{
          //position: 'absolute',
          width: '338px',
          height: '218.903px',
          borderRadius: '12px',
          border: '1px dashed #97BEF4'
        }}
      />
      <Button onClick={handleUpload} variant="contained">Upload Image</Button>
    </div>
  );
};

export default ImageUploadForm;