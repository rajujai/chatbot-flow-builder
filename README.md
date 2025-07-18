### Chatbot flow builder

A visual chatbot flow builder built using **React Flow**, **Next.js** and **Material UI**. It supports custom node types, custom edge types, drag-and-drop flow creation, and localStorage persistence.

---

## ✨ Features

* Drag nodes from the sidebar to the canvas
* Auto-focus node settings when a node is selected
* Connect nodes with custom one-directional arrow edges
* Save flow data to localStorage
* Load initial data from localStorage
* Theme switch (light/dark) using Material UI theming
* Custom Controls & MiniMap with theme support
* Delete node functionality in settings panel

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatbot-flow-builder.git
cd chatbot-flow-builder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)


---

## 🧠 How It Works

* Nodes can be added to the canvas by dragging from the sidebar.
* When a node is selected, the settings panel focuses the textarea automatically.
* Edges are created between nodes with arrow direction using custom edge types.
* Press "Save Changes" to persist your flow into localStorage.
* The app loads initial flow from localStorage on startup.
* Use the theme switch to toggle light/dark mode (MUI based).

---

## 📊 Adding Custom Node Types

To add a new node type:

1. **Create a new file** under `/components/nodes`, e.g., `MyCustomNode.js`
2. Export your component like so:

```js
export default function MyCustomNode({ type, data, selected }) {
    return (...);
}
```

3. **Add the new type** in `nodeTypes.js`:

```js
import MyCustomNode from './components/nodes/MyCustomNode';

export const nodeTypes = {
  myCustomNode: MyCustomNode,
  // existing types...
};
```

---

## 🔗 Adding Custom Edge Types

To add a new edge type:

1. **Create a new file** under `/components/edges`, e.g., `OneWayArrowEdge.js`
2. Export your edge component:

```js
export default function OneWayArrowEdge(props) {
  // draw a path + arrow
}
```

3. **Register it** in `edgeTypes.js`:

```js
import OneWayArrowEdge from './components/edges/OneWayArrowEdge';

export const edgeTypes = {
  oneWayArrow: OneWayArrowEdge,
  // existing types...
};
```

4. While creating edges, set `type: 'oneWayArrow'`

---

## 🔍 State Management

* **ContextAPI** is used for global state for theme.
* Data is saved and loaded from **localStorage**.

---

## 🌌 Theming

* Built with Material UI v6's theming system.
* Toggle button for changing light/dark mode.
* React Flow's background, controls, and minimap are styled based on the theme.

---

## 🚚 Deployment

Check out the deployed app: [https://chatbot-flow-builder-plum.vercel.app](https://chatbot-flow-builder-plum.vercel.app/)

---

## 📄 License

MIT


- Note: This project was built as part of a technical assessment. Not intended for production use.

