import * as React from 'react';
import './style.css';
import { Button, Stack } from '@mui/material';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happening :)</p>
      <Stack direction="row">
        <Button variant="contained">kampret</Button>
      </Stack>
    </div>
  );
}
