# 🧠 DOM Manipulation

This project is part of my DOM Manipulation course, where I learn how to interact with and modify elements in the **Document Object Model (DOM)** using **JavaScript**.

The DOM is a tree-like structure that represents every element in an HTML document — allowing developers to dynamically change, style, and add interactivity to web pages.

---

## 📘 Chapter 1 — Selecting Elements in the DOM

In this section, I learned **five main ways** to select elements in the DOM using JavaScript.
These methods allow you to access and manipulate HTML elements for dynamic changes on the page.

---

### 💡 The HTML & CSS Setup

> 🖼️ *Insert image here showing your rendered webpage (screenshot placeholder)*
> `![Favorite Movies Franchise Screenshot](./assets/dom-manipulation.png)`
> *(Example image: the “Favorite Movies Franchise” list)*

HTML contains a list of movie franchises and a heading, styled using CSS for better presentation.
However, the focus here is purely on **JavaScript DOM selection methods**.

---

### 🧩 JavaScript: Selecting Elements

Below are the five ways to select elements from the DOM:

---

#### 1⃣ `getElementById()`

```js
const title = document.getElementById('main-heading');
console.log(title.textContent);
```

**Explanation:**

* This method selects an element using its **ID** (`id="main-heading"` in the HTML).
* It returns **a single element**.
* In the console, it logs the **text content** of the heading.

**Console Output:**

```
Favorite Movies Franchise
```

---

#### 2⃣ `getElementsByClassName()`

```js
const list = document.getElementsByClassName('list-items');
console.log(list);
```

**Explanation:**

* This selects **all elements** with the class name `'list-items'`.
* The result is an **HTMLCollection**, which is *not* an array but looks like one.
* You can access elements using indexes (e.g., `list[0]`).

**Console Output (simplified):**

```
HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]
```

---

#### 3⃣ `getElementsByTagName()`

```js
const listItems = document.getElementsByTagName('li');
console.log(listItems);
```

**Explanation:**

* This method retrieves **all elements by their tag name**, in this case, `<li>`.
* Like the previous one, it returns an **HTMLCollection**.

**Console Output (simplified):**

```
HTMLCollection(5) [li, li, li, li, li]
```

---

#### 4⃣ `querySelector()`

```js
const container = document.querySelector('div');
console.log(container);
```

**Explanation:**

* `querySelector()` returns the **first element** that matches a given CSS selector.
* You can use it with IDs (`#id`), classes (`.class`), or tag names (`tag`).
* It returns a **single element** (the first match only).

**Console Output (simplified):**

```
<div class="container">...</div>
```

---

#### 5⃣ `querySelectorAll()`

```js
const allItems = document.querySelectorAll('.list-items');
console.log(allItems);
```

**Explanation:**

* `querySelectorAll()` returns **all elements** that match a CSS selector.
* The result is a **NodeList**, which is *similar to an array* (you can use `forEach()` on it).
* More flexible than `getElementsByClassName()` because you can use any CSS selector.

**Console Output (simplified):**

```
NodeList(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]
```

---

## 🦯 Summary

| Method                     | Returns           | Accepts      | Example                                         | Type           |
| :------------------------- | :---------------- | :----------- | :---------------------------------------------- | :------------- |
| `getElementById()`         | Single element    | ID           | `document.getElementById('main-heading')`       | Element        |
| `getElementsByClassName()` | Multiple elements | Class name   | `document.getElementsByClassName('list-items')` | HTMLCollection |
| `getElementsByTagName()`   | Multiple elements | Tag name     | `document.getElementsByTagName('li')`           | HTMLCollection |
| `querySelector()`          | First match       | CSS selector | `document.querySelector('.container')`          | Element        |
| `querySelectorAll()`       | All matches       | CSS selector | `document.querySelectorAll('.list-items')`      | NodeList       |

---

### 📞 Notes

* `HTMLCollection` and `NodeList` look similar but have differences:

  * `HTMLCollection` updates dynamically when the DOM changes.
  * `NodeList` is static — it won’t update after DOM changes (unless reselected).
* `querySelector()` and `querySelectorAll()` are the most flexible and modern options.

---

### 📸 Screenshot Placeholder

> *(Add your screenshot here once ready)*
> `![DOM Selection Example](/DOM/images/demo.png)`

---

## 👨‍💻 Author

**Yusef Codes
