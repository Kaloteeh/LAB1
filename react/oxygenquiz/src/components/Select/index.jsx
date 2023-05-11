import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'hard',
    label: 'Hard',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'easy',
    label: 'Easy',
  },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="DIFFICULTY"
          defaultValue="EUR"
          helperText="Select the difficulty of the question"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      
      
    </Box>
  );
}