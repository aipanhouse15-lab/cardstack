import { LEARNING_COVERAGE } from './restoration/learning.js';
import { BLOG_COVERAGE } from './restoration/blog.js';
import { COMPARISON_COVERAGE } from './restoration/comparisons.js';
export const RESTORED_COVERAGE = {...LEARNING_COVERAGE, ...BLOG_COVERAGE, ...COMPARISON_COVERAGE};
