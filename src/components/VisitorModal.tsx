import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const VisitorModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visitorDetailsSubmitted');
    if (!hasVisited) {
      // Show modal after 1 second
      const timer = setTimeout(() => setOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    sessionStorage.setItem('visitorDetailsSubmitted', 'true');
    toast({
      title: "Thank you!",
      description: "We'll get in touch with you soon.",
    });
    setOpen(false);
  };

  const handleSkip = () => {
    sessionStorage.setItem('visitorDetailsSubmitted', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-background border-forest-green/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Welcome to TREEGEN RECYCLERS</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Help us serve you better by sharing your details
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="visitor-name">Name *</Label>
            <Input
              id="visitor-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="border-border/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="visitor-email">Email *</Label>
            <Input
              id="visitor-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="border-border/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="visitor-phone">Phone *</Label>
            <Input
              id="visitor-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 XXXXXXXXXX"
              className="border-border/50"
            />
          </div>
          <div className="flex gap-3">
            <Button type="submit" className="flex-1 bg-forest-green hover:bg-forest-green/90">
              Submit
            </Button>
            <Button type="button" variant="outline" onClick={handleSkip} className="flex-1">
              Skip
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VisitorModal;
