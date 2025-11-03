
import { prismaClient } from "@repo/db/client";
import { WebSocketServer } from 'ws';


export default async function Home() {
  const user = await prismaClient.users.findFirst();

  return (
    <div>
      {user?.username}
      {user?.password}
      <br />
      <div>
      <h1 style={{ color: 'red', fontSize: '24px' }}>Added the CI CD configuration - This is running on the production server</h1>
      </div>
    </div>
  );
}
