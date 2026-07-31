import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        w-64
        shrink-0
        flex-col
        border-r
        bg-background
      "
    >
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-lg font-semibold">
          AI Japanese Tutor
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <Navigation />
      </div>

      {/* Footer */}
      <div className="border-t p-4 text-xs text-muted-foreground">
        v0.1.0
      </div>
    </aside>
  );
}