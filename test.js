#!/usr/bin/env node

import {equal, deepEqual} from 'assert';
import older from './index.js';

const expected = true;
const actual = older('LICENSE', 'package.json');
equal(actual, expected);
