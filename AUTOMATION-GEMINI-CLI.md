# Automation Process for "Update Git"

This document outlines the standardized process for updating the Git repository using the Gemini CLI.

## Process Steps

1.  **Full Code Review:** Before any changes are committed, a thorough code review will be conducted. This includes checking for code quality, adherence to project conventions, and ensuring that the changes meet the requirements of the task.

2.  **Read CLAUDE.md:** The `CLAUDE.md` file will be read for understanding, but not modified. Any valuable information from it will be incorporated into `GEMINI.md`.

3.  **Update GEMINI.md:** The `GEMINI.md` file will be updated to incorporate any valuable information from `CLAUDE.md` and to reflect any new development guidelines, architectural changes, or other relevant information for the Gemini assistant.

4.  **Update README.md:** The `README.md` file will be updated to reflect the latest changes to the project, ensuring that the documentation is always up-to-date with the current state of the application.

5.  **Git Commit Process:**
    1.  Run `git status` to check the status of the repository.
    2.  Analyze the changes and the conversation history to create a descriptive, plain-text commit message.
    3.  Ask the user to approve the commit message.
    4.  Upon approval, run `git add .` to stage all changes.
    5.  Run `git commit` with the approved message.
    6.  Run `git push origin main` to push the changes to the remote repository.
    7.  After the push is successful, run `npm run deploy` to deploy the application.
    8.  Confirm that the entire process is complete.
