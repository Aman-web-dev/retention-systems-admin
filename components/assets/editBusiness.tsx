import React, { forwardRef,  } from "react";
import CreateBusinessForm from "./createBusinessform";
import { BusinessData } from "@/types/businessdata";

interface EditBusinessProps extends BusinessData { 
  ref?: React.Ref<HTMLDivElement>;
}
 
const EditBusiness = React.forwardRef<HTMLDivElement, EditBusinessProps>(function EditBusinessComponent({ emailAddress, accountType, BusinessName, BusinessPhoneNumber, BusinessPrompt,api_key, private_app_id, project_id }, ref) {
  return (
    <div ref={ref}>
      <CreateBusinessForm initialBusinessData={{ emailAddress, accountType, BusinessName, BusinessPhoneNumber, BusinessPrompt,api_key, private_app_id, project_id }} />
    </div>
  );
})

export default EditBusiness;
