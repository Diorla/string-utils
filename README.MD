# Introduction

These are series of use string functions that I happened to use a lot.

# Format text

Transform text to title

```js
title("heLLo"); //"Hello"
title("Hello"); //"Hello"
title("HELLO"); //"Hello"
title("hELLO"); //"Hello"
```

# Truncate text

Shorten a text

```js
truncate("12345678901234567890"); //"12345678901234..."
truncate("1234567890"); //"1234567890"
truncate("123456789012345678901234567890", 20); // "12345678901234567890..."
truncate("123456789012345678901234567890", 20, ">>>"); // "12345678901234567890>>>"
```
