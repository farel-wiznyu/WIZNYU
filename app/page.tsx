import { About } from "@/components/sections/about";
import { Cover } from "@/components/sections/cover";
import { Manifest } from "@/components/sections/manifest";
import { Personal } from "@/components/sections/personal";
import { Signal } from "@/components/sections/signal";
import { Statement } from "@/components/sections/statement";
import { Works } from "@/components/sections/works";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <main className="focus:outline-none" id="main" tabIndex={-1}>
        <Cover />
        <Statement />
        <Works />
        <Manifest />
        <About />
        <Personal />
        <Signal />
      </main>
      <SiteFooter />
    </>
  );
}
