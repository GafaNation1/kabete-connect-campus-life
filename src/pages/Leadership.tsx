
import { Mail, Phone, Linkedin, UserCheck, Users, Heart, BookOpen, Mic, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Leadership = () => {
  const executiveTeam = [
    {
      name: "David Mwangi",
      position: "Chairperson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "David is a final year student pursuing Bachelor of Agriculture. He has been with UKCCU for 4 years and has a heart for leadership development and mentorship.",
      email: "david.mwangi@student.uon.ac.ke",
      phone: "+254 712 345 678",
      department: "Agriculture"
    },
    {
      name: "Grace Wanjiku",
      position: "Vice Chairperson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b056b5ae?w=300&h=300&fit=crop&crop=face",
      bio: "Grace is pursuing a degree in Veterinary Medicine and has been actively involved in women's ministry and counseling within the fellowship.",
      email: "grace.wanjiku@student.uon.ac.ke",
      phone: "+254 723 456 789",
      department: "Veterinary Medicine"
    },
    {
      name: "Samuel Kiprotich",
      position: "Secretary General",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", 
      bio: "Samuel is a third-year Environmental Science student with excellent organizational skills and a passion for administration and record keeping.",
      email: "samuel.kiprotich@student.uon.ac.ke",
      phone: "+254 734 567 890",
      department: "Environmental Science"
    },
    {
      name: "Mary Nyambura",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Mary is a Business Administration student specializing in finance. She brings expertise in financial management and stewardship to the fellowship.",
      email: "mary.nyambura@student.uon.ac.ke", 
      phone: "+254 745 678 901",
      department: "Business Administration"
    }
  ];

  const ministryLeaders = [
    {
      name: "Peter Otieno",
      position: "Worship Leader",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Leading our worship experience with passion and excellence",
      responsibilities: ["Sunday worship coordination", "Choir direction", "Music ministry development"]
    },
    {
      name: "Esther Mbugua",
      position: "Women's Ministry Leader",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      description: "Empowering and discipling women in their faith journey",
      responsibilities: ["Women's fellowship coordination", "Mentorship programs", "Special women's events"]
    },
    {
      name: "John Maina",
      position: "Men's Ministry Leader", 
      icon: Users,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      description: "Building strong Christian men and leaders",
      responsibilities: ["Men's fellowship coordination", "Leadership development", "Accountability groups"]
    },
    {
      name: "Sarah Achieng",
      position: "Bible Study Coordinator",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      description: "Organizing and facilitating deep Bible study sessions",
      responsibilities: ["Weekly Bible study planning", "Small group coordination", "Teaching material preparation"]
    },
    {
      name: "Daniel Wekesa",
      position: "Media & Tech Leader",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      description: "Managing our digital presence and technical needs",
      responsibilities: ["Live streaming setup", "Social media management", "Website maintenance"]
    },
    {
      name: "Faith Njeri",
      position: "Outreach Coordinator",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      description: "Organizing community outreach and evangelism programs",
      responsibilities: ["Community outreach planning", "Evangelism training", "Partnership coordination"]
    }
  ];

  const advisors = [
    {
      name: "Rev. Dr. Michael Kamau",
      position: "Senior Patron",
      image: "https://images.unsplash.com/photo-1559053082-c916fe6e4d2c?w=300&h=300&fit=crop&crop=face",
      bio: "Rev. Dr. Kamau is a professor in the Department of Agricultural Economics and has been guiding UKCCU for over 15 years.",
      department: "Agricultural Economics"
    },
    {
      name: "Dr. Ruth Wanjala",
      position: "Assistant Patron",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face",
      bio: "Dr. Wanjala is a lecturer in Animal Production and has a heart for student development and spiritual growth.",
      department: "Animal Production"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Leadership</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Meet the passionate leaders God has raised to guide and serve our community
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Philosophy</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership is built on the foundation of servant leadership, following Christ's example 
              of leading through service, humility, and love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Servant Hearts</h3>
                <p className="text-gray-600">Leading by serving others with humility and love, following Christ's example</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Biblical Foundation</h3>
                <p className="text-gray-600">All decisions and direction are grounded in God's Word and prayer</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborative Approach</h3>
                <p className="text-gray-600">Working together as a team, valuing each member's contribution and gifts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Executive Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The executive team provides overall leadership and direction for the fellowship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{leader.bio}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-500">
                      <strong>Department:</strong> {leader.department}
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Leaders */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ministry Leaders</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated leaders overseeing specific areas of ministry and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministryLeaders.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {leader.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{leader.description}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Responsibilities:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {leader.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisors/Patrons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Advisors</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Faculty members who provide wisdom, guidance, and spiritual oversight
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{advisor.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-semibold">
                    {advisor.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{advisor.bio}</p>
                  <p className="text-sm text-gray-500">
                    <strong>Department:</strong> {advisor.department}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Called to Lead?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We believe every member has unique gifts and calling. Discover how you can serve and lead in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Explore Ministry Opportunities
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              Leadership Development Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;
