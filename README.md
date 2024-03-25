# myFlix-client
Project Overview:

MyFlix-client is an intuitive single-page application (SPA) crafted with React, React Bootstrap, React Router, lodash, and Bootstrap. It offers a curated selection of film content, enabling users to effortlessly browse through a comprehensive movie list, search titles, delve into detailed movie information, and conveniently bookmark favorites. Additionally, users can update their profiles with ease, and robust authentication mechanisms ensure secure access. The application boasts responsiveness, ensuring seamless functionality across various devices, and features a personalized 404 error page to gracefully handle invalid routes. Backend security is reinforced through JWT token-based authentication and authorization, alongside password hashing for enhanced protection.

## Accessing the Hosted Site
MyFlix is now hosted and accessible online. You can visit the site at https://lachanmyflix.netlify.app/.

## Prerequisites

Before diving in, make sure you've checked off the following prerequisites:
-Have Node.js installed locally on your machine.
-Ensure npm (Node Package Manager) is readily available.

## Technologies Used
-React: A JavaScript library tailored for crafting dynamic user interfaces.
-React Bootstrap: A React-centric front-end framework extending Bootstrap's capabilities for component development.
-React Router: A routing library intricately designed for React, facilitating seamless navigation across components.
-lodash: A versatile utility library furnishing an array of functions for efficient data manipulation and management across various data types.

## Dependencies
-"bootstrap": "^5.3.3",
-"prop-types": "^15.8.1",
-"react": "^18.2.0",
-"react-bootstrap": "^2.10.1",
-"react-dom": "^18.2.0",
-"react-router": "^6.22.3",
-"react-router-dom": "^6.22.3",
-"save-dev": "^0.0.1-security"
## Development Dependencies
-"@parcel/transformer-sass": "^2.11.0",
-"parcel": "^2.11.0",
-"process": "^0.11.10"

## API
MyFlix communicates with a specialized movie API accessible at [Movie-API](https://github.com/nlachan/movie_api). This API furnishes comprehensive movie details such as titles, descriptions, genres, directors, and additional pertinent information. For further insights into available endpoints and data structures, kindly consult the API documentation.

## Testing with Parcel

If you prefer to test the project locally, follow these steps:

1. Install Parcel globally if you haven't already:
      ```
      npm install -g parcel
      ```
2. Run the following command to start the development server:
      ```
      parcel src/index.html
      ```
3. Open your browser and navigate to `http://localhost:1234/` to view the site.

## Deployment
To deploy MyFlix to a hosting provider, follow the following steps:

1. Compile your React project for production deployment utilizing Parcel (or any other bundler of your preference). For instance, to build the project using Parcel, execute the subsequent command (ensure to adjust the public URL accordingly if needed to align with your hosting provider's setup):
```
parcel build src/index.html --public-url /
```
2. Transfer the resultant dist folder to your hosting provider. This folder encapsulates the compiled and minified files essential for your project. You may utilize an FTP client, the file manager provided by your hosting provider, or any alternative method to upload the files onto your server.

3. Configure your hosting provider to designate the index.html file as the default file for your website. This configuration is pivotal for ensuring proper functionality of single-page applications (SPAs) constructed with React Router. The specific steps for configuring this setting vary based on your chosen hosting provider.



