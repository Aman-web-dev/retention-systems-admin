"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"
import { BusinessData } from "@/types/businessdata";




interface CreateBusinessFormProps {
  initialBusinessData?: BusinessData;
  buttonText:string // Optional prop for editing
}


const formSchema = z.object({
  emailAddress: z.string().email({ message: "Invalid email address" }).optional(),
  accountType: z.enum(["Small", "Medium", "Large"]).optional(),
  business_name: z
    .string()
    .min(1, { message: "Business name is required" })
    .optional(),
  business_number: z.union([
    z.string().regex(/^\d+$/, { message: "Invalid phone number" }),
    z.number(),
  ]),
  business_prompt: z.string().min(1, { message: "Business prompt is required" }),
  api_key: z.string().min(1, { message: "API key is required" }).nullable(),
  private_app_id: z
    .string()
    .min(1, { message: "Private app ID is required" })
    .nullable(),
  project_id: z.string().min(1, { message: "Project ID is required" }).nullable(),
  created_at: z.string().optional(), // This might not be needed in your form input
}).refine(
  (data) => {
    if (data.accountType !== "Small") {
      // business_name is required for Medium and Large accounts
      return data.business_name !== undefined && data.business_name.length > 0;
    }
    return true; // business_name is optional for Small accounts
  },
  {
    message: "Business name is required",
    path: ["business_name"],
  }
);
 

// Usage Example
try {
  const result = formSchema.parse({
    // your data
  });
  // result contains the parsed and validated data
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(error.issues); // Array of validation error details
  } else {
    // Handle other potential errors
  }
}

export default function CreateBusinessForm({ initialBusinessData,buttonText }: CreateBusinessFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialBusinessData ? initialBusinessData : {
      emailAddress: "",
      business_number: "",
      business_name: "",
      business_prompt: "",
      api_key: "",
      private_app_id: "",
      project_id: ""
    },
  });

  const accountType = form.watch("accountType");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Business type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Small">Small</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Large">Large</SelectItem>

                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="business_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Business name</FormLabel>
                  <FormControl>
                    <Input placeholder="Business name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="business_number"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Business Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Business Phone Number" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />


{/* 
          <FormField
            control={form.control}
            name="project_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Project ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project ID"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="api_key"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Api Key</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="API Key"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />


          <FormField
            control={form.control}
            name="private_app_id"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Private App ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Private App ID"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}

          <FormField
            control={form.control}
            name="business_prompt"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Business Prompt</FormLabel>
                  <FormControl>
                    <Textarea placeholder="You are a Helpful AI bot " />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />


          <Button type="submit" className="w-full">
           {buttonText}
          </Button>
        </form>
      </Form>
    </main>
  );
}