
import { Link } from "react-router-dom";
import { Calendar, Users, Heart, BookOpen, Camera, Play, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const upcomingEvents = [
    {
      title: "Weekly Bible Study",
      date: "Every Wednesday",
      time: "6:00 PM",
      location: "Lecture Hall 3",
      description: "Join us for deep Bible study and fellowship"
    },
    {
      title: "Sunday Service",
      date: "Every Sunday", 
      time: "10:00 AM",
      location: "Main Auditorium",
      description: "Worship, praise and powerful messages"
    },
    {
      title: "Youth Conference 2024",
      date: "March 15-17",
      time: "All Day",
      location: "Campus Grounds",
      description: "Annual youth conference with amazing speakers"
    }
  ];

  const ministries = [
    {
      title: "Worship & Music",
      description: "Experience God through powerful worship and music ministry",
      icon: Heart
    },
    {
      title: "Bible Study",
      description: "Deep dive into God's word with fellow believers",
      icon: BookOpen
    },
    {
      title: "Outreach",
      description: "Reaching out to the community with God's love",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to Upper Kabete Campus Christian Union
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              A community of believers committed to growing in faith, fellowship, and service to God and humanity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                <Link to="/events" className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>View Events</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              "To create a vibrant Christian community within Upper Kabete Campus where students can grow spiritually, 
              develop meaningful relationships, and be equipped to serve God and society with passion and purpose."
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Faith</h3>
                <p className="text-gray-600">Growing deeper in our relationship with Christ</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fellowship</h3>
                <p className="text-gray-600">Building authentic Christian community</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Service</h3>
                <p className="text-gray-600">Serving God and our community with love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for these exciting upcoming events and be part of our growing community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>{event.title}</span>
                  </CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Meetings & Livestreams */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Us Online</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Can't make it to campus? No problem! Join our online meetings and livestreams from anywhere
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="h-6 w-6" />
                  <span>Live Streaming</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Watch our services and events live from anywhere
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/90">
                  <li>• Sunday Services - 10:00 AM EAT</li>
                  <li>• Wednesday Bible Study - 6:00 PM EAT</li>
                  <li>• Special Events & Conferences</li>
                  <li>• Prayer Meetings</li>
                </ul>
                <Button className="mt-4 bg-white text-purple-600 hover:bg-gray-100">
                  Watch Live Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6" />
                  <span>Online Meetings</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Interactive online meetings and small groups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/90">
                  <li>• Virtual Small Groups</li>
                  <li>• Online Prayer Sessions</li>
                  <li>• Digital Bible Study Groups</li>
                  <li>• Leadership Meetings</li>
                </ul>
                <Button className="mt-4 bg-white text-purple-600 hover:bg-gray-100">
                  <Link to="/connect">Join a Group</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-white/80 mb-4">
              Follow us on social media for live updates and streaming notifications
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                YouTube Live
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Facebook Live
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Instagram Live
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover ways to serve and grow through our various ministry opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{ministry.title}</h3>
                    <p className="text-gray-600">{ministry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/ministries">Explore All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the next step in your faith journey. We'd love to welcome you into our family!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link to="/connect">Connect With Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
