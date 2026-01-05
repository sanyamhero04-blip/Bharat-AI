import { Layout } from "@/components/layout";
import { FormFiller } from "@/components/form-filler";
import { SeoHead } from "@/components/seo-head";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldCheck, AlertTriangle, FileText, Info } from "lucide-react";
import { Link } from "wouter";

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
          Correctly filling Indian government forms like <strong>pan form filling online</strong> and <strong>aadhaar form filling help</strong> is crucial to avoid rejections. 
          Many applications get rejected due to simple spelling mistakes, incorrect format, or unclear handwriting in your <strong>pan correction form filled example</strong>.
        </p>
        <p className="text-muted-foreground">
          This <strong>indian government form auto filler</strong> helps you generate a perfect, government-style filled preview. 
          Whether you need a <strong>aadhaar update form sample</strong> or a new application, our tool ensures your data is formatted correctly.
        </p>
      </div>

      {/* Quick Links Section (Internal Links) */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
        <a href="#how-it-works" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all border border-secondary-border">How it Works</a>
        <a href="#common-mistakes" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all border border-secondary-border">Common Mistakes</a>
        <a href="#faqs" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all border border-secondary-border">FAQs</a>
        <Link href="/dmca">
          <a className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all border border-secondary-border">DMCA Policy</a>
        </Link>
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
            <p className="text-sm text-muted-foreground">Type your name and address for your <strong>pan card form filling</strong> needs.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Generate Preview</h3>
            <p className="text-sm text-muted-foreground">See a real-time <strong>pan card form example</strong> in official block letters.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Copy & Fill</h3>
            <p className="text-sm text-muted-foreground">Perfect for those searching for <strong>how to write address in Aadhaar form</strong> correctly.</p>
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
              Using initials instead of full name. Crucial for <strong>pan form filling online</strong> success.
            </AlertDescription>
          </Alert>
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Address Format</AlertTitle>
            <AlertDescription>
              Writing city in locality. Vital for <strong>aadhaar update form sample</strong> accuracy.
            </AlertDescription>
          </Alert>
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Date format</AlertTitle>
            <AlertDescription>
              Use DD/MM/YYYY. Most common <strong>pan correction form</strong> error.
            </AlertDescription>
          </Alert>
          <Alert className="border-destructive/20 bg-destructive/5">
             <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Ink Color</AlertTitle>
            <AlertDescription>
              Always check if Black or Blue ink is required for your specific form type.
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
              To fill a PAN correction form online, visit official portals like NSDL. This tool provides a <strong>pan correction form filled example</strong> to guide you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why PAN forms get rejected?</AccordionTrigger>
            <AccordionContent>
              Rejection happens due to mismatches. Use our <strong>indian government form auto filler</strong> to verify your data layout first.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How to write address in Aadhaar form?</AccordionTrigger>
            <AccordionContent>
              Split it into House No, Street, and Locality. Our <strong>aadhaar update form sample</strong> preview shows the exact split required.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is there a Hindi version? पैन कार्ड फॉर्म कैसे भरें?</AccordionTrigger>
            <AccordionContent>
              Yes, we provide guidance for <strong>पैन कार्ड फॉर्म कैसे भरें</strong> and <strong>आधार कार्ड फॉर्म उदाहरण</strong> to help all Indian users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

    </Layout>
  );
}
