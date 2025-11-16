# 📂 Accordion FAQ Component

**Clean, Simple, Expandable UI Component**

This project implements a straightforward **FAQ accordion** using **HTML, CSS, and JavaScript**. It focuses on core DOM manipulation concepts, clean layout structure, and the use of CSS selectors to animate collapsible content.

---

## 🔥 Preview

![Nova Rebooted Screenshot](/3-accordion/images/demo.png)

---

## ✨ Overview

This Accordion FAQ project demonstrates how to:

* Build a structured set of questions and hidden answers.
* Use JavaScript to toggle UI visibility based on user interaction.
* Apply CSS transitions for smooth open/close animations.
* Use `this` inside regular functions to reference the clicked element.

The implementation highlights foundational DOM concepts, making it a great exercise for practicing **event listeners**, **class toggling**, and **element relationships**.

---

## 🧩 Tech Stack

| Technology             | Purpose                       |
| ---------------------- | ----------------------------- |
| **HTML5**              | Structure and content         |
| **CSS3**               | Styling, layout, transitions  |
| **Vanilla JavaScript** | DOM selection & interactivity |

---

## 🧱 Current Features

* 🔹 Expandable FAQ items
* 🔹 Smooth animation using `max-height` transition
* 🔹 Click-based show/hide functionality
* 🔹 Clean and minimal layout with centered UI
* 🔹 Background image overlay with gradient

---

## 📘 Key Lessons Learned

* The `this` keyword cannot be used inside **arrow functions** for event listeners.
* `nextElementSibling` provides a reliable way to access the answer container directly below each question.
* The selector `.content-container.active .answer` allows styling **only when the parent container is active**.
* CSS transitions using `max-height` create smooth accordion animations.

---

## 🔧 How It Works

### ✔️ HTML Structure

Each question is immediately followed by a `.content-container` holding its answer:

```html
<div class="question">What is the return policy?</div>
<div class="content-container">
  <div class="answer">Lorem ipsum dolor sit amet...</div>
</div>
```

This structure allows JavaScript to use `nextElementSibling` to locate the correct content.

---

### ✔️ CSS Animation Logic

The answer is hidden by default:

```css
.answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}
```

When the parent container becomes active, the answer expands:

```css
.content-container.active .answer {
    max-height: 200px;
}
```

---

### ✔️ JavaScript Interaction

The logic attaches a click event to each question:

```javascript
const questions = document.getElementsByClassName('question');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        const content = this.nextElementSibling;  
        content.classList.toggle('active');
    });
}
```

**Why `this` works here:**

* Because a regular function is used.
* Inside regular functions, `this` refers to the element that triggered the event.

**Why `nextElementSibling` is used:**

* Each question’s answer is contained inside the *next sibling*.
* This guarantees proper pairing without needing IDs or complicated selectors.

---

## 🗂️ Folder Structure

```
Accordion-FAQ/
│
├── images/
│   └── peakpx.jpg
│
├── accordion.css
├── accordion.js
└── index.html
```

---

## 🛠️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/<your-username>/Accordion-FAQ.git
cd Accordion-FAQ
```

Open in browser:

```bash
index.html
```

Optional: use **VS Code Live Server** for fast reloading.

---

## 🔮 Roadmap

* Add rotate animation to the `+` icon
* Add accessibility features (keyboard navigation, ARIA attributes)
* Allow multiple or single-open behavior toggle
* Add light/dark theme switch

---

## 👨‍💻 Author

**Yusef Codes**

