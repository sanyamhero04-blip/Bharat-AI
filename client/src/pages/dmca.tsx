import { Layout } from "@/components/layout";
import { SeoHead } from "@/components/seo-head";

export default function Dmca() {
  return (
    <Layout>
      <SeoHead 
        title="DMCA Policy - Indian Government Form Auto-Filler" 
        description="DMCA and Copyright policy for the Indian Government Form Auto-Filler tool."
      />
      <div className="max-w-4xl mx-auto py-12 px-4 bg-card border rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-8 border-b pb-4">DMCA Policy</h1>
        
        <div className="prose prose-blue max-w-none text-muted-foreground space-y-6">
          <p>
            Welcome to the Digital Millennium Copyright Act ("DMCA") policy page for our Indian Government Form Auto-Filler website. 
            We respect the intellectual property rights of others and expect our users to do the same.
          </p>

          <h2 className="text-xl font-semibold text-foreground">1. Reporting Infringement</h2>
          <p>
            In accordance with the DMCA, we will respond expeditiously to claims of copyright infringement that are reported to our designated copyright agent. 
            If you are a copyright owner, or are authorized to act on behalf of one, please report alleged copyright infringements by providing a notice with the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identification of the copyrighted work that you claim has been infringed.</li>
            <li>Identification of the material that is claimed to be infringing and where it is located on the site.</li>
            <li>Your contact information (address, telephone number, and email).</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner.</li>
            <li>A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the owner.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">2. Non-Governmental Status</h2>
          <p>
            As stated throughout our site, this is <strong>not</strong> an official government website. We provide educational tools and previews. 
            We do not claim ownership of official government forms or emblems, which are used here for illustrative and educational purposes only under fair use principles.
          </p>

          <h2 className="text-xl font-semibold text-foreground">3. Contact Information</h2>
          <p>
            For any copyright-related inquiries or DMCA notices, please contact us through the Replit project platform or our support email associated with this project.
          </p>

          <div className="bg-muted p-4 rounded border-l-4 border-primary">
            <p className="text-sm font-medium italic">
              Last Updated: January 05, 2026
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
