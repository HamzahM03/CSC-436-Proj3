# Rick and Morty Character Explorer

A React application that fetches and displays character information from the Rick and Morty API. Built for CSC 436 Project 3: Async React.

## Live Demo

Netlify URL: https://neon-hamster-b366d6.netlify.app/

## Features

- Character cards showing each character's image, name, species, and status
- Live client-side search that filters the characters as you type
- Loading, error, and success states for the data fetch
- Retry button to try the request again after an error
- "Simulate API Error" checkbox for testing the error state
- Responsive design for mobile, tablet, and desktop screens

## Technologies Used

- React
- JavaScript (JSX)
- Vite
- CSS
- Fetch API

## API Used

[Rick and Morty API](https://rickandmortyapi.com/documentation) — characters endpoint:

```
https://rickandmortyapi.com/api/character
```

The app displays the first page of results (20 characters). No API key is required.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/HamzahM03/CSC-436-Proj3.git
   cd CSC-436-Proj3
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Error Testing

Check the **Simulate API Error** checkbox at the top of the page. The app then requests an invalid endpoint (`https://rickandmortyapi.com/api/invalid`), which returns an HTTP error, and the error state is shown with a message and a **Retry** button.

Click **Retry** to send the request again. While the checkbox is still checked it will fail again; uncheck the box and the app loads the characters normally.
