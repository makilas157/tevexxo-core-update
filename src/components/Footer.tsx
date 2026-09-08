import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

import logo from "@/assets/logo.png";

const navigate = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/why-tevexxo", label: "Why Tevexxo" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="glow-ring inline-flex h-8 w-8 items-center justify-center">
              <img
                src={logo}
                alt="Tevexxo logo"
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="font-display text-base font-bold tracking-[0.2em]">TEVEXXO</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A technology studio building intelligent digital products — web platforms, mobile apps
            and AI systems.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.3em] text-primary uppercase">Navigate</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navigate.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.3em] text-primary uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> hello@tevexxo.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Remote-first, worldwide
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tevexxo. All rights reserved.
      </div>
    </footer>
  );
}
