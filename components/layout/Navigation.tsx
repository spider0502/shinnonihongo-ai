"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/navigation";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col gap-1 p-2">
            {navigation.map((item) => {
                const Icon = item.icon;

                const active =
                    item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`
              flex
              items-center
              gap-3
              rounded-lg
              px-3
              py-2
              transition-colors

              ${active
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }
            `}
                    >
                        <Icon className="h-5 w-5" />

                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
}