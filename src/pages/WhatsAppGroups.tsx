
import { MessageCircle, Users, Calendar, BookOpen, Heart, Cross, Music, HandHeart, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WhatsAppGroups = () => {
  const ministryGroups = [
    {
      title: "Worship & Music Ministry",
      description: "Connect with fellow worship leaders, musicians, and singers",
      members: "45 members",
      icon: Music,
      whatsappLink: "https://chat.whatsapp.com/worship-music-ministry",
      isActive: true
    },
    {
      title: "Bible Study Groups",
      description: "Join our weekly Bible study discussions and scripture sharing",
      members: "89 members",
      icon: BookOpen,
      whatsappLink: "https://chat.whatsapp.com/bible-study-groups",
      isActive: true
    },
    {
      title: "Prayer Warriors",
      description: "Intercession, prayer requests, and spiritual warfare support",
      members: "67 members",
      icon: Heart,
      whatsappLink: "https://chat.whatsapp.com/prayer-warriors",
      isActive: true
    },
    {
      title: "Youth Ministry",
      description: "Young believers fellowship, mentorship, and youth activities",
      members: "123 members",
      icon: Users,
      whatsappLink: "https://chat.whatsapp.com/youth-ministry",
      isActive: true
    },
    {
      title: "Evangelism & Outreach",
      description: "Community outreach, missions, and evangelism coordination",
      members: "56 members",
      icon: Globe,
      whatsappLink: "https://chat.whatsapp.com/evangelism-outreach",
      isActive: true
    },
    {
      title: "Women's Ministry",
      description: "Sisterhood, women's empowerment, and spiritual growth",
      members: "78 members",
      icon: Heart,
      whatsappLink: "https://chat.whatsapp.com/womens-ministry",
      isActive: true
    },
    {
      title: "Men's Fellowship",
      description: "Brotherhood, men's issues, and spiritual mentorship",
      members: "62 members",
      icon: Users,
      whatsappLink: "https://chat.whatsapp.com/mens-fellowship",
      isActive: true
    },
    {
      title: "Children's Ministry",
      description: "Sunday school teachers and children's ministry volunteers",
      members: "34 members",
      icon: Heart,
      whatsappLink: "https://chat.whatsapp.com/childrens-ministry",
      isActive: true
    },
    {
      title: "Media & Technology",
      description: "Audio/visual team, social media, and tech support",
      members: "28 members",
      icon: Globe,
      whatsappLink: "https://chat.whatsapp.com/media-technology",
      isActive: true
    },
    {
      title: "Hospitality Team",
      description: "Event planning, catering, and welcoming new members",
      members: "41 members",
      icon: HandHeart,
      whatsappLink: "https://chat.whatsapp.com/hospitality-team",
      isActive: true
    }
  ];

  const eventGroups = [
    {
      title: "Weekly Bible Study Updates",
      description: "Get reminders and updates for Wednesday Bible studies",
      members: "156 members",
      icon: BookOpen,
      whatsappLink: "https://chat.whatsapp.com/bible-study-updates",
      isActive: true
    },
    {
      title: "Sunday Service Notifications",
      description: "Service updates, announcements, and live stream links",
      members: "234 members",
      icon: Cross,
      whatsappLink: "https://chat.whatsapp.com/sunday-service-updates",
      isActive: true
    },
    {
      title: "Youth Conference 2024",
      description: "Updates and discussions for the upcoming youth conference",
      members: "187 members",
      icon: Calendar,
      whatsappLink: "https://chat.whatsapp.com/youth-conference-2024",
      isActive: true
    },
    {
      title: "Prayer Week Coordination",
      description: "Coordinate prayer times and share prayer requests",
      members: "98 members",
      icon: Heart,
      whatsappLink: "https://chat.whatsapp.com/prayer-week-coordination",
      isActive: true
    },
    {
      title: "Community Outreach Events",
      description: "Organize and coordinate community service activities",
      members: "73 members",
      icon: HandHeart,
      whatsappLink: "https://chat.whatsapp.com/community-outreach",
      isActive: true
    },
    {
      title: "Leadership Retreat Planning",
      description: "Leadership team coordination and retreat planning",
      members: "25 members",
      icon: Users,
      whatsappLink: "https://chat.whatsapp.com/leadership-retreat",
      isActive: true
    }
  ];

  const handleJoinGroup = (whatsappLink: string, groupName: string) => {
    // In a real application, this would redirect to the actual WhatsApp group
    window.open(whatsappLink, '_blank');
    console.log(`Joining ${groupName} WhatsApp group`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">WhatsApp Groups</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Join our active WhatsApp communities to stay connected, get updates, and fellowship with other believers
          </p>
        </div>
      </section>

      {/* Ministry Groups */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ministry Groups</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with specific ministry teams and get involved in the areas where you feel called to serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministryGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{group.title}</CardTitle>
                        <p className="text-sm text-gray-500">{group.members}</p>
                      </div>
                    </div>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => handleJoinGroup(group.whatsappLink, group.title)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Join Group
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Event & Activity Groups</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with specific events, get reminders, and coordinate with other participants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{group.title}</CardTitle>
                        <p className="text-sm text-gray-500">{group.members}</p>
                      </div>
                    </div>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleJoinGroup(group.whatsappLink, group.title)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Join Group
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Group Guidelines</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-green-600">Do's</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respect all members and their opinions</li>
                  <li>• Share relevant content and prayer requests</li>
                  <li>• Participate in group discussions actively</li>
                  <li>• Support and encourage fellow members</li>
                  <li>• Keep conversations Christ-centered</li>
                  <li>• Use appropriate language and tone</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-red-600">Don'ts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Share inappropriate or offensive content</li>
                  <li>• Spam the group with irrelevant messages</li>
                  <li>• Engage in arguments or divisive discussions</li>
                  <li>• Share personal contact information publicly</li>
                  <li>• Promote non-church related businesses</li>
                  <li>• Use the group for gossip or criticism</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Help */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Joining a Group?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            If you're having trouble joining any of our WhatsApp groups or need assistance, don't hesitate to reach out to our tech team
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
            Contact Tech Support
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppGroups;
