---
title: Quiqui dev diary 001.
summary: Added main menu, music and more...
image: godot-aseprite.png
isFeatured: false
date: "2024-06-19"
---

[Play the game here!!](https://themis-darelis-blogfolio.vercel.app/game)

---

## New features.

- Added sound effects and groovy music track.
- Added end state, when player collects all pickups.
- Added main menu with 3 options.

---

## Music and sound effects

It is adviced to use **Google Chrome** when playing from a mobile device. Other browsers may cause the music to stutter. I converted the tracks from _.mp3_ to _.ogg_, this shrank down the total size of the game but it didn't fix the stuttering on the default **Samsung** internet browser.

The credits for the music go to **WELC0MEИ0** for creating the track.

[Visit their profile here.](https://pixabay.com/users/welc0me%D0%B80-12042425/)

---

## Score and End state.

Each time the player collects a pickup they _emit_ a _signal_ and the **UI** updates the _score label_. When the player reaches a certain score time _time scale_ of the engine is set to 0, pausing the game, and a menu pops up, giving the player the options to restart or quit the game.

---

## Main Menu

The menu contains three options:

- Resume
- Restart
- Exit

![ScreenShot](quiqui-run-001.png)

_Resume_ closes the menu, _Restart_ restarts the level, and _Exit_ exits the game. _Exit_ doesn't work on **itch.io** because the game is upload as webapp(HTML5). It works normaly on the windows exe.

---

[Play the game here!!](https://themis-darelis-blogfolio.vercel.app/game)
