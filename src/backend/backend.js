const express = require('express');
const app = express();
const port = 3000

// This POST method will store the contact info from the user
app.post('/storeContact', (req, res) => {
  const userData = req.userData;
  // NEXT STEPS we need to insert the elements of this array, userData, into a database:
  // we also need to email this data
})

// This POST method will store the checkbox info from the user
app.post('/storeCheckbox', (req, res) => {
    const cbData = req.cbData;
    // we need to insert the elements of this array, cbData, into a database:
    // we also need to email this data
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})