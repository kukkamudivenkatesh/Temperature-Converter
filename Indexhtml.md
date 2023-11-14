# Temperature-Converter
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Temperature Converter</title>
    </head>
    
    <body>
        <div class="container">
            <h1>Temperature Converter</h1>
            <div class="converter">
                <label for="celsius">Celsius:</label>
                <input type="number" id="celsius" placeholder="Enter temperature in Celsius">
                <button onclick="convertToCelsius()">Convert to Fahrenheit</button>
                <div id="result"></div>
            </div>
        </div>
    
        <script src="script.js"></script>
    </body>
    
    </html>