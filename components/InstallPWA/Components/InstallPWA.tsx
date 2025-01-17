"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPWA() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    const isInstalled = window.matchMedia("(display-mode: standalone)").matches;
    if (isInstalled) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
      console.log("تم تثبيت التطبيق");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md sm:max-w-sm md:max-w-lg mx-4">
        <div className="flex flex-col items-center">
          <Image
            src="/images/pwadesktop.png"
            alt="شعار التطبيق"
            width={120}
            height={120}
            className="mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center">تثبيت التطبيق</h2>
          <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">
            هل تريد تثبيت التطبيق للوصول السريع والاستخدام بدون إنترنت؟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={handleInstall}
              className="bg-[#462576] text-white px-4 py-2 rounded-lg w-full sm:w-auto"
            >
              تثبيت
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="border border-gray-300 px-4 py-2 text-black rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              لاحقاً
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
