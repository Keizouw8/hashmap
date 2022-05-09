# hashmap
Port Java HashMap functionality to JavaScript. Quick and easy to pickup with the familiar syntax from Java. 

## Features
- Replicated HashMap syntax from Java
- Simple and easy to use
- Switch between HashMaps and Objects

## Documentation
- [Installation](#installation)
- [Creating a HashMap](#creating-a-hashmap)
- [Interact with data](#interact-with-data)
  - [Add data](#add-data)
  - [Remove data](#remove-data)
  - [Clear data](#clear-data)
- [Reading data](#reading-data)
  - [Getting values by keys](#getting-values-by-keys)
  - [Getting all the data (in the form of Arrays)](#getting-all-the-data-in-the-form-of-arrays)
  - [Getting all the keys](#getting-all-the-keys)
  - [Getting all the values](#getting-all-the-values)
  - [Getting the size of the HashMap](#getting-the-size-of-the-hashmap)
- [Generate HashMap from Object/Array](#generate-hashmap-from-objectarray)

## Installation
Using npm:
```shell
$ npm install -g npm
$ npm install java-hashmap
```
In Node.js:
```js
const HashMap = require("java-hashmap");
```

## Creating a HashMap
The HashMap package returns a class, you can use this class to create a HashMap. For example, here is one of character colors:
```js
const HashMap = require("hashmap");
var characterColors = new HashMap();
```

## Interact with data
There isn't much use to a HashMap if you can't even deal with the information in it, so let's look at that.

### Add data
To add data to the HashMap, use the ```.put()``` method. It takes two parameters, the key and the value.
```js
characterColors.put("Sonic", "blue");
characterColors.put("Mario", "red");
characterColors.put("Ryu", "white");
```

### Remove data
To remove data from the HashMap, use the ```.remove()``` method. It takes one parameter, the key.
```js
characterColors.remove("Sonic");
characterColors.remove("Mario");
characterColors.remove("Ryu");
```

### Clear data
To clear all the data from the HashMap, use the ```.clear()``` method.
```js
characterColors.clear();
```

## Reading data
The ability to modify data is no good if you can't even read it. So, there are a lot of methods with HashMaps for reading data.

### Getting values by keys
To get a value by it's associated key, use the ```.get()``` method. It takes one parameter, the key.
```js
characterColors.get("Sonic");
characterColors.get("Mario");
characterColors.get("Ryu");
```

### Getting all the data (in the form of Arrays)
To get all the data in the form of two Arrays, use the ```.get()``` method without supplying any parameters.
```js
characterColors.get();
```

### Getting all the keys
To get all the keys, use the ```.keySet()``` method.
```js
characterColors.keySet();
```

### Getting all the values
To get all the values, use the ```.values()``` method.
```js
characterColors.values();
```

### Getting the size of the HashMap
To get all the size of the HashMap, use the ```.size()``` method.
```js
characterColors.size();
```

## Generate HashMap from Object/Array
Sometimes it's useful to generate a HashMap from an Object or an Array, to do so use the ```.generate()``` method.
```js
const characterColors = new HashMap();

//With one Object
characterColors.generate({
    Sonic: "blue",
    Mario: "red",
    Ryu: "white"
});
/*["Sonic", "Mario", "Ryu"]
["blue", "red", "white"]*/

//With two Arrays
characterColors.generate(
    ["Sonic", "Mario", "Ryu"],
    ["blue", "red", "white"]);
/*["Sonic", "Mario", "Ryu"]
["blue", "red", "white"]*/

//With one Array
characterColors.generate(["Sonic", "Mario", "Ryu"]);
/*[0, 1, 2], ["Sonic", "Mario", "Ryu"]*/
```