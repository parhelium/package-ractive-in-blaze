Package.describe({
  name: 'parhelium:ractive-in-blaze',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

client = ['client'];
server = ['server'];
both   = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use([
      'parhelium:ractive-templating',
  ], client);

  api.addFiles( [
      'lib/ractive-component.html',
      'lib/ractive-component.js',
  ], client);

  //api.export('RactiveComponent', client)
});

