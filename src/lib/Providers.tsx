"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ThemeRegistry from "@/theme/ThemeRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeRegistry>{children}</ThemeRegistry>
    </Provider>
  );
};

export default Providers;
