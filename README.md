**Custom Chess Game - Hitwicket Assignment**
============================================

This project is a **custom chess game** built for the **Hitwicket assignment**, following their specified custom rules. The game operates on a **5x5 grid** and follows gameplay similar to chess, but with a twist to fit the given custom rules. The game also features real-time move observation and updates on the client-side using **WebSockets**.

**Features**
------------

*   **5x5 Chess Grid**: A customized chessboard with a smaller grid.
    
*   **Custom Chess Rules**: Implements the specific rules provided by Hitwicket.
    
*   **Real-time Move Observation**: Game moves are observed and updated in real-time.
    
*   **WebSocket Integration**: Ensures smooth and real-time communication between the server and client for game updates.
    
*   **Responsive Design**: Optimized for different screen sizes.
    

**Tech Stack**
--------------

*   **Frontend**: React.js, Tailwind CSS/Bootstrap
    
*   **Backend**: Node.js, Express.js
    
*   **WebSocket Communication**: Socket.IO or WebSocket API
    
*   **Game Logic**: Custom logic based on Hitwicket's rules
    

**Custom Game Rules**
---------------------

The custom game is based on the **chess rules** but with modifications specified by Hitwicket. Here is an outline of the key differences:

*   **5x5 Board**: The game is played on a 5x5 grid instead of the traditional 8x8.
    
*   **Custom Pieces & Moves**: Pieces may have different movement rules as compared to standard chess.
    
*   **Real-time Move Updates**: Each move is captured and displayed to all connected clients instantly.
    

_The detailed rules provided by Hitwicket should be followed for gameplay mechanics._

**Installation**
----------------

### **Prerequisites**

*   **Node.js** (v14.x or later)
    
*   **NPM** or **Yarn**
    

### **Steps**

1.  **Clone the repository**:
    

`   git clone https://github.com/your-username/hitwicket-custom-chess.git `
 ` cd hitwicket-custom-chess   `

**2\. Install dependencies**:

**Backend**:

`   cd backend  npm install   `

**Frontend**:

`   cd frontend  npm install   `

**3\. Set up environment variables** in the backend .env file:

`   SOCKET_SERVER_URL=   `

**4\. Run the servers**:

**Backend**:

`   nodemon server.js/node server.js   `

**Frontend**:

`   npm start   `

**Usage**
---------

*   **Play Custom Chess**: Start the game and make moves on the 5x5 board using the custom rules.
    
*   **Real-time Updates**: Game moves will be updated in real-time across all connected clients.
    
*   **WebSocket Communication**: Ensure the backend WebSocket server is running to observe and broadcast moves.
    

**WebSocket Endpoints**
-----------------------

*   **Server to Client**: Game updates and move broadcasting.
    
*   **Client to Server**: Player moves and game interactions.
    

**Report Issues**
-----------------

If you encounter any problems or have suggestions, feel free to [create an issue](https://github.com/heemaang/Hit-wickett.git) on this repository.

*   **GitHub Issues**: [Report here](https://github.com/heemaang/Hit-wickett.git)
    

**Contact**
-----------

For any questions or suggestions, please reach out to me:

*   **GitHub**: [@heemaang](https://github.com/heemaang)
    
*   **Email**: heemaang.saxena18@gmail.com
