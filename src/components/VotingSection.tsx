
import { useState } from "react";
import { Vote, User, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const VotingSection = () => {
  const { toast } = useToast();
  const [votes, setVotes] = useState<Array<{ position: string; candidateName: string; yearOfStudy: string }>>([]);
  
  const positions = [
    "Chairperson",
    "Vice Chairperson", 
    "Secretary General",
    "Assistant Secretary",
    "Treasurer",
    "Assistant Treasurer",
    "Worship Leader",
    "Assistant Worship Leader",
    "Women's Ministry Leader",
    "Men's Ministry Leader",
    "Youth Ministry Leader",
    "Bible Study Coordinator",
    "Prayer Coordinator",
    "Outreach Coordinator",
    "Media & Tech Leader",
    "Hospitality Coordinator",
    "Sports Coordinator",
    "Evangelism Leader",
    "Discipleship Leader",
    "Social Media Manager"
  ];

  const handleVoteSubmit = (position: string, candidateName: string, yearOfStudy: string) => {
    if (!candidateName.trim() || !yearOfStudy.trim()) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in both candidate name and year of study",
        variant: "destructive",
      });
      return;
    }

    const newVote = { position, candidateName: candidateName.trim(), yearOfStudy: yearOfStudy.trim() };
    setVotes(prev => [...prev, newVote]);
    
    toast({
      title: "Vote Submitted",
      description: `Your vote for ${candidateName} for ${position} has been recorded`,
    });
  };

  const VotingCard = ({ position }: { position: string }) => {
    const [candidateName, setCandidateName] = useState("");
    const [yearOfStudy, setYearOfStudy] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
      handleVoteSubmit(position, candidateName, yearOfStudy);
      setIsSubmitted(true);
      setCandidateName("");
      setYearOfStudy("");
      setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Vote className="h-5 w-5 text-blue-600" />
            <span>{position}</span>
          </CardTitle>
          <CardDescription>
            Vote for your preferred candidate for this position
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`candidate-${position}`} className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>Candidate Name</span>
            </Label>
            <Input
              id={`candidate-${position}`}
              placeholder="Enter candidate's full name"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              disabled={isSubmitted}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor={`year-${position}`} className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Year of Study</span>
            </Label>
            <Input
              id={`year-${position}`}
              placeholder="e.g., 3rd Year, Final Year"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              disabled={isSubmitted}
            />
          </div>

          <Button 
            onClick={handleSubmit}
            className="w-full"
            disabled={isSubmitted}
          >
            {isSubmitted ? "Vote Submitted!" : "Submit Vote"}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Elections</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cast your vote for the next UKCCU leadership team. Your voice matters in shaping our fellowship's future.
          </p>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>Voting Guidelines:</strong> Please ensure you know the candidates personally and that they are committed Christians with a heart for service.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <VotingCard key={index} position={position} />
          ))}
        </div>

        {votes.length > 0 && (
          <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Your Submitted Votes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {votes.map((vote, index) => (
                <div key={index} className="p-3 bg-green-50 border border-green-200 rounded">
                  <p className="font-medium text-green-800">{vote.position}</p>
                  <p className="text-sm text-green-600">{vote.candidateName}</p>
                  <p className="text-xs text-green-500">{vote.yearOfStudy}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VotingSection;
