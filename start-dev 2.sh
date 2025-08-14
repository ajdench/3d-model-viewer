#!/bin/bash
# Start the Vite development server in the background
npm run dev &
# Wait for the server to start
sleep 5
# Open the application in the default browser
open http://localhost:5173
