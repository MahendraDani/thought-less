import { Anchor } from "@/components/Anchor";

export const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-1 text-foreground/30 text-sm">
      <p>
        Developed by{" "}
        <Anchor href={"https://mahendradani.vercel.app"}>
          Mahendra Dani
        </Anchor>
      </p>
    </div>
  );
};
