---
title: Wax Tablet Dev Diary 001.
summary: First update of Wax Tablet. Mainly UI changes.
image: typescript-authjs-color.png
isFeatured: false
date: "2024-05-30"
---

[Visit the site **here!!**](https://wax-tablet-dashboard-themis-projects.vercel.app/)

---

# Content rendering changes.

I changed the way the **messages** incoming array is rendered, from the old **table** html element:

```js
<table className={classes.table}>
  <tbody>
    {props.messagesIn.map((message: Message) => (
      <tr key={message.id} className={classes["table-row"]}>
        <td>{props.messagesIn.indexOf(message) + 1}</td>
        <td>{message.name}</td>
        <td>{message.email}</td>
        <td>{message.message}</td>
        <td>
          <DeleteButton message={message.message} email={session.user.email} />
        </td>
      </tr>
    ))}
  </tbody>
</table>
```

to a more modern **grid** layout:

```js
const MessageCard: React.FC<{ message: Message, index: number }> = ({
  message,
  index,
}) => {
  return (
    <div className={classes["master"]}>
      <div className={classes["grid-container"]}>
        <div className={classes["controls"]}>
          <DeleteButton />
        </div>
        <div className={classes["email"]}>{message.email}</div>
        <div className={classes["name"]}>{message.name}</div>
        <div className={classes["message"]}>{message.message}</div>
        <div className={classes["number"]}>{`Item number: ${index}`}</div>
      </div>
    </div>
  );
};
```

and the begining of the CSS looks something like this:

```css
.grid-container {
  padding: var(--size-4);
  padding-bottom: var(--size-5);
  width: 90%;
  height: auto;
  display: grid;
  grid-template-columns: 20% 35% 35%;
  background-color: var(--palette-color3);
  gap: 5px;
  box-shadow: 4px 4px 3px;
}

.grid-container div {
  text-align: center;
}
```

[See the whole CSS file **here**.](https://github.com/tBaronDar/wax-tablet-dashboard/blob/main/components/home-page/messages/message-card.module.css)

---

# UI changes.

I added a Card component in and wrapped most of the functional components in order to make the site more readable.

Also various shadows and other CSS tweaks were made to make the user experience better.

---

# The Final look.

I kept the corners of the containers on purpose, I am not sure how I feel about that. I may change them in the future.
This is what **Wax Tablet** looks like after this update:

![ScreenShot](waxtablet001.png)

---

# Next up.

- Pagination
- Fix messages grid so it shows loading spinner properly

---

[Visit the site **here!!**](https://wax-tablet-dashboard-themis-projects.vercel.app/)
