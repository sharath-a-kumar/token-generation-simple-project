
// src/App.js
import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography, Box } from '@mui/material';
import './styles.css';

function App() {
  const [blueTokenCount, setBlueTokenCount] = useState(0);
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(1);
  const [redTokenCount, setRedTokenCount] = useState(0);
  const [redTokenPrefix, setRedTokenPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState(1);
  const [tokens, setTokens] = useState({ blueTokens: [], redTokens: [] });

  const handleGenerate = () => {
    const blueTokens = Array.from({ length: blueTokenCount }, (_, i) => `${blueTokenPrefix}${i + 1}`);
    const redTokens = Array.from({ length: redTokenCount }, (_, i) => `${redTokenPrefix}${i + 1}`);
    
    setTokens({ blueTokens, redTokens });
  };
  
  const handleClear = () => {
    setBlueTokenCount(0);
    setBlueTokenPrefix('');
    setBlueTokensPerRow(1);
    setRedTokenCount(0);
    setRedTokenPrefix('');
    setRedTokensPerRow(1);
    setTokens({ blueTokens: [], redTokens: [] });
  };

  const renderTokens = (tokens, tokensPerRow, color) => {
    return (
      <Box
        className="token-container"
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${tokensPerRow}, 1fr)`,
          gap: '5px',
        }}
      >
        {tokens.map((token, index) => (
          <Box
            key={index}
            className={`token ${color}-token`}
            sx={{
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: color === 'blue' ? 'blue' : 'red',
              color: 'white',
              border: '1px solid black',
              borderRadius: '4px',
            }}
          >
            {token}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Container maxWidth="sm" className="container">
      <Typography variant="h4" align="center" gutterBottom>
        Token Generator
      </Typography>

      <Grid container spacing={2}>
        {/* Blue Tokens */}
        <Grid item xs={12}>
          <TextField
            label="Number of blue tokens"
            type="number"
            fullWidth
            value={blueTokenCount}
            onChange={(e) => setBlueTokenCount(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Prefix for blue tokens"
            type="text"
            fullWidth
            value={blueTokenPrefix}
            onChange={(e) => setBlueTokenPrefix(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Blue tokens per row"
            type="number"
            fullWidth
            value={blueTokensPerRow}
            onChange={(e) => setBlueTokensPerRow(Number(e.target.value))}
          />
        </Grid>

        {/* Red Tokens */}
        <Grid item xs={12}>
          <TextField
            label="Number of red tokens"
            type="number"
            fullWidth
            value={redTokenCount}
            onChange={(e) => setRedTokenCount(Number(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Prefix for red tokens"
            type="text"
            fullWidth
            value={redTokenPrefix}
            onChange={(e) => setRedTokenPrefix(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Red tokens per row"
            type="number"
            fullWidth
            value={redTokensPerRow}
            onChange={(e) => setRedTokensPerRow(Number(e.target.value))}
          />
        </Grid>

        {/* Buttons */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleGenerate} sx={{ marginRight: '10px' }}>
            Generate
          </Button>
          <Button variant="contained" color="error" onClick={handleClear}>
            Clear
          </Button>
        </Grid>

        {/* Display Tokens */}
        <Grid item xs={12}>
          <Typography variant="h5">Blue Tokens</Typography>
          {renderTokens(tokens.blueTokens, blueTokensPerRow, 'blue')}

          <Typography variant="h5">Red Tokens</Typography>
          {renderTokens(tokens.redTokens, redTokensPerRow, 'red')}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
