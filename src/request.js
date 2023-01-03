const axios = require('axios');

const BASE = 'http://localhost:3030';
const pathname = '/IndexHtml';
const search = '?toCase=KEBAB';

const href = BASE + pathname + search;

axios.get(href);
