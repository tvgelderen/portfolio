"use client";

import { useState, useEffect } from "react";

const useWindowDimensions = () => {
	const [hasWindow, setHasWindow] = useState<boolean>(false);

	const getWindowDimensions = () => {
		const width = hasWindow ? window.innerWidth : null;
		const height = hasWindow ? window.innerHeight : null;

		return { width, height };
	};

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		setHasWindow(typeof window !== "undefined");

		if (hasWindow) {
			const handleResize = () =>
				setWindowDimensions(getWindowDimensions());

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	});

	return windowDimensions;
};

export default useWindowDimensions;
