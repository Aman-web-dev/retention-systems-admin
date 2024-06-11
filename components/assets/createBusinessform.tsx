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
  initialBusinessData?: BusinessData; // Optional prop for editing
}




const formSchema = z
  .object({
    emailAddress: z.string().email({ message: "Invalid email address" }),
    accountType: z.enum(["Small", "Medium", "Large"]),
    BusinessName: z
      .string()
      .min(1, { message: "Business name is required" })
      .optional(),
    BusinessPhoneNumber: z
      .string()
      .max(10, { message: "Phone number cannot exceed 10 digits" })
      .min(1, { message: "Phone number is required" }),
    BusinessPrompt: z
      .string()
      .min(1, { message: "Business prompt is required" }),
    api_key: z.string().min(1, { message: "API key is required" }),
    private_app_id: z
      .string()
      .min(1, { message: "Private app ID is required" }),
    project_id: z.string().min(1, { message: "Project ID is required" }),
  })
  .refine(
    (data) => {
      if (data.accountType !== "Small") {
        // BusinessName is required for Medium and Large accounts
        return data.BusinessName !== undefined && data.BusinessName.length > 0;
      }
      return true; // BusinessName is optional for Small accounts
    },
    {
      message: "Business name is required",
      path: ["BusinessName"],
    }
  )
 

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

export default function CreateBusinessForm({ initialBusinessData }: CreateBusinessFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialBusinessData ? initialBusinessData : {
      emailAddress: "",
      BusinessPhoneNumber: "",
      BusinessName: "",
      BusinessPrompt: "",
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24  ">
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
            name="BusinessName"
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
            name="BusinessPhoneNumber"
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
          />

          <FormField
            control={form.control}
            name="BusinessPrompt"
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
            Create Business
          </Button>
        </form>
      </Form>
    </main>
  );
}