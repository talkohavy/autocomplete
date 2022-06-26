// 111111111111111111111111111111111111111
// ---------  Load Environment  ----------
const path = require('path');
let envVariables = process.env;
// Load environment variables:
if (process.env.NODE_ENV === 'development') {
  try {
    const result = require('dotenv').config({
      path: path.resolve(__dirname, `../envs/.env.development`),
    });
    if (result.error) throw result.error;
    envVariables = result.parsed;
  } catch (err) {
    console.log(`Mode is development but .env.development doesn't exist.`);
  }
}
if (process.env.NODE_ENV === 'production') {
  try {
    const result = require('dotenv').config({
      path: path.resolve(__dirname, `../envs/.env.production`),
    });
    if (result.error) throw result.error;
    envVariables = result.parsed;
  } catch (err) {
    console.log(`Mode is production but .env.production doesn't exist.`);
  }
}
const FRONTENDS = process.env.FRONTENDS?.split(',') || '';

console.log(`Mode: ${process.env.NODE_ENV}`);

// 222222222222222222222222222222222222222222222222
// ----- Connect to external servers/services -----

// 333333333333333333333333333333333333333333333333
// -------  important packages to require  --------
const express = require('express');
const { urlencoded } = require('body-parser');
const cors = require('cors');
const app = express();

// 444444444444444444444444444444444444444444444444
// ----------- important middlewares --------------
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: FRONTENDS,
    methods: ['GET', 'POST', 'PUT', 'PATCH'],
    credentials: true,
  })
);

// 5555555555555555555555555555555555555555555555555
// -------------- express routing ------------------
const {
  randomAdjectives,
  randomVerbs,
  randomNouns,
} = require('./utils/AAAConstants');
const searchBarSchema = require('./validationSchemas/searchBar');

app.post('/api/search', async (req, res) => {
  // Step 1: validate body
  const {
    value: { searchedText },
    error: errorMsg,
  } = searchBarSchema.validate(req.body);
  if (errorMsg) {
    console.error('Query validation failed...', errorMsg);
    return res.status(400).json({ error: true, errorMsg });
  }

  // step 2: check if empty, then return empty list
  if (!searchedText) return res.status(200).json({ data: [], error: false });

  // step 3: get autocomplete list
  const filteredList = randomNouns.filter((item) =>
    item.startsWith(searchedText)
  );

  // step 4: return data to user
  return res.status(200).json({ data: filteredList, error: false });
});

// 8888888888888888888888888888888888888888888888888
// --------------- Run the server ------------------
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
