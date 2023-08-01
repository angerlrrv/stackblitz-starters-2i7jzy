import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';


const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 18,
    width: 18,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 10,
    background: 'unset',
    padding: 0,
    width: 18,
    height: 18,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const ChangeColorRgb = () => {
  const [value, setValue] = React.useState({
    red: 0,
    green:0,
    blue:0
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValue(prevState => ({
        ...prevState,
        [name]: value
    }));
};
  return (
    <>
     <Box sx={{ width: 300 }} style={{ background: `rgb(${value.red}, ${value.green}, ${value.blue})` }}>
     
     <Stack sx={{ height: 130 }} spacing={3} direction="column"  >
     <PrettoSlider
        min={0}
        max={255}
        valueLabelDisplay="on"
    
        orientation="horizontal" aria-label="Volume" name="red" value={value.red}  onChange={handleChange}
      />
      <PrettoSlider
        min={0}
        max={255}
          valueLabelDisplay="on"
        orientation="horizontal" aria-label="Volume" name="blue" value={value.blue}  onChange={handleChange}      />
      <PrettoSlider
          min={0}
          max={255}
          valueLabelDisplay="on"
    
          orientation="horizontal" aria-label="Volume" name="green" value={value.green}  onChange={handleChange}
      />
          
    
     </Stack>
    
   </Box>
   <Box sx={{mt:2}}>
   {JSON.stringify(value)}
     </Box>

    </>
   
  )
}

export default ChangeColorRgb