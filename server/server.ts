const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('*', (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
