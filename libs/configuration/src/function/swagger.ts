import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NXiE API [nxie.uk]')
    .setLicense('NXi License', 'https://license.nxie.uk')
    .setVersion('1.0')
    // .setDescription(
    //   'Everything provided by the NXiE API, can be accessed through our SaaS. Both provide Services for the M³ Blockchain, with little to no configuration required.',
    // )
    // .setContact('M³ Support Team', 'mailto:support@metacubic.org', '')
    // .setTermsOfService('https://metacubic.org/terms')
    // .setExternalDoc('M³ Documentation', 'https://docs.metacubic.org')
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    // .addGlobalParameters({
    //   name: 'Authorization',
    //   in: 'header',
    //   description: 'Bearer Token',
    //   required: true,
    // })
    .addSecurityRequirements('bearer')
    .addBearerAuth()
    .addTag('NXiE Core Api', '[nxie.uk]')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const extraOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customFavicon: 'https://metacubic.org/favicon.ico',
    customSiteTitle: 'M³ BaaS API',
    swaggerUrl: 'https://api.metacubic.org/v1',
    validatorUrl: 'https://api.metacubic.org/v1',
    url: 'https://api.metacubic.org/v1',
    urlsPrimaryName: 'Production',
    plugins: [
      {
        name: 'MyPlugin',
      },
    ],
    spec: document,
    urls: [
      {
        url: 'https://api.metacubic.org/v1',
        name: 'Production',
      },
      {
        url: 'https://api.metacubic.org/v1',
        name: 'Development',
      },
    ],
    deepLinking: true,
    filter: true,
  };
  SwaggerModule.setup('/v1', app, document, extraOptions);
}
