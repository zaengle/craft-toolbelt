# The Stash

Stash provides a simple and efficient way to store and retrieve data in memory over the course of a request. It's useful for storing data that needs to be accessed multiple times in a single request, without having to re-fetch it each time from the DB, or drill it down through props / params passed to includes or other component patterns.

## Using the Stash

The Stash is accessible either via the global `stash` object in Twig, or via the `craft.toolbelt.stash()` template variable. Both are references to the same service, and provide the same API.

### Quick API reference

```twig
{{ stash.set('key.optionaly.in.dot.notation', value) }}
{{ stash.get('key.optionaly.in.dot.notation', optionalDefaultValue) }}
{{ stash.push('key.optionaly.in.dot.notation', value2) }}
{{ stash.pop('key.optionaly.in.dot.notation') }}
{{ stash.has('key.optionaly.in.dot.notation') }}
{{ stash.drop('key.optionaly.in.dot.notation') }}
{{ stash.clear() }}
{{ stash.getAll() }}
{{ stash.getKeys() }}
{{ stash.getValues() }}
{{ stash.getCount() }}
```

See below for more detailed information on each method.


## Stashing and retrieving values

Values can be added to the stash using the `set()` method and retrieved using `get()`. The value can be any valid PHP value, though it's safest to stick to primitive values and instances / collections of models. Stashing something like a singleton service instance is probably a bad idea and may lead to unexpected effects. It also really shouldn't ever be necessary.

```twig
{{ stash.set('areApplesNice', true) }} 

{# then later, in some other template... #}

{{ dump(stash.get('areApplesNice')) }}
{# `true` #}
```

### Default values

The `get()` method also accepts an optional second argument, which will be returned if the key does not exist in the stash. This can be useful for providing a default value for a key that may or may not be set.

```twig
{{ dump(stash.get('keyThatDoesntExist', 'default value')) }}
{# `default value` #}
```


## Pushing and popping values

The stash also supports a stack-like interface, allowing you to `push()` and `pop()` values onto and off of a named stack. This can be useful for storing and retrieving values in collection that you will want to manipulate or iterate over later.

### Push / pop example:

```twig
{{ stash.push('myStack', 'first') }}
{{ stash.push('myStack', 'second') }}
{{ stash.push('myStack', 'third') }}

{{ dump(stash.pop('myStack')) }}
{# `third` #}
{{ dump(stash.pop('myStack')) }}
{# `second` #}
{{ dump(stash.pop('myStack')) }}
{# `first` #}
```
Stacks are created on demand, so you don't need to worry about creating them before you use them. If you `push()` to a stack that doesn't exist, it will be created for you using a Laravel Collection. If you initialise a stack with an empty array using `set()` first, that array will be used as the initial/return value. Attempting to `push()` or `pop()` to a previously initialized non-array or non-Collection value will throw an exception.

### Push-then-iterate example

```twig
{{ stash.push('myStack', { name: 'Phil', hasGoodHair: false }) }}
{{ stash.push('myStack', { name: 'Patrick', goodHair: true }) }}
{{ stash.push('myStack', { name: 'Tom', hasGoodHair: false }) }}

{# stash.get('myStack') is automatically created as a collection, so we can use collection methods on it, as well as iterate over it #}
{% for person in stash.get('myStack').filter((person) => person.hasGoodHair == false) %}
    {{ person.name }}
{% endfor %}
{# `Phil` `Tom`  #}
```



## Deleting values and clearing the stash

Values can be removed from the stash using the `drop()` method, which will remove the value at the specified key. The `clear()` method will remove all values from the stash.

```twig
{{ stash.drop('key') }}
{{ stash.clear() }}
```


## Checking for the existence of a value

You can check if a value exists in the stash using the `has()` method. This will return `true` if the value exists, and `false` if it does not.

```twig
{{ stash.has('key') }}
```

## Getting everything, all keys, values, and the count

You can get a shallow array copy of the current stash state, of all keys, or of all values, or the count of values in the stash using the `getAll()`,  `getKeys()`, `getValues()`, and `getCount()` methods respectively:

```twig
{{ stash.getAll() }} / {{ stash.all }} - returns a shallow copy of the current stash state
{{ stash.getKeys() }} / {{ stash.keys }} - returns an array of all keys in the stash
{{ stash.getValues() }} / {{ stash.values }} - returns an array of all values in the stash
{{ stash.getCount() }} / {{ stash.count }} - returns the number of values in the stash
```


## Dot notation

The following methods all support dot notation for keys: 

- `set()` 
- `get()`
- `push()`
- `drop()`
- `has()`

This allows you to store and retrieve nested values in the stash. For example:

```twig
{{ stash.set('key.optionaly.in.dot.notation', value) }}
{{ stash.get('key.optionaly.in.dot.notation') }}
```

Setting a deeply nested value will create the necessary intermediate arrays or collections as needed. Attempting to `get()` a deeply nested value that doesn't exist will return `null`. Setting a deeply nested value using an intermediate key that is not an array or collection will throw an exception.

## Caveats, limitations and internals

The stash is deliberately simple by design. It is in-memory only, so it's not suitable for storing data that needs to persist between requests. It's also not shared between requests, so you can't use it to store data that needs to be shared between different requests. 

The stash works because Craft/Yii modules and their component services are singletons, and thus are shared for a single request. It's not a replacement for proper query caching or other more robust caching strategies, but a compliment to them to be used sparingly. It may electrocute your dog if you try to use it for something it's not designed for.

Internally the Stash uses Laravel Collections by default, along with Laravel's robust `Illuminate\Support\Arr` helper functions to support features like dot notation.

## Tests

Are written using [Pest](https://pestphp.com/) and are located in `tests/Unit/StashTest.php`.
