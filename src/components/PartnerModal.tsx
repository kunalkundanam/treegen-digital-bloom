import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface PartnerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PartnerModal = ({ open, onOpenChange }: PartnerModalProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    estimatedVolume: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Partnership Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    
    onOpenChange(false);
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnershipType: "",
      estimatedVolume: "",
      message: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-background border-forest-green/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Partner With Us</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Join us in creating a sustainable future. Fill in your details and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name *</Label>
              <Input
                id="company-name"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Your company name"
                className="border-border/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-person">Contact Person *</Label>
              <Input
                id="contact-person"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                placeholder="Full name"
                className="border-border/50"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="partner-email">Email *</Label>
              <Input
                id="partner-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="company@example.com"
                className="border-border/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="partner-phone">Phone *</Label>
              <Input
                id="partner-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 XXXXXXXXXX"
                className="border-border/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="partnership-type">Partnership Type</Label>
              <Select value={formData.partnershipType} onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}>
                <SelectTrigger className="border-border/50">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corporate">Corporate E-Waste</SelectItem>
                  <SelectItem value="government">Government Agency</SelectItem>
                  <SelectItem value="retailer">Retailer/Distributor</SelectItem>
                  <SelectItem value="manufacturer">Manufacturer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="estimated-volume">Estimated Volume (kg/month)</Label>
              <Input
                id="estimated-volume"
                value={formData.estimatedVolume}
                onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                placeholder="e.g., 500"
                className="border-border/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="partner-message">Message</Label>
            <Textarea
              id="partner-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your requirements..."
              className="border-border/50 min-h-[100px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-forest-green hover:bg-forest-green/90">
              Submit Partnership Request
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerModal;
