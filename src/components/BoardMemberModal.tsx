import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, Linkedin, Award } from "lucide-react";

interface BoardMember {
  name: string;
  position: string;
  description: string;
  photo: string;
  email: string;
  phone: string;
  linkedin: string;
  bio: string;
  achievements: string[];
  education: string[];
}

interface BoardMemberModalProps {
  member: BoardMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BoardMemberModal = ({ member, open, onOpenChange }: BoardMemberModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-background border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text">{member.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">{member.position}</h3>
              <p className="text-muted-foreground mb-4">{member.description}</p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Biography
            </h4>
            <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-3">Education</h4>
            <ul className="space-y-2">
              {member.education.map((edu, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {member.achievements.map((achievement, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BoardMemberModal;
