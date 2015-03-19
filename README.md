Package allows for easy usage of [Ractive](http://ractivejs.org)'s  component in Blaze's templates.
=================

It is based on avital:react-in-blaze package.

```
{{> RactiveComponent name='ComponentA' data=.}}
{{> RactiveComponent name='ComponentA' data=. class='cssClass1 cssClass2}}
```

Ractive instance is being created only when passed `data` is not null and not empty.