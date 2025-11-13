const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, uploadDir) },
  filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname) }
});
const upload = multer({ storage });

app.use('/images', express.static(uploadDir));
app.post('/upload', upload.single('image'), (req, res) => {
  if(!req.file) return res.status(400).send('No file');
  res.json({ url: `/images/${req.file.filename}` });
});

app.get('/latest', (req, res) => {
  const files = fs.readdirSync(uploadDir).map(f => ({f, t: fs.statSync(path.join(uploadDir,f)).mtime})).sort((a,b)=>b.t-a.t);
  if(files.length===0) return res.json({url: null});
  res.json({ url: `/images/${files[0].f}`});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>console.log('Server running on', PORT));
