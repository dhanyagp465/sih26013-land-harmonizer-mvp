const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, 'data');

function readJSON(name) {
  const p = path.join(dataDir, name);
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

app.get('/api/parcels/before', (req, res) => {
  res.json(readJSON('parcels_before.geojson'));
});

app.get('/api/parcels/after', (req, res) => {
  res.json(readJSON('parcels_after.geojson'));
});

app.get('/api/conflicts', (req, res) => {
  res.json(readJSON('conflicts.json'));
});

app.get('/api/parcels/:id', (req, res) => {
  const id = req.params.id;
  const after = readJSON('parcels_after.geojson');
  const found = after.features.find(f => f.properties.parcel_id === id);
  if (!found) return res.status(404).json({error: 'Not found'});
  const audit = readJSON('audit_logs.json')[id] || [];
  res.json({feature: found, audit});
});

app.get('/api/parcels/:id/audit', (req, res) => {
  const id = req.params.id;
  const audit = readJSON('audit_logs.json')[id] || [];
  res.json(audit);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Mock API server running on http://localhost:${port}`));
