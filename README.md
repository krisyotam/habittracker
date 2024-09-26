# Habit Tracker

A **minimalistic habit tracker** built using **HTML**, **CSS**, and **JavaScript** with **localStorage** to persist habits across browser sessions. Users can add new habits, mark them as complete, and the app will save the data so that the habits remain visible even after refreshing the page.

## Features

- **Add New Habits**: Users can input habit names and add them to the list.
- **Track Habit Completion**: Mark habits as complete or incomplete by clicking on the circle next to each habit.
- **Data Persistence**: Habits are saved in the browser's `localStorage`, meaning they persist even if the page is refreshed or the browser is closed.
- **Minimalistic UI**: The design is clean and simple, focusing on ease of use.

## Technologies Used

- **HTML**: For structure.
- **CSS**: For styling and layout.
- **JavaScript**: For interactivity and logic.
- **localStorage**: For saving habits and their status across sessions.

## How It Works

1. **Adding Habits**:
   - When you enter a habit name in the input field and click the "Save" button, a new habit is added to the list.
   - The habit is also stored in `localStorage` in the format:
     ```json
     [
       { "name": "Drink Water", "isChecked": false },
       { "name": "Exercise", "isChecked": true }
     ]
     ```
   
2. **Tracking Habits**:
   - Next to each habit is a clickable circle. Clicking on it will toggle the completion state (checked/unchecked).
   - The state of each habit (complete/incomplete) is also updated in `localStorage`.

3. **Data Persistence**:
   - When the page is loaded or refreshed, the app will retrieve the saved habits from `localStorage` and display them.
   - The `loadHabits` function runs on page load and dynamically rebuilds the habit list based on the stored data.
   - Each habit's completion status (checked/unchecked) is also preserved from the last session.

## Local Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/krisyotam/habit-tracker.git
