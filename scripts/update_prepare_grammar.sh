#!/bin/bash

# Navigate to the root directory where the script resides
cd "$(dirname "$0")/.."

# Execute update_grammar.py
echo "Executing update_grammar.py..."
python3 update_grammar.py
if [ $? -ne 0 ]; then
    echo "Error executing update_grammar.py. Exiting..."
    exit 1
fi

# Navigate to frontend directory
cd frontend

# Execute npm run prepare
echo "Executing 'npm run prepare' in frontend directory..."
npm run prepare
if [ $? -ne 0 ]; then
    echo "Error executing 'npm run prepare'. Exiting..."
    exit 1
fi

echo "Script completed successfully!"
