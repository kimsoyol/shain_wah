import { signOut } from "@/auth";

const page = () => {
  return (
    <div>
      dahboard
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      ></form>
    </div>
  );
};
export default page;
