<div align="center">
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/>
  <img src="https://img.shields.io/badge/-NestJs-ea2845?style=for-the-badge&logo=nestjs&logoColor=white" alt="nestjs"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss"/>
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="sqlite">
</div>

<div align="center">

# Alarm Clock App

</div>

<div align="center">
  ![Clock ScreenShot](https://imgur.com/Uh2fMVf)
  ![Alarm Manager ScreenShot](https://imgur.com/rMHuSuG)
</div>

## Introduction

The Alarm Clock App is a modern, user-friendly application designed to help users manage their time effectively. It allows users to set alarms for different times throughout the day and receive notifications when it's time to take action on scheduled tasks or appointments.

## Features

- **Multiple Alarms**: Set different alarms with unique labels.
- **Real-time Display**: View the current time with a sleek clock interface.
- **Notifications**: Receive both audio and visual prompts when alarms go off.
- **Alarm Management**: Effortlessly manage your list of alarms.
- **Responsive Design**: A beautiful UI that adapts to any screen size.

## Tech Stack

- **Frontend**: React with TypeScript, TailwindCSS for styling
- **Backend**: Nest.js with TypeScript, TypeORM
- **Database**: SQLite
- **Others**: Vite, Jest for testing

## Installation

# Clone the repo :

```bash
git clone https://github.com/hugo-ribaud/alarm_clock_app_react_nestjs_sqlite.git
cd client
npm install

cd ../server
npm install
```

# db

Create an empty alarm.db file into /server/db/

# Run the application

```bash
cd server
npm run start

cd ../client
npm run dev
```

Open http://localhost:5173 to view it in the browser.

# Testing the application

You can run :

```bash
npm test
```

in the server to test with Jest

### endpoints

You can use Postman or Insomnia to send request to test the api

**POST** to http://localhost:3000/alarms

Body.json :

```bash
{
  "time": "HH:MM",
  "label": "Alarm name"
}
```

**PUT** to http://localhost:3000/alarms/:id

Body.json :

```bash
{
  "time": "HH:MM", // new alarm time
  "label": "Alarm name updated"
}
```

**DELETE** to http://localhost:3000/alarms/:id

## Future Enhancements

- User Authentication: Enable user-specific alarms and cross-device syncing.
- Extended Functionality: Introduce timers, countdowns, and stopwatch features.
- Radio Integration: Connect to a web radio API for music alarms.
- Personalization: Allow users to customize alarm tones and app themes.
