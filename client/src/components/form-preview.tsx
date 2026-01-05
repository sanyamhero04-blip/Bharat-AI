import { FormData } from "./form-filler";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function FormPreview({ data }: { data: FormData }) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
      duration: 2000,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Helper component for government style box characters
  const CharBox = ({ text, length = 25 }: { text: string, length?: number }) => {
    const chars = text.toUpperCase().split('');
    const emptyBoxes = Array(Math.max(0, length - chars.length)).fill('');
    
    return (
      <div className="flex flex-wrap gap-[1px]">
        {[...chars, ...emptyBoxes].map((char, i) => (
          <div 
            key={i} 
            className="w-5 h-7 border border-black flex items-center justify-center text-sm font-mono font-bold bg-white text-black"
          >
            {char}
          </div>
        ))}
      </div>
    );
  };

  const FieldRow = ({ label, value, copyKey }: { label: string, value: string, copyKey: string }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs uppercase font-bold text-gray-600">{label}</span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-6 text-xs text-primary hover:text-primary/80"
          onClick={() => copyToClipboard(value, label)}
        >
          {copiedField === label ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
          {copiedField === label ? "Copied" : "Copy"}
        </Button>
      </div>
      <CharBox text={value} />
    </div>
  );

  return (
    <div className="bg-white p-6 border-2 border-gray-300 rounded-sm relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 font-black text-6xl -rotate-45 pointer-events-none select-none z-0">
        PREVIEW ONLY
      </div>

      <div className="relative z-10">
        <div className="border-b-2 border-black pb-4 mb-6 text-center">
          <h2 className="text-xl font-bold uppercase text-black">Form No. 49A</h2>
          <p className="text-xs font-semibold text-gray-600">Application for Allotment of Permanent Account Number</p>
          <div className="mt-2 flex justify-center gap-8 text-[10px] font-bold uppercase">
            <span>(See Rule 114)</span>
            <span>Only for Indian Citizens</span>
          </div>
        </div>

        <div className="mb-6 p-2 border border-black bg-gray-50 text-[10px] leading-tight">
          Assessing Officer (AO code): <span className="border-b border-black inline-block w-20 h-3"></span>
          Area Code: <span className="border-b border-black inline-block w-12 h-3 mx-2"></span>
          AO Type: <span className="border-b border-black inline-block w-10 h-3 mx-2"></span>
          Range Code: <span className="border-b border-black inline-block w-12 h-3 mx-2"></span>
          AO No: <span className="border-b border-black inline-block w-10 h-3 mx-2"></span>
        </div>

        <FieldRow label="1. Full Name (Please refer to instructions)" value={data.fullName} copyKey="fullName" />
        <FieldRow label="2. Father's Name" value={data.fatherName} copyKey="fatherName" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldRow label="3. Date of Birth" value={data.dob.replace(/\//g, '')} copyKey="dob" />
          <div className="mb-4">
            <span className="text-xs uppercase font-bold text-gray-600 block mb-1">4. Gender</span>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 border border-black px-2 py-1 bg-white">
                <div className={`w-4 h-4 border border-black rounded-full flex items-center justify-center ${data.gender === 'male' ? 'bg-black' : ''}`}>
                  {data.gender === 'male' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className="text-sm font-bold text-black uppercase">Male</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-2 py-1 bg-white">
                <div className={`w-4 h-4 border border-black rounded-full flex items-center justify-center ${data.gender === 'female' ? 'bg-black' : ''}`}>
                  {data.gender === 'female' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className="text-sm font-bold text-black uppercase">Female</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 border-t border-dashed border-gray-400 pt-4">
           <FieldRow label="5. PAN Number (If already allotted)" value={data.pan} copyKey="pan" />
           <FieldRow label="6. Aadhaar Number (12 digits)" value={`XXXXXXXX${data.aadhaar.slice(-4)}`} copyKey="aadhaar" />
        </div>

        <div className="my-4 border-t border-dashed border-gray-400 pt-4">
          <h3 className="font-bold text-sm mb-2 text-black uppercase underline">7. Address for Communication</h3>
          <FieldRow label="Flat / Door / Block No." value={data.houseNo} copyKey="houseNo" />
          <FieldRow label="Road / Street / Locality" value={data.area} copyKey="area" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <FieldRow label="City / Village" value={data.city} copyKey="city" />
             <FieldRow label="District" value={data.district} copyKey="district" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <FieldRow label="State / Union Territory" value={data.state} copyKey="state" />
             <FieldRow label="PIN Code" value={data.pincode} copyKey="pincode" />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t-2 border-black flex justify-between items-end">
          <div className="text-[10px] font-bold max-w-[200px]">
            I/We, the applicant, in the capacity of ________________ have declared that what is stated above is true.
          </div>
          <div className="border-2 border-black w-40 h-16 flex items-center justify-center text-[10px] font-bold text-gray-400">
            SIGNATURE / LEFT THUMB IMPRESSION
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 mt-6 rounded text-xs text-yellow-800">
          <strong>Note:</strong> This preview is researched based on <strong>Form 49A (Rule 114)</strong> of the Income Tax Department. It uses the official block-letter grid system to ensure your data fits perfectly.
        </div>
      </div>
    </div>
  );
}
