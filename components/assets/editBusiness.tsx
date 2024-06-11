import React, { forwardRef,  } from "react";
// import { BusinessData } from "./types"; // Assuming you have types for BusinessData
import CreateBusinessForm from "./createBusinessform";

interface BusinessData {
  emailAddress: string;
  accountType: "Small" | "Medium" | "Large";
  BusinessName?: string; // Optional
  BusinessPhoneNumber: string;
  BusinessPrompt: string;
}

interface EditBusinessProps extends BusinessData { 
  ref?: React.Ref<HTMLDivElement>;
}
 
const EditBusiness = React.forwardRef<HTMLDivElement, EditBusinessProps>(function EditBusinessComponent({ emailAddress, accountType, BusinessName, BusinessPhoneNumber, BusinessPrompt }, ref) {
  return (
    <div ref={ref}>
      <CreateBusinessForm initialBusinessData={{ emailAddress, accountType, BusinessName, BusinessPhoneNumber, BusinessPrompt }} />
    </div>
  );
})

export default EditBusiness;
