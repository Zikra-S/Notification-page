# Notifications Page

A responsive notifications page built as a solution to a [Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC) challenge. Users can view a list of notifications, mark individual notifications as read, and mark all notifications as read at once.


## Overview

This project displays a list of notifications, each showing a user avatar, an action description, and a timestamp. Unread notifications are visually highlighted, and users can clear them individually or all at once.

## Screenshot

![Notifications page preview](/public/Preview.jpg)

## Features

- View a list of notifications with avatars, actions, and timestamps
- Unread notifications are visually distinguished
- Mark a single notification as read on click
- Mark all notifications as read with one action
- Live count of unread notifications
- Support for special notification types: group joins, private messages with preview, and image comments
- Styled to match the provided design system (colors, spacing, and typography)
- Responsive layout across mobile and desktop widths

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)


## Project Structure

```
src/
├── assets/images/   # Avatars and notification images
├── data.ts          # Notification data and TypeScript types
├── App.tsx          # Main component: state, logic, and layout
├── index.css         # Tailwind import and global styles
```

## What I Learned

Building this project helped solidify several core React and JavaScript concepts:

- Managing changing data with `useState`
- Updating arrays immutably using `map` and the spread operator
- Conditional rendering based on state
- Separating data from UI logic for cleaner components
- Applying a design system consistently with Tailwind CSS

