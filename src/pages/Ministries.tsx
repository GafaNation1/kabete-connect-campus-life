
import { Heart, Users, BookOpen, Mic, Camera, Handshake, Globe, Baby, Cross, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Ministries = () => {
  const ministries = [
    {
      id: 1,
      title: "Worship & Music Ministry",
      icon: Music,
      description: "Leading the congregation in heartfelt worship and praise through music, song, and creative expression.",
      leader: "Peter Otieno",
      meetingTime: "Saturdays 4:00 PM",
      location: "Music Room, Student Center",
      activities: [
        "Sunday worship leading",
        "Choir practices and performances",
        "Special music events",
        "Worship workshops",
        "Instrument training"
      ],
      requirements: "Musical ability (any level), heart for worship",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop",
      members: 25,
      established: "2015"
    },
    {
      id: 2,
      title: "Bible Study & Teaching Ministry",
      icon: BookOpen,
      description: "Facilitating deep study of God's Word through various teaching methods and small group discussions.",
      leader: "Sarah Achieng",
      meetingTime: "Wednesdays 6:00 PM",
      location: "Lecture Hall 3",
      activities: [
        "Weekly Bible study sessions",
        "Topical study series",
        "Biblical literacy programs",
        "Teacher training workshops",
        "Study material development"
      ],
      requirements: "Love for God's Word, willingness to study and teach",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      members: 35,
      established: "2010"
    },
    {
      id: 3,
      title: "Outreach & Evangelism Ministry",
      icon: Globe,
      description: "Reaching out to the campus and local community with the love of Christ through various outreach programs.",
      leader: "Faith Njeri",
      meetingTime: "Sundays 2:00 PM",
      location: "Conference Room A",
      activities: [
        "Campus evangelism",
        "Community service projects",
        "Hospital and prison visits",
        "Feeding programs",
        "Medical camps"
      ],
      requirements: "Heart for the lost, compassion for others",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
      members: 40,
      established: "2012"
    },
    {
      id: 4,
      title: "Women's Ministry",
      icon: Heart,
      description: "Empowering and discipling women to discover their identity in Christ and fulfill their God-given purpose.",
      leader: "Esther Mbugua",
      meetingTime: "Saturdays 10:00 AM",
      location: "Women's Fellowship Hall",
      activities: [
        "Women's fellowship meetings",
        "Mentorship programs",
        "Life skills workshops",
        "Mother's support groups",
        "Women's conferences"
      ],
      requirements: "Female students and staff members",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=250&fit=crop",
      members: 45,
      established: "2011"
    },
    {
      id: 5,
      title: "Men's Ministry",
      icon: Users,
      description: "Building strong, godly men who lead with integrity and serve their families and communities faithfully.",
      leader: "John Maina",
      meetingTime: "Saturdays 7:00 AM",
      location: "Men's Fellowship Room",
      activities: [
        "Men's fellowship breakfast",
        "Leadership development",
        "Accountability groups",
        "Fatherhood seminars",
        "Men's retreats"
      ],
      requirements: "Male students and staff members",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=250&fit=crop",
      members: 30,
      established: "2013"
    },
    {
      id: 6,
      title: "Media & Technology Ministry",
      icon: Camera,
      description: "Using technology and media to enhance worship experiences and expand our ministry reach digitally.",
      leader: "Daniel Wekesa",
      meetingTime: "Fridays 5:00 PM",
      location: "Media Center",
      activities: [
        "Live streaming services",
        "Social media management",
        "Photography and videography",
        "Website maintenance",
        "Audio/visual equipment operation"
      ],
      requirements: "Technical skills, creativity, attention to detail",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=250&fit=crop",
      members: 15,
      established: "2018"
    },
    {
      id: 7,
      title: "Youth & Children's Ministry",
      icon: Baby,
      description: "Nurturing the next generation through age-appropriate programs that make faith fun and relevant.",
      leader: "Grace Wanjiku",
      meetingTime: "Sundays 9:00 AM",
      location: "Children's Wing",
      activities: [
        "Sunday school classes",
        "Youth camps and retreats",
        "Children's church services",
        "Holiday Bible school",
        "Youth mentorship programs"
      ],
      requirements: "Love for children, patience, creativity",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
      members: 20,
      established: "2014"
    },
    {
      id: 8,
      title: "Prayer & Intercession Ministry",
      icon: Cross,
      description: "Standing in the gap through strategic prayer for our fellowship, campus, nation, and the world.",
      leader: "Pastor Michael Kamau",
      meetingTime: "Daily 6:00 AM & 6:00 PM",
      location: "Prayer Room",
      activities: [
        "Daily prayer meetings",
        "Prayer walks around campus",
        "Intercessory prayer training",
        "24/7 prayer chains",
        "Special prayer vigils"
      ],
      requirements: "Commitment to prayer, faith in God's power",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop",
      members: 50,
      established: "2009"
    },
    {
      id: 9,
      title: "Hospitality & Welcome Ministry",
      icon: Handshake,
      description: "Creating a warm, welcoming environment for all visitors and ensuring everyone feels at home.",
      leader: "Mary Nyambura",
      meetingTime: "Sundays 8:00 AM",
      location: "Main Entrance",
      activities: [
        "Greeting visitors and members",
        "Visitor follow-up programs",
        "Fellowship meal coordination",
        "Event hospitality services",
        "Welcome gift preparation"
      ],
      requirements: "Friendly personality, servant's heart",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop",
      members: 28,
      established: "2016"
    }
  ];

  const ministryStats = [
    { title: "Active Ministries", value: 9, icon: Cross },
    { title: "Ministry Leaders", value: 15, icon: Users },
    { title: "Total Volunteers", value: 280, icon: Heart },
    { title: "Years of Service", value: 14, icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Discover your place to serve and grow in our diverse ministry opportunities
          </p>
        </div>
      </section>

      {/* Ministry Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {ministryStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-gray-600">{stat.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ministry Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Ministry Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every member is a minister. We believe God has gifted each person uniquely to serve His kingdom. 
              Our ministries provide opportunities for you to discover, develop, and deploy your gifts for God's glory.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover Your Gifts</h3>
                <p className="text-gray-600">Identify the unique talents and spiritual gifts God has given you</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Develop Your Skills</h3>
                <p className="text-gray-600">Grow and strengthen your abilities through training and mentorship</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Deploy for Impact</h3>
                <p className="text-gray-600">Use your gifts to make a difference in our community and beyond</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ministry Opportunities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our various ministries and find where God is calling you to serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => {
              const Icon = ministry.icon;
              return (
                <Card key={ministry.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={ministry.image} 
                      alt={ministry.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <Badge className="bg-blue-600 text-white">
                        {ministry.members} members
                      </Badge>
                    </div>
                    <div className="absolute top-2 left-2">
                      <div className="bg-white p-2 rounded-full">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{ministry.title}</CardTitle>
                    <CardDescription>{ministry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="text-sm">
                        <strong>Leader:</strong> {ministry.leader}
                      </div>
                      <div className="text-sm">
                        <strong>Meeting Time:</strong> {ministry.meetingTime}
                      </div>
                      <div className="text-sm">
                        <strong>Location:</strong> {ministry.location}
                      </div>
                      <div className="text-sm">
                        <strong>Established:</strong> {ministry.established}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Key Activities:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {ministry.activities.slice(0, 3).map((activity, idx) => (
                          <li key={idx}>• {activity}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-1">Requirements:</h4>
                      <p className="text-sm text-gray-600">{ministry.requirements}</p>
                    </div>

                    <Button className="w-full" size="sm">
                      Join This Ministry
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ministry Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ministry Leadership</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our ministry leaders are committed to serving, training, and empowering others to fulfill their calling
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Leadership Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                    <span className="text-gray-700">Servant leadership - leading by serving others</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                    <span className="text-gray-700">Biblical foundation - all decisions rooted in God's Word</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                    <span className="text-gray-700">Collaborative approach - working together as a team</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-2"></div>
                    <span className="text-gray-700">Developing others - raising up new leaders</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Leadership Development</h3>
                <p className="text-gray-700 mb-4">
                  We're committed to developing emerging leaders through mentorship, training programs, 
                  and hands-on ministry experience.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monthly leadership training sessions</li>
                  <li>• One-on-one mentorship opportunities</li>
                  <li>• Leadership retreats and conferences</li>
                  <li>• Practical ministry experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Ministry CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Serve?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            God has given you unique gifts and talents. Join one of our ministries and make a difference 
            in our community while growing in your faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Users className="h-5 w-5 mr-2" />
              Find My Ministry
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <BookOpen className="h-5 w-5 mr-2" />
              Leadership Training
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ministries;
