import { Aboutme } from "./aboutme";
import { profile } from "./constants";
import { Contact } from "./contact";
import { Introduction } from "./introduction";
import { Nav } from "./nav";
import { Projects } from "./projects";



export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth">
      <main className="mx-auto max-w-none px-6">
        <Nav />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 py-16 sm:py-24 lg:flex-row lg:gap-6">
          <div className="lg:sticky lg:top-24 lg:w-2/5 lg:self-start"><Introduction /></div>

          <div className="lg:w-3/5">
            <Aboutme />

            <Projects />

            <Contact />

          </div>
        </div>


      </main>

      <footer className="border-t border-foreground/10 py-8 text-center text-sm opacity-60">
        {profile.name}
      </footer>
    </div >
  );
}
