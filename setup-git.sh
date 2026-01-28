#!/bin/bash
# Setup script for Chattabox Public Website Git repository

cd "$(dirname "$0")"

echo "Setting up Git repository for Chattabox Public Website..."

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Chattabox public marketing website - complete project structure with all components and styling"

# Set main branch
git branch -M main

echo ""
echo "✅ Git repository initialized and committed!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub named 'Chattabox-Public-Website'"
echo "2. Run these commands:"
echo "   git remote add origin <your-repo-url>"
echo "   git push -u origin main"
echo ""
