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
![Project Flow in Detail](./utils/diagram1.png)

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

#### NOTE: Create Your Code File
- Create a file named 'index.mjs' in your project directory.

To Run Your Code

```sh
node index.mjs
```

## Example

Here's a simple example program in [Your Programming Language Name] that counts down from 5 and prints different values based on the final value of x:

```js
import compile from "your-programming-language";

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

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
