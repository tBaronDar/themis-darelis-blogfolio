---
title: "CapyNotes - Dev Diary 004."
date: "2024-12-13"
image: capynotesTrpc.webp
summary: Fixes and improvements.
isFeatured: true
---

## CapyNotes Fixes and Updates.

[This is the site](https://capynotes.vercel.app/)

I noticed that there was an error in the logic of filtering the notes by their subject and by their type. During my attempt to fix it, I realized that I was overrelying on the use of the useEffect() hook. By simplifying the Sidebar component I found the error and in the meantime, I got rid of at least 25 lines of code.

I added the logo image. It a Crayon AI generated illustration of a capybara. It is uploaded in Amazon's S3.

## About.

When completed this app will be able to:

- Manage Users(login, logout, etc).
- Manage Notes of different types(checklists and text notes) for each user.
- The users will be able to see their statistics and delete their account.

[You can see the code here.](https://github.com/tBaronDar/capynotes)
