import { Layout } from "@/components/layout";
import { FormFiller } from "@/components/form-filler";
import { SeoHead } from "@/components/seo-head";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldCheck, AlertTriangle, FileText } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <SeoHead />
      
      {/* H1 - Main Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-primary tracking-tight">
        PAN & Aadhaar Form Filling Online – Indian Government Auto-Filler
      </h1>

      {/* Intro Section */}
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <p className="text-lg text-muted-foreground">
          Correctly filling Indian government forms like PAN and Aadhaar is crucial to avoid rejections. 
          Many applications get rejected due to simple spelling mistakes, incorrect format, or unclear handwriting.
        </p>
        <p className="text-muted-foreground">
          This free tool helps you generate a perfect, government-style filled preview of your form. 
          Use it as a reference guide to fill your actual physical or online forms without errors. 
          Ideal for PAN Correction, New PAN Application (Form 49A), and Aadhaar Update forms.
        </p>
      </div>

      {/* Tool UI */}
      <FormFiller />

      {/* How It Works Section */}
      <section id="how-it-works" className="mt-20 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <FileText className="text-accent" />
          How This Tool Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Enter Details</h3>
            <p className="text-sm text-muted-foreground">Type your name, date of birth, and address exactly as they appear on your supporting documents.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Generate Preview</h3>
            <p className="text-sm text-muted-foreground">Click the button to see how your data looks in the official government block-letter format.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Copy & Fill</h3>
            <p className="text-sm text-muted-foreground">Copy the values and use the preview as a guide to fill the official form online or offline.</p>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section id="common-mistakes" className="mt-20 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <AlertTriangle className="text-destructive" />
          Common Mistakes While Filling PAN & Aadhaar Forms
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Name Mismatch</AlertTitle>
            <AlertDescription>
              Using initials (e.g., "R. K. Sharma") instead of full name (e.g., "Rajesh Kumar Sharma"). Always write the full name as per proof documents.
            </AlertDescription>
          </Alert>
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Address Format</AlertTitle>
            <AlertDescription>
              Writing the city name in the "Locality" field or forgetting to mention the House Number. Use the correct split fields for address.
            </AlertDescription>
          </Alert>
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Date of Birth Confusion</AlertTitle>
            <AlertDescription>
              Writing DOB in MM/DD/YYYY format instead of the Indian standard DD/MM/YYYY. This is a very common reason for rejection.
            </AlertDescription>
          </Alert>
          <Alert className="border-destructive/20 bg-destructive/5">
             <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Signature Issues</AlertTitle>
            <AlertDescription>
              Signing across the photo or signing in Blue ink when Black ink is required (or vice versa depending on specific form rules).
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="mt-20 mb-20 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <ShieldCheck className="text-green-600" />
          Frequently Asked Questions (FAQs)
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How to fill PAN correction form online?</AccordionTrigger>
            <AccordionContent>
              To fill a PAN correction form online, visit the NSDL or UTIITSL website. Select "Changes or Correction in existing PAN Data". Fill in your details exactly as per your supporting documents. You will need to upload proof of identity, address, and date of birth.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why PAN forms get rejected?</AccordionTrigger>
            <AccordionContent>
              PAN forms often get rejected due to: 1) Mismatch in name/DOB with Aadhaar. 2) Using initials instead of full name. 3) Unclear signature or photo. 4) Incorrect address format.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How to write address in Aadhaar form?</AccordionTrigger>
            <AccordionContent>
              The address in Aadhaar form must match your proof of address document exactly. Ensure you split the address correctly into House No., Street, Landmark, Area, City, and State fields. Do not merge fields.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I use this tool to submit my PAN application?</AccordionTrigger>
            <AccordionContent>
              No. This is a <strong>form helper tool only</strong>. It generates a preview to help you fill the form correctly. You must submit your application on the official NSDL or UTIITSL websites.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is my data safe with this tool?</AccordionTrigger>
            <AccordionContent>
              Yes. This tool runs entirely in your browser. We do not store, save, or transmit any of the data you enter. Once you refresh the page, your data is gone.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-6">
            <AccordionTrigger>What is the fee for PAN card correction?</AccordionTrigger>
            <AccordionContent>
              The fee for PAN card correction is typically ₹107 (including GST) for Indian communication addresses and ₹1,017 for foreign addresses. This is paid on the official portal.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </Layout>
  );
}
