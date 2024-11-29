const express = require('express');
const {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNodeHttpEndpoint,
} = require('@copilotkit/runtime');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const serviceAdapter = new OpenAIAdapter({ openai });

app.use('/copilotkit', (req, res, next) => {
  const runtime = new CopilotRuntime();
  const handler = copilotRuntimeNodeHttpEndpoint({
    endpoint: '/copilotkit',
    runtime,
    serviceAdapter,
  });
  return handler(req, res, next);
});

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000/copilotkit');
});


