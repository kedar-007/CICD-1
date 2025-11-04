
import { prismaClient } from "@repo/db/client";


export default async function Home() {
  const user = await prismaClient.users.findFirst();

  return (
    <div>
      {user?.username}
      {user?.password}
      <br />
      <div>
      <h1 style={{ color: 'red', fontSize: '24px' }}>Added the CI CD configuration this is the dev server</h1>
      </div>
    </div>
  );
}
