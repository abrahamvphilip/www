"use client";

import { createContext, useContext } from "react";

type PageLoadContextValue = {
	isLoaded: boolean;
};

export const PageLoadContext = createContext<PageLoadContextValue>({
	isLoaded: true, // Default to true for pages without loader
});

export function usePageLoad() {
	return useContext(PageLoadContext);
}
