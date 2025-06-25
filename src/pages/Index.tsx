
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
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to Upper Kabete Campus Christian Union
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              A warm community of believers committed to growing in faith, fellowship, and service to God and humanity. Come as you are, leave transformed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Discover Our Story</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                <Link to="/events" className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Join Our Events</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">You Belong Here</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Whether you're taking your first steps in faith or have been walking with Christ for years, 
              UKCCU is your home away from home. We believe that every person has a unique purpose, 
              and we're here to help you discover yours in a loving, supportive environment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Grow in Faith</h3>
              <p className="text-gray-600">Deepen your relationship with Christ through prayer, worship, and scripture study in a supportive community.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Find Fellowship</h3>
              <p className="text-gray-600">Build lasting friendships and find your spiritual family among like-minded believers who care about you.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Serve with Purpose</h3>
              <p className="text-gray-600">Discover your gifts and use them to serve God and transform lives both on campus and in the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join Us This Week</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come and experience the joy of worship, the power of prayer, and the warmth of Christian fellowship
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
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
            <Button asChild size="lg">
              <Link to="/events">See All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Meetings & Livestreams */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Can't Make It to Campus?</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Join us online! Whether you're studying abroad, at home, or just can't make it to campus, 
              you can still be part of our community through live streams and virtual meetings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="h-6 w-6" />
                  <span>Live Worship & Teaching</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Experience our services live from wherever you are
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/90 mb-4">
                  <li>• Sunday Services - 10:00 AM EAT</li>
                  <li>• Wednesday Bible Study - 6:00 PM EAT</li>
                  <li>• Special Events & Conferences</li>
                  <li>• Prayer Meetings & Devotions</li>
                </ul>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Watch Live Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6" />
                  <span>Virtual Small Groups</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Connect with others in intimate online gatherings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/90 mb-4">
                  <li>• Interactive Bible Studies</li>
                  <li>• Online Prayer Circles</li>
                  <li>• Virtual Fellowship Time</li>
                  <li>• Leadership Development</li>
                </ul>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link to="/connect">Join a Group</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ways to Get Involved</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your place to serve and grow. Every gift matters, every voice counts, and every heart has a home here.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all hover:scale-105 bg-white">
                  <CardContent>
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{ministry.title}</h3>
                    <p className="text-gray-600 mb-4">{ministry.description}</p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/ministries">Explore All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Journey Starts Here</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're curious about faith, new to the area, or looking for a church home, 
            we'd love to welcome you with open arms. Come as you are!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link to="/connect">Connect With Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <Link to="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
