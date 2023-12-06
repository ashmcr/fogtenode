const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example route for fetching data
app.get('/get-data', (req, res) => {
    const submissionId = req.query.submission_id;

    if (!submissionId) {
        return res.status(400).send('No submission ID provided');
    }

    // Example data fetching logic
    // Replace this with actual logic to fetch data, e.g., from a database or external API
    const data = {
        id: submissionId,
        message: "This is a response from the Node.js server for submission ID " + submissionId
    };

    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
