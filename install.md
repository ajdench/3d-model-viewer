# Offline Installation Guide: 3D Model Viewer

## 1. Introduction

This guide provides instructions on how to install and run the 3D Model Viewer on a web server in a private, offline network. The application has been designed to be self-contained, meaning it does not require an internet connection to function after the initial setup.

## 2. Prerequisites

To prepare the application for offline use, you will need a machine with an internet connection and the following software installed:

*   **Node.js** (v20.19.0 or higher)
*   **npm** (v8.0.0 or higher)

To host the application on your private network, you will need a web server. Any modern web server will work. This guide provides examples for:

*   **Nginx**
*   **Python's built-in HTTP server**

## 3. Installation Steps

The installation process involves two main stages: building the application and deploying it to your offline server.

### Stage 1: Build the Application

This stage requires an internet connection to download the necessary dependencies.

1.  **Download the Project:**
    Obtain the project files (e.g., by cloning the Git repository or downloading a ZIP archive) and place them on your build machine.

2.  **Open a Terminal:**
    Navigate to the root directory of the project in your terminal.

3.  **Install Dependencies:**
    Run the following command to install the project's dependencies:
    ```bash
    npm install
    ```

4.  **Build for Production:**
    Run the following command to create a production-ready build of the application:
    ```bash
    npm run build
    ```
    This command will create a new directory named `dist` in the project's root. This directory contains all the HTML, CSS, and JavaScript files needed to run the application, with all dependencies bundled.

### Stage 2: Deploy to Offline Server

1.  **Transfer the `dist` Directory:**
    Copy the entire `dist` directory from your build machine to your offline web server.

2.  **Configure Your Web Server:**
    Configure your web server to serve the files from the `dist` directory. Here are examples for Nginx and Python.

    **Example: Nginx**

    Create a new server block configuration file (e.g., `/etc/nginx/sites-available/3d-viewer`) with the following content, replacing `/path/to/your/dist` with the actual path to the `dist` directory:

    ```nginx
    server {
        listen 80;
        server_name your-server-name;

        root /path/to/your/dist;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
    ```

    **Example: Python HTTP Server**

    If you have Python installed on your server, you can use its built-in web server for a simple setup. Navigate to the `dist` directory in a terminal and run:

    ```bash
    # For Python 3
    python3 -m http.server 8080
    ```
    The application will be available at `http://your-server-ip:8080`.

## 4. Conclusion

Once your web server is configured, you can access the 3D Model Viewer from any machine on your private network by navigating to the server's address in a web browser. The application will run entirely on your local network without any external internet requests.
