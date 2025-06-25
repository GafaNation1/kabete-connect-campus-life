
import { Users, MapPin, Calendar, Clock, Heart, MessageCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Connect = () => {
  const smallGroups = [
    {
      id: 1,
      name: "Freshmen Fellowship",
      description: "A welcoming group for first-year students to make friends, ask questions, and grow in faith together.",
      leader: "Grace Wanjiku & Peter Mwangi",
      meetingTime: "Thursdays 7:00 PM",
      location: "Conference Room B",
      members: 12,
      capacity: 15,
      focus: "New Students",
      ageGroup: "18-20",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Men's Accountability Group",
      description: "A brotherhood focused on accountability, prayer, and encouraging each other in Christian manhood.",
      leader: "John Maina & Samuel Kiprotich",
      meetingTime: "Saturdays 7:00 AM",
      location: "Men's Fellowship Room",
      members: 8,
      capacity: 12,
      focus: "Men's Ministry",
      ageGroup: "20-25",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Women of Faith Circle",
      description: "Empowering women to discover their identity in Christ through Bible study, prayer, and sisterhood.",
      leader: "Esther Mbugua & Sarah Achieng",
      meetingTime: "Wednesdays 6:30 PM",
      location: "Women's Fellowship Hall",
      members: 14,
      capacity: 18,
      focus: "Women's Ministry",
      ageGroup: "19-24",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Graduate Students Fellowship",
      description: "Connecting graduate students and older undergrads for deeper theological discussions and mentorship.",
      leader: "Dr. Ruth Mbugua & Daniel Wekesa",
      meetingTime: "Sundays 4:00 PM",
      location: "Graduate Lounge",
      members: 9,
      capacity: 15,
      focus: "Advanced Study",
      ageGroup: "22-30",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      name: "Creative Arts Fellowship",
      description: "For students passionate about using their creative gifts - music, art, drama, writing - for God's glory.",
      leader: "Peter Otieno & Mary Nyambura",
      meetingTime: "Fridays 6:00 PM",
      location: "Arts Studio",
      members: 11,
      capacity: 16,
      focus: "Creative Ministry",
      ageGroup: "18-25",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      name: "International Students Group",
      description: "A multicultural fellowship for international students and those interested in cross-cultural ministry.",
      leader: "Faith Njeri & Michael Otieno",
      meetingTime: "Saturdays 3:00 PM",
      location: "International Center",
      members: 7,
      capacity: 12,
      focus: "Cross-Cultural",
      ageGroup: "18-26",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop"
    }
  ];

  const connectionOptions = [
    {
      title: "Join a Small Group",
      description: "Connect with others in an intimate setting for Bible study, prayer, and friendship",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Find a Mentor",
      description: "Be paired with a mature believer who can guide you in your spiritual journey",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Prayer Partner",
      description: "Connect with someone to pray together regularly and support each other",
      icon: MessageCircle,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Ministry Teams",
      description: "Join various ministry teams and serve alongside other passionate believers",
      icon: Calendar,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const connectSteps = [
    {
      step: 1,
      title: "Explore Options",
      description: "Browse our small groups and connection opportunities to find what interests you"
    },
    {
      step: 2,
      title: "Attend a Meeting",
      description: "Visit a group or event to see if it's a good fit for you"
    },
    {
      step: 3,
      title: "Make Connections",
      description: "Start building relationships and getting involved in the community"
    },
    {
      step: 4,
      title: "Grow Together",
      description: "Experience spiritual growth through authentic Christian fellowship"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Connect & Belong</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Find your place in our community through small groups, mentorship, and meaningful relationships
          </p>
        </div>
      </section>

      {/* Connection Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Connection Matters</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that authentic Christian community is essential for spiritual growth. 
              When we connect with others, we experience God's love, find accountability, and discover our purpose together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {connectionOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${option.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Small Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Small Groups</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join one of our small groups for deeper connections, Bible study, and spiritual growth in an intimate setting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smallGroups.map(group => (
              <Card key={group.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={group.image} 
                    alt={group.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <Badge className="bg-blue-600 text-white">
                      {group.members}/{group.capacity} members
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="bg-white">
                      {group.focus}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>Led by {group.leader}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{group.meetingTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{group.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Heart className="h-4 w-4" />
                      <span>Ages {group.ageGroup}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    size="sm"
                    disabled={group.members >= group.capacity}
                  >
                    {group.members >= group.capacity ? "Group Full" : "Join Group"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Connect */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How to Get Connected</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting connected is easy! Follow these simple steps to find your place in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {connectSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stay Connected Online</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our online communities to stay connected throughout the week
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">WhatsApp Groups</h3>
                <p className="text-gray-600 mb-4">
                  Join our WhatsApp groups for daily encouragement, prayer requests, and fellowship updates
                </p>
                <Button variant="outline">Join WhatsApp</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Facebook Community</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other members, share testimonies, and stay updated on events
                </p>
                <Button variant="outline">Join Facebook</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Virtual Meetings</h3>
                <p className="text-gray-600 mb-4">
                  Attend online Bible studies, prayer meetings, and special events via Zoom
                </p>
                <Button variant="outline">Get Meeting Links</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connection Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Connecting?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our connection team is here to help you find the right group or ministry opportunity. 
                Don't hesitate to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>Call Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Speak directly with our connection coordinator who can help match you with the right group
                  </p>
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    +254 723 456 789
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span>Email Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Send us your interests and preferences, and we'll help you find the perfect fit
                  </p>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    connect@ukccu.org
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your journey of meaningful relationships and spiritual growth starts with a single step. 
            Take that step today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Users className="h-5 w-5 mr-2" />
              Find My Group
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Connection Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Connect;
