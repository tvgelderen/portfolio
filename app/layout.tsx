import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "../context/AppContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
	title: "Timen van Gelderen - Portfolio",
	description: "Portfolio website of Timen van Gelderen",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="relative scrollbar overflow-x-hidden h-dvh bg-light-primary dark:bg-dark-background">
				<div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_48px] sm:bg-[size:32px_64px] lg:bg-[size:48px_96px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,#181825_70%,transparent_100%)]"></div>
				<ThemeProvider enableSystem={true} attribute="class">
					<AppContextProvider>
						<Navbar />
						{children}
					</AppContextProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
