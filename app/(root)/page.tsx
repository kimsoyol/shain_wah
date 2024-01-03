import { getAll } from "@/lib/data";
import { signOut } from "@/auth";

const page = async () => {
  const data: any = await getAll();

  return (
    <>
      <div>
        {data.map((d: any) => (
          <div key={d.name}>{d.name}</div>
        ))}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </>
  );
};
export default page;
