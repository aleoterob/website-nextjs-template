import StackedList from "./ui/stacked-list/stacked-list";

export const metadata: Metadata = {
  title: "Home - next.js template",
  description: "Home - next.js template",
};

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center">
        <h1 className="pt-12 text-7xl text-center">
          Simple Next.js and TailWind Project
        </h1>
        <h1 className="pt-4  pb-10 text-4xl text-center">
          Custom Stacked List Component
        </h1>
        <div className="flex flex-row gap-10">
          <StackedList />
          <StackedList />
          <StackedList />
        </div>
      </main>
    </div>
  );
}
