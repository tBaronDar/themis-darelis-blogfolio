---
title: Wax Tablet Release.
summary: The release post of a new dashboard project called Wax Tablet.
image: typescript-authjs-color.png
isFeatured: true
date: "2024-05-28"
---

[Visit the site here!!](https://wax-tablet-dashboard-themis-projects.vercel.app/)

---

## Important!

The seems to be a problem when the users try to sign in with **Google**. Apparently **Google** believes that I sail the seven seas and doesn't share its users' credentials. It works for my google account. For now try to log in by creating an account with the **SignUp** button.

---

## What is it?

This project is a tool that can be set up to access a **MongoDB** cluster and display the **documents** from a selected **collection**. It requires no particular knowledge of how the **MongoDb** from the user.

---

## How to use it.

**Step 1:** Create a user or log in if you already have.

**Step 2:** Enter in the Setup, the credentials found in the about page(Or use your own) and click save.

**Step 3:** Click connect to be redirected to the home page that should now display the contains of mongoDb.

**Step 4:** Use dropdown list to navigate between the available collections.

## How it works?

---

The home page is secured, every time the user trys to visit the page a check for the **session** object takes place. If **session** doesn't exist it redirects the user to **/setup**.
In the Setup Page the user can log in. After a successful log in the user can store their **MongoDB** credentials provided by me. A form can be accessed in order to save/change the **MongoDB** credentials. There is a **secondary** mongoDb collection that contains the information of the user(email, mongoDB username, mongoDB password etc). So on each re-login the Home Page fetches the user's data automatically(as long as session exists).
In the about page there are some **credentials** that give access to a **dummy** **database**.

---

## The tools.

**Next.js** is used for its file based routing, more specifically the **app** router. **Auth.js** version 5beta is used to realise the authentication functionality. The _styling_ is done with **CSS** **modules**.

---

## To do.

**Fix the Suspense problem** Vercel claims that the <Suspense> works for server components, I had no luck with it. Find an other way to display the loading state.

**Find out why Google doesn't trust my app** Fix the google log in or sell Google stock!

**Make some components prettier** Some forms and button need a bit of love.

**Add paging for incoming messages**

[Visit the site here!!](https://wax-tablet-dashboard-themis-projects.vercel.app/)
