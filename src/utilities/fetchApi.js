// Define a constant for the base URL of the server
const BASE_URL =" https://mern-blog-app-vcoz.onrender.com"

// Define a function named 'request' for making HTTP requests
export const request = async (url, method, headers = {}, body = {}, isNotStringified = false) => {
    let res;
    let data;

    // Determine the type of HTTP request based on the specified 'method'
    switch (method) {
        case 'GET':
            // If the method is 'GET', send a GET request to the specified URL
            res = await fetch(BASE_URL + url, { headers });
            // Parse the response as JSON and return the data
            data = await res.json();
            return data;

        case 'POST':
            // Check if the body needs to be stringified (default is JSON)
            if (isNotStringified) {
                // If not, send the body as is (e.g., form data)
                res = await fetch(BASE_URL + url, { headers, method, body });
            } else {
                // If yes, stringify the body as JSON and send a POST request
                res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify({ ...body }) });
            }
            
            // Parse the response as JSON and return the data
            data = await res.json();
            console.log(data);
            return data;

        case 'PUT':
            // Send a PUT request with the specified body (stringified as JSON)
            res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify({ ...body }) });
            // Parse the response as JSON and return the data
            data = await res.json();
            return data;

        case 'DELETE':
            // Send a DELETE request
            res = await fetch(BASE_URL + url, { headers, method });
            // Parse the response as JSON and return the data
            data = await res.json();
            return data;

        default:
            // Return undefined for unsupported or unspecified methods
            return;
    }
}
