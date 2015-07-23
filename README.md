[Ractive](http://ractivejs.org)'s  component in [Blaze](http://meteor.github.io/blaze/)'s templates.
=================

Package allows for easy usage of [Ractive](http://ractivejs.org)'s  component in [Blaze](http://meteor.github.io/blaze/)'s templates.

It is based on [avital:react-in-blaze](https://atmospherejs.com/avital/react-in-blaze) package.

## Usage

### Using in Blaze's template

```
{{> RactiveComponent name='ComponentA' data=.}}
{{> RactiveComponent name='ComponentA' data=. class='cssClass1 cssClass2'}}
{{> RactiveComponent name='ComponentA' data=. options=ractiveComponentOptions class='cssClass1 cssClass2'}}
```

### Preparing [Ractive](http://ractivejs.org)'s component


**path/ComponentA.js** :

```
ComponentA = Ractive.extend({})
```

**path/ComponentA.ract** :

```
I'm ComponentA
```



[Ractive](http://ractivejs.org) instance is being created only when passed `data` is not null and not empty.
Parameter `options` allows to configure Ractive component.