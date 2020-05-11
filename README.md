# Books Search

A simple Node.js Web App that allows the user to search and get information about books.

## Run Locally

Make sure to have Node.js and MongoDB installed on your local machine

### Populate DB with sample data

Run the following command to import `book.csv` into MongoDB

```bash
mongoimport -c books --type CSV --fields id.string\(\),name.string\(\),author.string\(\),year.int32\(\) --columnsHaveTypes --file books.csv
```

### Start App

#### Install Dependencies

```bash
npm install
```

#### Run the App

```bash
# For Production
npm start

# For development
npm run dev
```
