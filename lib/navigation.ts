import { LucideIcon } from "lucide-react";
import {
    MessageSquareText,
    Mic,
    History,
    Star,
    Settings,
} from "lucide-react";

export type NavigationItem = {
    title: string;
    href: string;
    icon: LucideIcon;
};

export const navigation: NavigationItem[] = [
    {
        title: "Analyze",
        href: "/",
        icon: MessageSquareText,
    },
    {
        title: "Talk",
        href: "/talk",
        icon: Mic,
    },
    {
        title: "History",
        href: "/history",
        icon: History,
    },
    {
        title: "Favorites",
        href: "/favorites",
        icon: Star,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },

] as const;