---
title: Wax Tablet Dev Diary 002.
summary: Changelog for Wax Tablet. Mainly UI changes.
image: typescript-authjs-color.png
isFeatured: true
date: "2024-06-05"
---

[Visit the site **here**](https://wax-tablet-dashboard-themis-projects.vercel.app/)

---

# Pagination, fetching the data correctly.

Now the **messages table** shows 4 messages at a time. **Query parameters** are being used to limit how many messages to fetch. Specifically, the custom parameter **/?p=0** is used. **p** is accessed with the help of **params** in the **page.tsx** and it is passed as a parameter to the **MongoDB** handler:

```js
const skipNumber = +searchParams?.p || 0;
const itemsPerPage = 4;
const db = client.db(database);

const messages = db
	.collection(collection)
	.find()
	.skip(skipNumber * itemsPerPage)
	.limit(itemsPerPage);
```

The **.skip(skipNumber \* itemsPerPage)** method calculates _where_ to start fetching documents. The **itemsPerPage** is hardcoded for the moment, and the **.limit(itemsPerPage)** method limits _how many_ documents to fetch.

To calculate the total number of pages needed, the _length_ of the current **collection** is required. MongoDB has the appropriate tools for the job:

```js
export async function mongoGetNumberOfItems(
	username: string,
	password: string,
	database: string,
	collection: string
) {
	const client = await mongoConnector(username, password);
	const db = client.db(database);

	const itemsInCollection = await db.collection(collection).countDocuments();
	return itemsInCollection;
}
```

[Visit the GitHub repo **here**.](https://github.com/tBaronDar/wax-tablet-dashboard/)

---

# Pagination, showing the data correctly.

The **HomePageControls** component, at the end of the page, was redesigned, adding 4 buttons and one paragraph. Its current look is like this:

![ScreenShot](screenshot-pagination.jpg)

To avoid user navigation beyond the limits of the existing pages (e.g. negative pages etc), the **disabled** property of the buttons is turned on/off(true/false).Then, in **CSS** file **/app/global.css**, the **:disabled** pseudoclass is used to signify to the user that the buttons are not in use. I also added the **button [disabled]** selector to make sure that the buttons are selected in every case:

```css
button:disabled,
button [disabled] {
	border: 1px solid #999999;
	background-color: #cccccc;
	color: #666666;
	scale: 1;
	text-shadow: none;
}
```

[Visit the site **here**](https://wax-tablet-dashboard-themis-projects.vercel.app/)

---

# Added Loading State.

The **messages table** is now a **client component**. So **useEffect()** and **useState()** are used to fetch the collection documents and _switch_ between a _loading_ and _not-loading_ state:

```js
useEffect(() => {
	const dataGetter = async () => {
		setIsLoading(true);
		const data = await mongoMessagesGetter(
			query,
			userProfile.username,
			userProfile.password,
			userProfile.database,
			userProfile.collection
		);
		setMessages(data);
		setIsLoading(false);
	};
	dataGetter();
}, [messagesIn]);
```

This state is used to conditionally render components:

```js
{isLoading && <LoadingSpinner />}
			{!isLoading && (
				<div className={classes.master}>
					<h2>These are the messages</h2>
					...
```

[Visit the GitHub repo **here**.](https://github.com/tBaronDar/wax-tablet-dashboard/)

---

# Next up.

- Tackle the Google login error
- Make prettier

---

[Visit the site **here!!**](https://wax-tablet-dashboard-themis-projects.vercel.app/)
