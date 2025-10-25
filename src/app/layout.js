"use client";
import NoiseWrapper from "@/component/ui/NoiseWrapper/NoiseWrapper";
import "./globals.css";
import SmoothScroll from "@/component/SmoothScroll/SmoothScroll";
import LoadingPage from "@/component/page/LoadingPage/LoadingPage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CustomCursor from "@/component/ui/CustomCursor/CustomCursor";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <html lang="en">
      <body>
        {isLoading && <LoadingPage />}
        {/* <NoiseWrapper /> */}
        {/* <CustomCursor /> */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SmoothScroll>{children}</SmoothScroll>
          </motion.div>
        )}
      </body>
    </html>
  );
}
