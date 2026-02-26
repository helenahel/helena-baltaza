"use client";

import { useEffect, useState } from "react";
import { requiresPassword } from "@/app/lib/password-config";
import PasswordGate from "./password-gate";

interface ProjectContentWrapperProps {
  slug: string;
  children: React.ReactNode;
}

export default function ProjectContentWrapper({
  slug,
  children,
}: ProjectContentWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if project requires password
    if (!requiresPassword(slug)) {
      setIsAuthenticated(true);
      setIsChecking(false);
      return;
    }

    // Check sessionStorage for existing authentication
    const authKey = `project-auth-${slug}`;
    const isAuthed = sessionStorage.getItem(authKey) === "true";
    setIsAuthenticated(isAuthed);
    setIsChecking(false);
  }, [slug]);

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };

  // Avoid flash of content by showing nothing while checking
  if (isChecking) {
    return null;
  }

  // Show password gate if project requires password and user is not authenticated
  if (requiresPassword(slug) && !isAuthenticated) {
    return <PasswordGate onAuthenticate={handleAuthenticate} slug={slug} />;
  }

  // Show project content
  return <>{children}</>;
}
