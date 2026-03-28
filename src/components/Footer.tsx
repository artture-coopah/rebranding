import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-sand-950 text-sand-400 py-14 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Aifficient - AI Automatisering voor KMO's in België" width={32} height={32} className="rounded-lg size-8" />
            <span className="font-display text-lg font-semibold tracking-tight">
              <span className="text-bolt-light">ai</span>
              <span className="text-white">fficient</span>
              <span className="text-sand-600 text-xs ml-0.5">.be</span>
            </span>
          </div>
          <p className="text-sm text-sand-600 mt-1">
            AI-automatisering voor KMO&apos;s in Belgi&euml;.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#diensten"
            className="hover:text-white transition-colors"
          >
            Diensten
          </a>
          <a
            href="#waarom"
            className="hover:text-white transition-colors"
          >
            Waarom wij
          </a>
          <a
            href="#werkwijze"
            className="hover:text-white transition-colors"
          >
            Werkwijze
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="/case-studies" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a
            href="mailto:hello@aifficient.be"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-10 pt-8 border-t border-sand-800 text-center text-xs text-sand-600">
        &copy; {new Date().getFullYear()} Aifficient. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
