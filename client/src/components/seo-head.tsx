import { useEffect } from 'react';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export function SeoHead({ 
  title = "PAN & Aadhaar Form Filling Online – Indian Government Auto-Filler", 
  description = "Free tool to generate government-style filled PAN & Aadhaar forms. Helps avoid mistakes in correction & update forms. Secure, no data stored.",
  canonicalUrl = "https://replit.com/@replit/IndianFormFiller"
}: SeoHeadProps) {
  
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Tags
    const updateMeta = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('twitter:title', title, 'property');
    updateMeta('twitter:description', description, 'property');
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', canonicalUrl, 'property');

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Schema JSON-LD Injection
    const schemaId = 'seo-schema-script';
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": "Indian Government Form Auto-Filler",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          },
          "description": description
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How to fill PAN correction form online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To fill a PAN correction form online, you need to visit the NSDL or UTIITSL website, select 'Changes or Correction in existing PAN Data', fill in your details exactly as they appear on your supporting documents, and pay the requisite fee."
              }
            },
            {
              "@type": "Question",
              "name": "Why PAN forms get rejected?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common reasons for PAN form rejection include mismatch in name or date of birth with supporting documents, use of initials instead of full names, incorrect signature, or submitting blurry documents."
              }
            },
            {
              "@type": "Question",
              "name": "How to write address in Aadhaar form?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The address in the Aadhaar form should be written exactly as it appears on your proof of address document. Divide it clearly into House No., Street, Locality, Landmark, Village/City, District, State, and Pin Code."
              }
            },
            {
              "@type": "Question",
              "name": "Is this tool safe to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, this tool is completely safe. It runs entirely in your browser, and no data is sent to any server or stored anywhere. It is designed purely for educational and preview purposes."
              }
            },
             {
              "@type": "Question",
              "name": "Can I submit the form directly from here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, this is a form helper tool. It generates a filled preview for you to copy or reference. You must submit the actual form on the official government portals."
              }
            },
            {
              "@type": "Question",
              "name": "What documents are required for PAN card?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically, you need Proof of Identity (Aadhaar, Voter ID, etc.), Proof of Address (Utility bill, Aadhaar, etc.), and Proof of Date of Birth (Birth Certificate, Matriculation Certificate, etc.)."
              }
            }
          ]
        }
      ]
    };
    
    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, canonicalUrl]);

  return null;
}
