# Tokopedia Play 
## API Structure

### Videos

- `POST /videos`: Add a new video to the database.
- `GET /videos`: Retrieve a list of all videos available on the platform.
- `GET /videos/:id`: Fetch details of a specific video using its ID.

### Products

- `POST /products`: Add a new product to the database.
- `GET /products/:id`: Fetch details of a specific product using its ID.
### Comments

- `POST /comments`: Add a new comment to a specific video.
- `GET /comments/:videoId`: Fetch all comments for a specific video using its ID


## How to Run :rocket:
### Prerequisites

Before you proceed, ensure you have the following installed on your machine:

1.  **Node.js and npm**
    If you don't have Node.js and npm (Node Package Manager) installed, you can download and install them from the official website: [Node.js](https://nodejs.org/)
    
2.  **MongoDB**
    Make sure you have MongoDB installed and running. You can download MongoDB from the official website: [MongoDB](https://www.mongodb.com/)
    
### Getting Started

1. **Clone this repository** into your local machine `git clone https://github.com/harishtaa/midterm-gigih-backend.git`
2. **Open terminal and navigate to the Project Directory**`cd midterm-gigih-backend` 
3. **Install dependencies** `npm install`
4. **Configure MongoDB Connection** 
Open the project in your text editor and open the `.env`and `index.js`, ensure that the MongoDB connection string is correctly set according to your MongoDB setup. For example:
```.env
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/<your-db-name>
``` 
```javascript I'm A tab 
mongoose.connect(process.env.DATABASE_URL)
const  db  =  mongoose.connection;
 ```

## Running the Server
1. Start the server: `node index.js`
2. Test API endpoint in Postman/CURL using `http://localhost:3000`.


