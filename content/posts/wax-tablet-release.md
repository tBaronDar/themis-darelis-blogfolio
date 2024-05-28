---
title: Wax Tablet Release.
summary: The release post of a new dashboard project called Wax Tablet.
image: typescript-authjs.png
isFeatured: true
date: "2024-05-11"
---

[site](https://wax-tablet-dashboard.vercel.app/)

---

## Important!

The seems to be a problem when the users try to sign in with **Google** from an android browser that is **NOT** Google **Chrome**. If you want to sign in with **Google** please user **Chrome**.

---

## What is it?

This project is a tool that can be set up to access a **MongoDB** cluster and display the **documents** from a selected **collection**. It requires no particular knowledge of how the **MongoDb** from the user.

---

## How it works?

The home page is secured, every time the user trys to visit the page a check for the **session** object takes place. If **session** doesn't exist it redirects the user to **/setup**. In the Setup Page the user can log in. After a successful log in the user can store their **MongoDB** credentials provided by me. A form can be accessed in order to save/change the **MongoDB** credentials. There is a JSON file that contains the information of the user(email, mongoDB username, mongoDB password etc). So on each re-login the Home Page fetches the user's data automatically. In the about page there are some **credentials** that give access to a **dummy** **database**.

---

## The tools.

**Next.js** is used for its file based routing, more specifically the **app** router. **Auth.js** version 5beta is used to realise the authentication functionality. The _styling_ is done with **CSS** **modules**.

---

[site](https://wax-tablet-dashboard.vercel.app/)
