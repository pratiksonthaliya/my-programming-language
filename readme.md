# my-programming-language

###### NPM Website Link: https://www.npmjs.com/package/my-programming-language

## Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Templates syntax](#templates-syntax)
- [License](#license)


## Description

my-programming-language is a project-based programming language implemented in JavaScript. It features a lexer, parser, and code generator that run internally, demonstrating the process of building a simple programming language from scratch.

Project Flow:
![Project Flow](./utils/diagram1.png)

Project Flow in Detail:
![Project Flow in Detail](./utils/diagram2.png)

## Features

- **Conceptual Learning**: Provides a hands-on approach to understanding lexing, parsing, and code generation.
- **Control Flow**: Includes `if`, `else`, and `while` loop constructs for control flow.
- **Variable Handling**: Supports variable declaration, assignment, and comparison operations.

## Requirements

Javascript run-time environment is necessary for using this language.

## Installation

You can install my-programming-language via npm:

```sh
npm install my-programming-language
```

## Usage

To use my-programming-language, you can import the compile function and pass your code to it:

#### To Run Your Code

Step 1: Create a new folder and RUN below commmand on terminal
```sh
npm init -y
```

Step 2:
- Create a file named 'index.mjs' in your project directory.
- Copy below code in 'index.mjs' file.

```js
import compile from "my-programming-language";

compile(`
    maanlo x = 5;
    jabtak (x > 0) {
        bolo x;
        x = x - 1;
    }

    agar (x == 0) {
        bolo 5 + x;
    }
    warna {
        bolo 4 - x;
    }
`);
```

Step 3: RUN below commmand on terminal
```sh
node index.mjs
```

## Example

Here's a simple example program in [Your Programming Language Name] that counts down from 5 and prints different values based on the final value of x:

```js
import compile from "my-programming-language";

compile(`
    maanlo x = 5;
    jabtak (x > 0) {
        bolo x;
        x = x - 1;
    }

    agar (x == 0) {
        bolo 5 + x;
    }
    warna {
        bolo 4 - x;
    }
`);
```

## Templates Syntax

Declaration

```js
maanlo x = 5;
```

Assignment

```js
x = x-1;
```
```js
x = 51;
```

Print

```js
bolo x*4;
```

Loop

```js
maanlo x = 5;
jabtak (x > 0) {
    bolo x;
    x = x - 1;
}
```

If Else 
```js
agar (x == 0) {
    bolo 5 + x;
}
warna {
    bolo 4 * x;
}
```

## License

MIT License

Copyright (c) [2024] [Pratik Sonthaliya]
