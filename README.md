# AsgarAlert (v1) for JS

---

## Install

```html
<script defer src="/asgar-alert.js"></script>
```

## Examples

The most basic message:

```js
asgar("Hello world!");
```

A message signaling an error:

```js
asgar("Something went wrong!", "error");
```

Handling the result of AsgarAlert modal:

```js
asgar({
  title: "Are you sure?",
  message: "Want to log out?",
  details: "You will not able to recover this action",
  left: "Cancel",
  right: "Yes,Iam sure",
})
  .then(() => {
    console.log("right button clicked");
  })
  .catch(() => {
    console.log("left button clicked");
  });
```

[View more examples](https://github.com/asgaraliyev/asgar-alert/blob/main/example.js)

## Browser compatibility

| IE11\* | Edge | Chrome | Firefox | Safari | Opera | Android Browser\* | UC Browser\* |
| ------ | ---- | ------ | ------- | ------ | ----- | ----------------- | ------------ |
| ✅     | ✅   | ✅     | ✅      | ✅     | ✅    | ✅                | ✅           |
