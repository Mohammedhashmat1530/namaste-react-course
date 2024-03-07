## Is JSX mandatory for React?
no,jsx is not mandatory for react but jsx is preferred and recommended in react.JSX(javascript xml) is an syntax extension for js to write HTML like code in javascript

## Is ES6 mandatory for React?
ES6 (ECMAScript 2015) is not strictly mandatory for React, but it is highly recommended and widely used. ES6 introduced significant improvements and new features to JavaScript, making it more powerful, expressive, and easier to use.

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
In practice, {<TitleComponent/>} is the most commonly used form for rendering components in JSX because it's concise and directly represents a self-closing tag. However, all three expressions are valid JSX syntax and will render the TitleComponent component correctly

## How can I write comments in JSX?
Single-line comments: You can use double slashes (//)
Multi-line comments: You can use traditional multi-line comment syntax (/* */)

## What is <React.Fragment></React.Fragment> and <></> ?
Both <React.Fragment> and <> </> serve the same purpose of grouping multiple elements without adding extra nodes to the DOM. They're particularly useful when you need to return adjacent JSX elements from a component's render method without wrapping them in a parent element.

## What is Virtual DOM?
The Virtual DOM is a lightweight copy of the Real DOM maintained by React. Whenever there is a change in the application's state or props, React re-renders the Virtual DOM instead of the Real DOM.

## What is Reconciliation in React?
Reconciliation is the process by which React updates the user interface (UI) to match the most recent state and props of components

## What is React Fiber?
React Fiber introduces an incremental rendering architecture, allowing React to split rendering work into smaller chunks, or "fibers." This enables React to prioritize and schedule rendering tasks more efficiently, resulting in better responsiveness and reduced jankiness in complex UIs.

## Why we need keys in React? When do we need keys in React?

## Can we use index as keys in React?

## What is props in React? Ways to

## What is a Config Driven UI ?
A Config Driven UI, also known as Configuration-Driven UI, is a design approach where the user interface (UI) of an application is primarily defined and controlled by configuration data rather than hard-coded implementation logic. In other words, the structure, behavior, and appearance of the UI elements are determined by a set of configuration settings or data.
