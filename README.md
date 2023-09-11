# Hacker-Rank-Automation

## Overview

This project is a web scraping automation tool designed to automatically submit code on HackerRank using the Chromium browser. It leverages Node.js to create a streamlined and efficient process for submitting solutions to coding challenges on the HackerRank platform.

## Prerequisites

Before you can use this automation tool, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): You need Node.js installed on your machine to run JavaScript code.
- [Chromium Browser](https://www.chromium.org/getting-involved/download-chromium): The project uses the Chromium browser for automation. Ensure you have it installed.

## Setup

1. **Clone the Repository**: Begin by cloning this repository to your local machine:

   ```
   git clone https://github.com/Ankit92110/Hacker-Rank-Automation.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm:

   ```
   cd Hacker-Rank-Automation
   npm install
   ```

3. **Configuration**: Open the `config.js` file and provide your HackerRank credentials. This includes your username and password.

   ```javascript
   module.exports = {
     username: 'your-username',
     password: 'your-password',
   };
   ```

## Usage

To use this automation tool, follow these steps:

1. **Add Your Code**: Place your code solution in a file named `solution.js` within the project directory. Ensure that the code is ready for submission.

2. **Run the Script**: Execute the following command to start the automation process:

   ```
   node index.js
   ```

3. **Sit Back and Relax**: The script will automate the process of logging into HackerRank, navigating to the specific challenge, submitting your code, and providing feedback on whether the submission was successful.

## Troubleshooting

If you encounter any issues while using this automation tool, consider the following:

- Make sure your HackerRank credentials are correctly configured in the `config.js` file.
- Ensure that the `solution.js` file contains your code solution.
- Check your internet connection and ensure that the Chromium browser is installed and accessible.

## Disclaimer

This project is intended for educational and personal use only. Use it responsibly and ensure that you comply with HackerRank's terms of service.

## Contributing

If you would like to contribute to this project or report any issues, please open an issue or submit a pull request on the GitHub repository.


---

Happy coding! 🚀
