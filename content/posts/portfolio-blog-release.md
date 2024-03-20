---
title: "Portfolio - Released!"
date: "2024-03-20"
image: next-js-logo.png
summary: The first release post of my personal blog and portfolio.
isFeatured: true
---

## Released at Last!

The main functionality of the site is done. It is time for this site to go public and hopfully help me to find a job.

I will upload a picture of how this site looks at the time of writing this post. I will like to remind everyone that I am not a Ux/Ui guy and I don't want to become one.

![CV screenshot](screenshot-cv.png)

## The Tools

**Next.Js** takes care of filebased routing and pre-generation of pages. The API routes also were realized efficiently with **Next.js'** features. All hosting, the posts, their photos and all the code is managed by **Vercel**. To store the in comming messages from _/Contact_ I used the **MongoDb**. All the text of the posts(what you're reading right now) was written with **Markdown** and is being turned to **html** with the help of **Pism Light** syntax highlighter.

## The Missing And The "Soon To Be"

I want to add Authentication to this blog to make sure I can control who sends messages to **MongoDb**. The reason I haven't yet added the authentication is that I want to do it using the next-auth package. Currently next-auth is in a bit of a turmoil. The course on Next.js I finished on Udemy has a lecture on **version 3**, which is a legacy version. Most **Youtube** tutorials are on **version 4** and some are on **version 5** that is currently on _beta_ phase. I will focus on different thing and then I will do a tutorial on **version 5**.

The **GitHub** repository is turned to private because I expose MongoDb credentials in there. I have to set **enviroment variable** on **Vercel** and then stop uploading the relevant file on GitHub. Then the repo will go _public_.

## The Colour Palette

As I have never taken a lesson on design my process involves going to this [site](https://colorpalettes.com/) and I picking a palette that sort of looks good. The palette(when I am writing this post) is the palette number 2. I will tinker with darker palettes on the near future.
