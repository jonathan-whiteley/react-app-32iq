const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: `${__dirname}/uploads/`,
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);

  }
})

const uploadImage = multer({ storage }).single('photo');

app.use(cors());
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.send('Hello World from Uppy!')
// })

// middleware to handle upload
app.post('/image', uploadImage, (req, res) => {
    console.log(req.file);
    if(req.file) return res.json({msg: 'upload image success'});

    res.send('Image upload failed');
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  })

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});