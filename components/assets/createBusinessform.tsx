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




interface BusinessData {
  emailAddress: string;
  accountType: "Small" | "Medium" | "Large";
  BusinessName?: string; // Optional
  BusinessPhoneNumber: string;
  BusinessPrompt: string;
}

interface CreateBusinessFormProps {
  initialBusinessData?: BusinessData; // Optional prop for editing
}


const formSchema = z
  .object({
    emailAddress: z.string().email(),
    accountType: z.enum(["Small","Medium","Large"]),
    BusinessName: z.string().optional(),
    BusinessPhoneNumber:z.string().max(10),
    BusinessPrompt:z.string()
  })
  
  .refine(
    (data) => {
      if (data.accountType === "Small"||"Medium"||"Large") {
        return !!data.BusinessName;
      }
      return true;
    },
    {
      message: "Business name is required",
      path: ["BusinessName"],
    }
  );

  export default function CreateBusinessForm({ initialBusinessData }: CreateBusinessFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:initialBusinessData?initialBusinessData:{
      emailAddress: "",
      BusinessPhoneNumber:"",
      BusinessName: "",
      BusinessPrompt:""
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