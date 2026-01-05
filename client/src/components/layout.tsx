import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <Link href="/" className="text-xl font-bold flex items-center gap-2 text-primary">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Emblem of India" 
                className="h-8 w-auto opacity-90"
              />
              <span className="hidden sm:inline">GovForm Helper</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2 hidden md:flex">
              <Globe className="h-4 w-4" />
              <span>English / हिंदी</span>
            </Button>
            {/* Mobile simplified toggle */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-muted mt-auto border-t">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold mb-2">Disclaimer:</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This is <strong>not</strong> an official government website. This tool is designed for educational and assistance purposes only to help users correctly fill out forms. We do not store any user data, and this tool does not submit any forms to government portals. Please visit official websites like incometax.gov.in or uidai.gov.in for official services.
              </p>
            </div>
            <div className="flex justify-end gap-6 text-sm text-muted-foreground">
              <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
              <a href="#common-mistakes" className="hover:text-primary transition-colors">Common Mistakes</a>
              <a href="#faqs" className="hover:text-primary transition-colors">FAQs</a>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-muted-foreground/10 text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GovForm Auto-Filler. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
