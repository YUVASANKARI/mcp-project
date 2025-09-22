#!/bin/bash
echo "Python (server):"
pip install -r python-server/requirements.txt
python3 python-server/mcp_server.py &
sleep 2
echo "TypeScript Client:"
cd typescript-client
npm install && npm start
