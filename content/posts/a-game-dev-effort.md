---
title: Quiqui run release post.
summary: A humble gamming effort.
image: godot-aseprite.png
isFeatured: true
date: "2024-06-14"
---

[Play the game here!!](https://themis-darelis-blogfolio.vercel.app/game)

---

## Why a game?

I was looking into how to add some animations to a web project, this led me to learn how sprites work. This interest in sprites then led me to **Aseprite**. My curiosity further led me to **Godot**, a game engine that uses sprites to render the player and other characters. When I emerged from this rabbit hole I wanted to put all this knowledge into practice, and this is how I ended up with **Quiqui run**.

---

## The tools.

All the sprites and tiles were created with **Aseprite**. An opensource editor, it costs around 20 euros to buy pre-compiled but the source code is for free on GitHub, so I compiled it from scratch.

[Check out Aseprite here](https://www.aseprite.org/)

**Godot** is a opensource game engine and I used it to handle animations and physics. It uses its own programming language called GDScript.

[Check out Godot here](https://godotengine.org/)

---

## The problems.

The most difficult problem I encountered during the development is exporting the game in a format that can be played on the browser. Besides _.exe_, **Godot** gives the option to export as **Web Executable** (Html) but it requires additional configuration from the hosting server in order to run properly. My host, **Vercel** is very cryptic on how to enable the needed _headers_. So I chose to upload it on **itch.io** because it allow me to tweak the hosting options more easily. I imported a widget component(React) on link it to my blog.

---
