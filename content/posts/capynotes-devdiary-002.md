---
title: "CapyNotes - Dev Diary 002."
date: "2024-11-29"
image: capynotesTrpc.webp
summary: CapyNotes version 1.0 release post.
isFeatured: true
---

## CapyNotes Goes online.

[This is the site](https://capynotes.vercel.app/)

The main functionality of CapyNotes is complete. All CRUD operations are in place. There are some features , like the fullscreen mode, that do not work at all. Also, currently there is no responsiveness for smaller screens.

## About

When completed this app will be able to:

- Manage Users(login, logout, etc).
- Manage Notes of different types(checklists and text notes) for each user.
- The users will be able to see their statistics and delete their account.

[You can see the code here.](https://github.com/tBaronDar/capynotes)

## Roadmap

- Create a [UI design Doc](https://design.penpot.app/#/view/a5adc15f-fb38-8092-8005-3df5d897563e?page-id=a5adc15f-fb38-8092-8005-3df5d897563f&section=interactions&index=0&share-id=40b5cf7c-e089-81bd-8005-435a23e2c88c). **...Done**
- Create Next.js App with App Router and create gitHub repo. ...Done
- Set up tRPC for the Server Side and the Client side. ...Done
- Create the frontend. ...WIP
- Manage User Authentication with Auth.js. ...Done
- Create Dummy Data. ...Done
- Derive Prisma Schema from Dummy Data. ...Done
- Set up Prisma ORM with PostgreSQL. ...Done
- Write CRUD operations with tRPC end points. ...Done
- Verify CRUD work and are uploaded correctly. ...WIP
- Add responsiveness for small screens.
- Add animations and graphics.
- Add a user profile menu, to view statistics.
