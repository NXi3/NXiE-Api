import { NestFactory } from '@nestjs/core';
import { OpenaiModule } from './openai.module';
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
async function bootstrap() {

  const app = await NestFactory.create(OpenaiModule);

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "This is a test",
    max_tokens: 5,
    temperature: 0.9,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    stop: [" Human:", " AI:"],
  });

  await app.listen(3023);

  console.log(response.data);
}
void bootstrap();
