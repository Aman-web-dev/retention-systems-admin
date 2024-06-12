import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DialogWrapperProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode; // Optional footer content
}

export function DialogWrapper({ trigger, title, description, children, footer }: DialogWrapperProps) {
  return (
    
      <Dialog>
          <DialogTrigger asChild>
              {trigger}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-scroll"> 
              <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>
                      {description}
                  </DialogDescription>
              </DialogHeader>

              {children} 

              {/* {footer && <DialogFooter>{footer}</DialogFooter>} */}
          </DialogContent>
      </Dialog>
    
  );
}