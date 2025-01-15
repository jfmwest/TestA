/* General Layout */
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

/* Grid Container */
#grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Default 5 columns */
    gap: 5px;
    width: 80%; /* Adjust to fit screen */
    max-width: 400px; /* Prevent overflow on larger screens */
    margin: 0 auto;
}

/* Grid Cells */
.grid-cell {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 24px;
    border: 2px solid #ccc;
    border-radius: 5px;
}

/* Responsive Adjustments */
@media (max-width: 600px) {
    #grid {
        grid-template-columns: repeat(5, 1fr); /* Keep it at 5 columns */
        width: 95%; /* Increase grid width on smaller screens */
    }

    .grid-cell {
        height: 45px;
        font-size: 18px; /* Adjust font size for smaller screens */
    }
}

@media (max-width: 400px) {
    #grid {
        grid-template-columns: repeat(4, 1fr); /* Reduce number of columns for very small screens */
        width: 95%;
    }

    .grid-cell {
        height: 40px;
        font-size: 16px;
    }
}

/* Message Display */
#message {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
}













