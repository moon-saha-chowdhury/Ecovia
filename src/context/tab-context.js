"use client";

import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export function TabProvider({ children }) {
  const [activeTab, setActiveTab] = useState(0); // 0 = Home by default
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  return useContext(TabsContext);
}
