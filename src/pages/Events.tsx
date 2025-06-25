
import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Filter, ChevronRight, Heart, BookOpen, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly Bible Study",
      description: "Join us every Wednesday for an in-depth study of God's Word. This week we're exploring the Book of Romans.",
      date: "2024-01-31",
      time: "6:00 PM - 8:00 PM",
      location: "Lecture Hall 3, Main Campus",
      category: "study",
      recurring: true,
      attendees: 45,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Sunday Worship Service",
      description: "Come worship with us every Sunday morning. Experience powerful worship, inspiring messages, and fellowship.",
      date: "2024-02-04",
      time: "10:00 AM - 12:00 PM", 
      location: "Main Auditorium",
      category: "worship",
      recurring: true,
      attendees: 150,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Youth Conference 2024: 'Ignited for Purpose'",
      description: "A three-day conference featuring powerful speakers, worship sessions, and workshops designed to ignite your passion for God's purpose in your life.",
      date: "2024-03-15",
      endDate: "2024-03-17",
      time: "9:00 AM - 6:00 PM Daily",
      location: "University Grounds",
      category: "conference",
      recurring: false,
      attendees: 300,
      featured: true,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Prayer & Fasting Week",
      description: "A week dedicated to seeking God's face through prayer and fasting. Daily prayer meetings and special sessions.",
      date: "2024-02-12",
      endDate: "2024-02-18",
      time: "6:00 AM & 6:00 PM",
      location: "Prayer Room, Student Center",
      category: "prayer",
      recurring: false,
      attendees: 80,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Leadership Retreat",
      description: "A weekend retreat for current and aspiring leaders. Leadership training, team building, and spiritual development.",
      date: "2024-04-05",
      endDate: "2024-04-07",
      time: "Friday 6 PM - Sunday 4 PM",
      location: "Machakos Conference Center",
      category: "leadership",
      recurring: false,
      attendees: 25,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Community Outreach Day",
      description: "Join us as we serve our local community through various outreach activities including feeding programs and medical camps.",
      date: "2024-02-24",
      time: "8:00 AM - 4:00 PM",
      location: "Kabete Market Area",
      category: "outreach",
      recurring: false,
      attendees: 60,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: "Christmas Celebration 2023",
      description: "A wonderful celebration of Christ's birth with special music, drama, and fellowship.",
      date: "2023-12-15",
      attendees: 200,
      category: "celebration",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "End of Year Thanksgiving",
      description: "Giving thanks for God's faithfulness throughout the year with testimonies and worship.",
      date: "2023-11-30",
      attendees: 120,
      category: "worship",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Missions Week 2023",
      description: "A week focused on global missions with guest missionaries and fundraising activities.",
      date: "2023-10-16",
      attendees: 90,
      category: "missions",
      image: "https://images.unsplash.com/photo-1594149595248-91f136e10368?w=400&h=250&fit=crop"
    }
  ];

  const eventCategories = [
    { value: "all", label: "All Events", icon: Calendar },
    { value: "worship", label: "Worship & Music", icon: Music },
    { value: "study", label: "Bible Study", icon: BookOpen },
    { value: "conference", label: "Conferences", icon: Users },
    { value: "prayer", label: "Prayer", icon: Heart },
    { value: "outreach", label: "Outreach", icon: Users },
    { value: "leadership", label: "Leadership", icon: Users }
  ];

  const filteredUpcoming = upcomingEvents.filter(event => 
    selectedCategory === "all" || event.category === selectedCategory
  );

  const filteredPast = pastEvents.filter(event => 
    selectedCategory === "all" || event.category === selectedCategory
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric", 
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Events & Programs</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Join us for inspiring events, conferences, and regular programs that strengthen our faith community
          </p>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Filter className="h-5 w-5 text-gray-500" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {eventCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {eventCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="flex items-center space-x-1"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </Button>
              );
            })}
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
              Don't miss these exciting upcoming events and opportunities to grow in faith and fellowship
            </p>
          </div>

          {/* Featured Event */}
          {filteredUpcoming.filter(event => event.featured).map(event => (
            <Card key={event.id} className="mb-8 overflow-hidden border-2 border-blue-600">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-yellow-500 text-white">FEATURED EVENT</Badge>
                    <Badge variant="outline" className="capitalize">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">{event.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{event.description}</CardDescription>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)} {event.endDate && `- ${formatDate(event.endDate)}`}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} expected</span>
                    </div>
                  </div>
                  <Button className="w-full md:w-auto">
                    Register Now
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {/* Regular Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpcoming.filter(event => !event.featured).map(event => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  {event.recurring && (
                    <Badge className="absolute top-2 right-2 bg-green-600">Recurring</Badge>
                  )}
                  <Badge variant="outline" className="absolute top-2 left-2 bg-white capitalize">
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} expected</span>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    More Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Look back at some of our amazing past events and the memories we've created together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPast.map(event => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge variant="outline" className="absolute top-2 left-2 bg-white capitalize">
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attended</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    View Photos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Never Miss An Event</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our calendar and get notifications about upcoming events, meetings, and special programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Calendar className="h-5 w-5 mr-2" />
              Subscribe to Calendar
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              Download Church App
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
