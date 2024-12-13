---
title: "CapyNotes - Dev Diary 003."
date: "2024-12-05"
image: capynotesTrpc.webp
summary: Regular update - Added alert pop up.
isFeatured: true
---

## CapyNotes Updates.

[This is the site](https://capynotes.vercel.app/)

I decided to release weekly updates for this project. That way I can plan ahead and manage my time better. In this update, I added a very basic alert to show that the user input is not complete. Previously there was no feedback why the upload button didn't work.

Also, I added shadows on the list items(notes), in order to make each one distinct.

and more CSS fixes...

## About.

When completed this app will be able to:

- Manage Users(login, logout, etc).
- Manage Notes of different types(checklists and text notes) for each user.
- The users will be able to see their statistics and delete their account.

[You can see the code here.](https://github.com/tBaronDar/capynotes)

## Roadmap.

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
