
export type BusinessData = {
  emailAddress?: string;           // Make optional
  accountType?: "Small" | "Medium" | "Large"; // Make optional
  business_name?: string;
  business_number: number // Allow number or string
  business_prompt: string;
  api_key: string | null;           // Allow null
  private_app_id: string | null;    // Allow null
  project_id: string | null;        // Allow null
  created_at: string;
};