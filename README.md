# Valentine App

A small romantic web app that asks:

> **Will you be my Valentine?**

- Clicking **No** makes the **Yes** button bigger and moves **No** to another position.
- Clicking **Yes** shows a celebration message: **"I love you"** with hearts and party emojis.

## Run locally

### Option 1: Python (quickest)
1. Open a terminal in the project folder.
2. Start a local web server:

```bash
python3 -m http.server 4173
```

3. Open your browser and go to:

```text
http://localhost:4173
```

4. Stop the server with `Ctrl + C`.

### Option 2: VS Code Live Server
1. Open the folder in VS Code.
2. Install the **Live Server** extension (if needed).
3. Right-click `index.html` and choose **Open with Live Server**.

## How to test manually

1. Verify the main question is visible: **"Will you be my Valentine?"**.
2. Verify both buttons appear: **Yes** and **No**.
3. Click **No** several times:
   - The **Yes** button should gradually increase in size.
   - The **No** button should move to a different position each click.
4. Click **Yes**:
   - The buttons should disappear.
   - A celebration message should appear with **"I love you"** and many celebratory emojis.
5. Refresh the page and confirm the app resets to initial state.

## Files

- `index.html` – page structure
- `styles.css` – romantic theme and styling
- `script.js` – button interaction logic
