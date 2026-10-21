import { NavLink } from "react-router";

const phdPages = [
  { label: "Institute Scheme", path: "/research/scholar/institute" },
  { label: "Visvesvaraya Scheme", path: "/research/scholar/visvesvaraya" },
  { label: "Graduated PhD Students", path: "/research/scholar/graduated" },
];

const PhdResearchTabs = () => (
  <nav
    aria-label="PhD pages"
    className="overflow-x-auto border-b border-white/20"
  >
    <div className="grid min-w-[540px] grid-cols-3">
      {phdPages.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex min-h-12 items-center justify-center border-b-2 px-3 py-3 text-center text-sm font-semibold transition-colors ${
              isActive
                ? "border-white bg-white/15 text-white"
                : "border-transparent text-white/75 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default PhdResearchTabs;
