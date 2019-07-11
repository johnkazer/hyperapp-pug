const express = require('express');
const { body, param, query, validationResult } = require('express-validator/check')
const { sanitizeBody, sanitizeParam, sanitizeQuery } = require('express-validator/filter')
const router = express.Router();

// build API here

module.exports = router;
