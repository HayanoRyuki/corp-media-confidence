"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

export function HubSpotForm({ portalId, formId, region = "na2" }: HubSpotFormProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: "#hubspot-form-container",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      const container = document.getElementById("hubspot-form-container");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [portalId, formId, region]);

  return (
    <div id="hubspot-form-container" className="hubspot-form-wrapper" />
  );
}
