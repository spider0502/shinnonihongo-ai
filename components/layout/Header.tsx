import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header
            className="
        flex
        h-16
        items-center
        justify-between
        border-b
        px-4
      "
        >
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
            >
                <Menu className="h-5 w-5" />
            </Button>

            <h1 className="ml-2 text-lg font-semibold lg:hidden">
                AI Japanese Tutor
            </h1>
        </header>
    );
}