# Cosmonavt Multiplayer Example: Frontend

**By Angel Montemayor Davila**

This repository provides an introductory example of how the main multiplayer backend system might work in Cosmonavt.

The system works by establishing a socket connection on both ends. Each time a player (represented as a box) moves, the
position is sent to the server. The server then broadcasts the position to other socket connections. When a client
receives another player's position, it updates and renders the other player's position accordingly.

Here is an improved version of the Quick Start section:

## Quick Start

Follow these steps to set up and run the Cosmonavt Multiplayer Example. After completing the setup, open two separate
browser windows at `http://localhosty:5173` and use the arrow keys to move the box.

### Backend

1. Clone the backend repository and navigate to the project directory:
   
    ```bash
    git clone git@github.com:MAAN-STUDIOS/Multiplayer-Example-Backend.git t-cosmo-back && cd t-cosmo-back
    ```
2. Install the dependencies:
   
    ```bash
    npm install
    ```
3. Start the backend server:
   
    ```bash
    npm run dev
    ```

Expected output:

```bash
[ yyyy-mm-dd HH:MM:SS ] [ MAIN:00000 ] [ DEBUG ] - Mounting .env.developer as environment file.
[ yyyy-mm-dd HH:MM:SS ] [ MAIN:00001 ] [ INFO  ] - Server listening on http://localhost:3001 ...
Server listening on http://localhost:3000 ...
```

### Frontend

1. Clone the frontend repository and navigate to the project directory:
    ```bash
    git clone git@github.com:MAAN-STUDIOS/Multiplayer-Example-Frontend.git t-cosmo-front && cd t-cosmo-front
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend server:
    ```bash
    npm run dev
    ```

Expected output:

```bash
npm run dev

> cosmonavt-frontend@0.0.0 dev
> vite --config vite.config.js --mode developer

  VITE v6.2.5   developer   ready in x ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
