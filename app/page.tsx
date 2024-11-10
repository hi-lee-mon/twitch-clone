import {UserButton} from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>ダッシュボード</h1>
      <UserButton />
    </div>
  );
}
