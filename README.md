# Clone the repository
git clone git@github.com:rohitsingh6978/monitoring.git

# Install dependencies
npm install

<!-- Environment Setup -->
.env
PORT=3000
MONGO_URI="mongodb://127.0.0.1:27017/monitoring"

<!-- Run the Server -->
# Start the service
node index.js