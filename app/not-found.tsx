import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "Record Not Found",
  description: "File yang kamu cari tidak ada di arsip ini.",
};

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-[80svh] items-center overflow-hidden focus:outline-none"
      id="main"
      tabIndex={-1}
    >
      <StarField opacity="opacity-[0.1]" />

      <div className="site-shell relative z-10 py-20 md:py-28">
        <p className="label label-bone">ERROR / 404</p>
        <h1 className="display mt-6 text-[clamp(3.5rem,12vw,12rem)] font-medium leading-[0.78] tracking-[-0.055em]">
          RECORD{" "}
          <br />
          NOT FOUND
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-ash">
          File yang kamu cari tidak ada di arsip ini. Mungkin sudah dipindahkan,
          atau memang belum pernah disimpan.
        </p>
        <a className="btn btn-solid mt-10" href="/">
          BACK TO ARCHIVE <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </main>
  );
}
