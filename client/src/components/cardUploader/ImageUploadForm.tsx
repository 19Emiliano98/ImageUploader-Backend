import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%', // Expande la anchura del input
  },
  input: {
    display: 'block',
    position: 'absolute',
    width: 498,
    height: 325,
    border: '1px dashed #97BEF4',
    margin: '312px 0px 0px -250px',
    //opacity: 0
  }
}));

export const ImageUploadForm: React.FC = () => {
  const classes = useStyles();

  const handleUpload = async (selectedImage:File | null) => {
    console.log(selectedImage);
    
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
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      
      handleUpload(selectedImage)
    }
  };
  
  return (
    <Box 
      className={classes.root}
      sx={{
        position: 'relative',
        width: 500,
        height: 340,
        margin: '0px auto',
        border: '1px dashed #97BEF4', borderRadius: '12px',
        backgroundColor: '#F6F8FB'
      }}
    >
      <Input
        type='file'
        classes={{ input: classes.input }}
        inputProps={{ 'aria-label': 'custom input' }}
        onChange={ handleImageChange }
        
      />
      <Box
        sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          mt: '3.5vh'
        }}
      >
        <AddPhotoAlternateOutlinedIcon sx={{ fontSize: '150px', color: '#BDBDBD' }}/>
        <Typography sx={{ fontSize: '20px', color: '#BDBDBD', fontWeight:600, mt: 5 }}>
          Drag & Drop your image here
        </Typography>
      </Box>

      {/* <Button onClick={handleUpload} sx={{ position: 'absolute' , mt: 17.5, ml: -8.8 }} variant='contained'>
        Upload Image
      </Button> */}
    </Box>
  );
}