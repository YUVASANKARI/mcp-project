import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  const transport = new StdioClientTransport({
    command: "python3",
    args: ["../python-server/mcp_server.py"]
  });

  const client = new Client({
    name: "simple-calculator-client",
    version: "1.0.0"
  });

  await client.connect(transport);
  const result = await client.callTool({
    name: "add",
    arguments: { a: 12, b: 45 }
  });
  console.log("Result:", result.content[0].text);
  await client.close();
}

main().catch(console.error);
