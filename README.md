# **Discover the Wonders of the Universe in Real Time**

## **Description**

"Discover the Wonders of the Universe in Real Time!" is a responsive one-page web application designed to captivate and educate users about the vast universe. This application utilizes powerful asynchronous JavaScript tools to fetch real-time data from various external APIs including NASA's EPIC and Astronomy Picture of the Day APIs, as well as additional astronomical data from the Astronomy API covering moon phases and planet positions.

Visit website [Celestial Canvas](https://katterina71.github.io/Celestial-Canvas/)

## **Goal**

The primary goal of this application is to:

- **Educate users** about celestial events and cosmic phenomena.
- **Demonstrate proficiency** in modern JavaScript techniques including asynchronous programming, event handling, and module organization.
- **Provide interactive learning** through real-time data visualization from trusted scientific sources.

## **Features**

- **Live Astronomy Photos**: Daily images from NASA's Astronomy Picture of the Day (APOD) and Earth Polychromatic Imaging Camera (EPIC).
- **Moon Phases and Planetary Positions**: Updated information on current moon phases and visible planetary alignments.
- **Responsive Design**: Ensures a seamless experience across different devices and screen sizes.

## **Technologies Used**

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **NASA APIs**
    - EPIC API
    - Astronomy Picture of the Day API
- **Astronomy API**
    - Moon Phase Data
    - Planet Data
      
## **Project Features and Instructions**

### **External Web API Interaction**

- **Data Integration**: Used the **`fetch`** API to communicate with external web APIs such as the NASA API and AstronomyAPI. Fetch data dynamically and utilize this data to populate the content and features of the application.

### **User Interaction Features**

- **Dynamic Content Loading**: Implement interactive features such as a search functionality or a paginated gallery. These features should use **`GET`** requests to retrieve associated data effectively. For example, implement a feature to check celestial bodies using the AstronomyAPI.
- **Data Manipulation**: Allow users to manipulate data through **`POST`** requests, such as submitting a Moon Path request by date and coordinates. Verify that the chosen API supports **`POST`** methods for the required actions before implementation.

### **Code Organization**

- **Modular JavaScript**: Organize JavaScript code into six distinct modules to streamline management and enhance maintainability:
    1. **dom.js**: Collect and manage all DOM elements.
    2. **apiNasa.js** and **apiAstronomy.js**: Handle connections and interactions with the NASA and AstronomyAPIs, respectively.
    3. **module-1.js**: Focus on date manipulation utilities.
    4. **carousel.js**: Manage DOM manipulations specifically for carousel functionality.
    5. **celestialsbodies.js**: Define a class or module to manage celestial body data objects.
- **Asynchronous Programming**: Make extensive use of Promises and the **`async/await`** syntax to handle asynchronous operations, ensuring that API calls and data processing are executed in the correct order without causing race conditions or other timing issues.
- **Error Handling**: Implement robust error handling using **`try`** and **`catch`** blocks to manage exceptions and unexpected behaviors, particularly in asynchronous code.

### **User Experience**

- **Front-End Design**: Created an engaging and responsive user interface using advanced HTML and CSS techniques. Ensure the application is visually appealing and accessible across different devices and screen sizes.
## **How to Use**

1. **Visit the Website**: Open your preferred web browser and go to [Celestial Canvas](https://katterina71.github.io/Celestial-Canvas/).
2. **Navigate the Interface**: Use the top navigation menu to select different features such as EPIC, APOD, Moon Phases, or Planets.
3. **Interact**: Click on images or data points to get more detailed scientific information.

## **Acknowledgments**

- NASA and the Astronomy API for providing free access to their data and imagery.
