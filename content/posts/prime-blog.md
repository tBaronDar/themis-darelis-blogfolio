---
title: "My very first project - Prime blog"
date: "2024-03-15"
image: reactjs-vitejs-logo.png
summary: My first personal project. A simple blog, hosted by firebase.
isFeatured: false
---

[**Visit Prime blog**](https://prime-blog1.web.app/ "Prime Blog home page")

There is a time that you have to stop following coding courses and build something on your own. In my case this is the first atempt to create something on my own.

## The Choice of Tools

It is pretty clear to me that if you want to create full-stack applications in a way that is viable for a one man team, I would have to use a framework like **Next.js**. So for my very first project I chose to use what I believed to be _basic tools_, because I wanted to make sure that I can use effectively the _more basic_ features of React.js.

So this project was created with **Vite.js**, a build tool that I had no interest of re-using because most of its features can be found within **Next.js**.

The hosting was done by _firebase_. Specifically by uploading the _/src_. So there is no page _pre-generation_ of any sort.

For fetching data I used the browser's _fetch() API_. No **Axios** or any third party package for handling fetch requests.

## The Known Issues

It seems that when you try to refresh the page from an **Android** browser it returns the 404 page, although the page exists. Adding the **"https://"** seems to fix the issue, I should look into this in the future.

## The Difficulties

Having now finished a _Next.js_ on-line Udemy course, I can confidently state that having file-based routing is a _blessing!_ Even in this small project the input array of _createBrowerRouter()_ can get very long and I remember having trouble when trying to _fiddle_ with positions of the objects in the array.

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/about", element: <AboutPage /> },
      {
        path: "new-post",
        element: <NewPostPage />,
        action: postUpdateAction,
      },
      {
        path: "/posts",
        children: [
          {
            index: true,
            element: <PostsPage />,
            loader: postsLoader,
          },
          {
            path: ":postId",
            id: "post-details",
            loader: postDetailsLoader,
            children: [
              {
                index: true,
                element: <PostDetailsPage />,
                action: deleteAction,
              },
              {
                path: "edit",
                element: <EditPostPage />,
                action: postUpdateAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);
```

An other thing I found difficult, is how the site looks. The **styling** is a product of my non-stop **css** tinkering and result is not very pretty but it is functional.

## The Missing

Between polishing and learning new tools I choose the latter, therefor some aspect of this project remain unfinished.

- I never wrote a custom 404 page, so if a wrong url is entered the default **Vite.js** not-found page will be shown.

[**Visit Prime blog**](https://prime-blog1.web.app/ "Prime Blog home page")
