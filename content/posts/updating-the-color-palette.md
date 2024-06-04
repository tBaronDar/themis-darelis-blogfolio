---
title: Portfolio - Updating the Color Palette
summary: Try to make the site more pleasing to the eye by choosing a three color palette.
image: color-palettes-logo.png
isFeatured: false
date: "2024-03-21"
---

## Implementing Color Palette

For styling my projects I usualy work with **CSS modules**. The problem I encountered with this project, as it get longer and longer, is that it becomes difficult to keep track all the color classes. Because when **CSS modules** is used the selectors are spread in different **.module.css** files. So in order to keep the same _coloring pattern_ through out the project a lot _copy/paste_ is involved.

A possible solution to this problem is to separate **color classes** and **position/topology classes**. I did this by _coloring_ most of the text inside the **global.css** file which is imported in the **\_app.js**.

**example:**

```css
...

a {
  text-decoration: none;
  color: var(--color-primary-700);
}

table {
  color: var(--color-primary-700);
}

p {
  color: var(--color-primary-700);
}

...
```

All the color **variable** are also defined in the same file:

```css
body {
...
--color-scale-700: #d38cad;
--color-scale-800: #ba6375;
--color-scale-900: #b8435b;
...
}
```

This way, inside the _specialized_ **.module.css** files I only color the backgrounds and I arrange the positions of the **HTML** elements. Example of a **selector** from the **CV-content.module.css:**

```css
.content {
	width: 95%;
	max-width: 60rem;
	margin: var(--size-8) auto;
	font-size: var(--size-5);
	line-height: var(--size-8);
	background-color: var(--color-grey-100);
	border-radius: 6px;
	padding: var(--size-4);
}
```

---

## Changing the Color Palette

Now that the above logic is implemented, it makes it easier to change the color scheme of the site. In this update I replaced the [Palette number 2](https://colorpalettes.com/palette/2) with the [Palette number 6](https://colorpalettes.com/palette/6). The is the look the site after the update:

![CV screenshot](CV-screenshot-210324.png)

I find the darker colors of this palette more pleasing to the eye.

---

## Other Updates

- Added **box-shadow** to images.
- Changed color of **<a>** tags.
- Added color from the **<input>/<textArea>** tags.
- Created **/old-posts** folder.

---
