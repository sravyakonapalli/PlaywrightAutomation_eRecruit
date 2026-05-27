import dotenv from 'dotenv';

dotenv.config();

const currentEnv = process.env.ENV || 'qa';

const environments: Record<string, string> = {
  qa: process.env.QA_URL || '',
  stage: process.env.STAGE_URL || '',
  prod: process.env.PROD_URL || '',
};

export const frameworkConfig = {
  environment: currentEnv,

  baseURL: environments[currentEnv],

  browser: process.env.DEFAULT_BROWSER || 'chromium',

  headless: process.env.HEADLESS === 'true',
};