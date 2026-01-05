import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FormPreview } from "./form-preview";
import { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";

// Validation Schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father's name is required"),
  dob: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "DOB must be DD/MM/YYYY"),
  gender: z.enum(["male", "female", "transgender"]),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g., ABCDE1234F)"),
  aadhaar: z.string().regex(/^\d{12}$/, "Aadhaar must be 12 digits"),
  houseNo: z.string().min(1, "House/Flat No. is required"),
  area: z.string().min(3, "Area/Locality is required"),
  city: z.string().min(3, "City/Village is required"),
  district: z.string().min(3, "District is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^\d{6}$/, "PIN Code must be 6 digits"),
});

export type FormData = z.infer<typeof formSchema>;

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry"
];

export function FormFiller() {
  const [previewData, setPreviewData] = useState<FormData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      fatherName: "",
      dob: "",
      gender: "male",
      pan: "",
      aadhaar: "",
      houseNo: "",
      area: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
  });

  function onSubmit(data: FormData) {
    setPreviewData(data);
    // Scroll to preview
    document.getElementById("form-preview")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleReset() {
    form.reset();
    setPreviewData(null);
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Input Section */}
      <Card className="border-t-4 border-t-primary shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Enter Your Details
          </CardTitle>
          <CardDescription>
            Fill in the details exactly as per your official documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground border-b pb-1">Personal Details</h3>
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name (As per Aadhaar)</FormLabel>
                      <FormControl>
                        <Input placeholder="RAJESH KUMAR SHARMA" {...field} className="uppercase" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fatherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="SURESH KUMAR SHARMA" {...field} className="uppercase" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input placeholder="DD/MM/YYYY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="transgender">Transgender</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground border-b pb-1">Identity Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PAN Number</FormLabel>
                        <FormControl>
                          <Input placeholder="ABCDE1234F" {...field} className="uppercase" maxLength={10} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="aadhaar"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aadhaar Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234 5678 9012" {...field} maxLength={12} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground border-b pb-1">Address Details</h3>
                
                <FormField
                  control={form.control}
                  name="houseNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flat / Room / Door / Block No.</FormLabel>
                      <FormControl>
                        <Input placeholder="Flat 101, Shanti Niwas" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Road / Street / Lane / Locality</FormLabel>
                      <FormControl>
                        <Input placeholder="MG Road, Indiranagar" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City / Village</FormLabel>
                        <FormControl>
                          <Input placeholder="Bengaluru" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>District</FormLabel>
                        <FormControl>
                          <Input placeholder="Bengaluru Urban" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {INDIAN_STATES.map(state => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PIN Code</FormLabel>
                        <FormControl>
                          <Input placeholder="560038" {...field} maxLength={6} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" size="lg">
                  Generate Preview
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Output Section */}
      <div id="form-preview" className="scroll-mt-24">
        <Card className="border-t-4 border-t-accent shadow-md sticky top-24">
          <CardHeader>
             <CardTitle className="flex items-center gap-2">
              <span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Government Form Preview
            </CardTitle>
            <CardDescription>
              This is how your data looks in official format.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {previewData ? (
              <FormPreview data={previewData} />
            ) : (
              <div className="h-96 flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg bg-muted/20">
                <div className="bg-muted p-4 rounded-full mb-4">
                  <CheckCircle2 className="w-8 h-8 opacity-20" />
                </div>
                <p>Fill the details to see the preview</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
