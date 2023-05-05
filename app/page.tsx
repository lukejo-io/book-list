import { works } from "@/app/resources";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 md:p-24">
      <div className="flex flex-row flex-wrap gap-2 bg-black justify-center">
        {works.map(
          ({ author, begin_date, era, date_is_certain, end_date, titles }) => {
            return (
              <AuthorCard
                name={author}
                beginDate={begin_date}
                dateIsCertain={date_is_certain}
                endDate={end_date}
                era={era}
              />
            );
          }
        )}
      </div>
    </main>
  );
}

type AuthorCardProps = {
  name: string;
  dateIsCertain: boolean;
  beginDate: number;
  endDate: number | null;
  era: "BCE" | "ACE";
};

function AuthorCard({
  name,
  dateIsCertain,
  beginDate,
  endDate,
  era,
}: AuthorCardProps) {
  const dateString = `${!dateIsCertain ? "𝘤. " : ""}${beginDate}${
    endDate ? "-" + endDate + " " : " "
  }${era}`;

  return (
    <div
      className={
        "bg-amber-400 w-64 h-64 rounded-xl p-3 flex flex-row cursor-pointer hover:drop-shadow-2xl"
      }
    >
      <div className={"flex flex-col bg-red-100 w-full"}>
        {" "}
        <div className={"text-xl cursor-pointer"}>{name}</div>
        <div>{dateString}</div>
      </div>
      <div className={"bg-green-100"}>...</div>
    </div>
  );
}
