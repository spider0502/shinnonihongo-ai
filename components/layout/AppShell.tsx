import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
    children: React.ReactNode;
};

export default function AppShell({
    children,
}: Props) {
    return (
        <div className="flex h-dvh bg-background">
            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />

                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}