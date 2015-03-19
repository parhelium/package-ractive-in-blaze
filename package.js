Package.describe({
  name: 'parhelium:ractive-in-blaze',
  version: '0.0.3_1',
  summary: 'Allows for easy injection of Ractive component to Blaze templates.',
  git: 'https://github.com/parhelium/package-ractive-in-blaze',
  documentation: 'README.md'
});

client = ['client'];
server = ['server'];
both   = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use([
      'templating',
      'parhelium:templating-ractive@0.6.0_3',
      'hb5:meteor-is.js@0.0.1'
  ], client);

  api.imply([
      'parhelium:templating-ractive',
  ], client);

  api.addFiles( [
      'lib/ractive-component.html',
      'lib/ractive-component.js'
  ], client);

  api.export('RactiveComponent', client)
});

