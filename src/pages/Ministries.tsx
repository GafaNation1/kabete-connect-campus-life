
import { useState } from "react";
import { Heart, Users, Music, BookOpen, Globe, Cross, Baby, Headphones, Camera, HandHeart, ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Ministries = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<any>(null);

  const ministries = [
    {
      id: 1,
      title: "Worship & Music Ministry",
      shortDescription: "Leading the congregation in worship through music, song, and praise",
      fullDescription: "Our Worship & Music Ministry is the heartbeat of our church services. We believe that worship is not just singing songs, but it's about creating an atmosphere where people can encounter God personally. Our team consists of talented musicians, singers, sound engineers, and worship leaders who work together to facilitate meaningful worship experiences.",
      icon: Music,
      leader: "David Mwangi",
      members: 45,
      meetingTime: "Wednesdays 6:00 PM",
      location: "Main Sanctuary",
      activities: [
        "Sunday Morning Worship",
        "Wednesday Evening Rehearsals", 
        "Special Event Performances",
        "Worship Nights",
        "Music Training Sessions"
      ],
      requirements: [
        "Heart for worship and ministry",
        "Basic musical skills (voice or instrument)",
        "Commitment to regular practice",
        "Willingness to learn and grow"
      ],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Bible Study Ministry",
      shortDescription: "Deep study of God's Word through various study groups and programs",
      fullDescription: "Our Bible Study Ministry is committed to helping believers grow deeper in their understanding of God's Word. We offer various study groups for different levels - from new believers to mature Christians who want to delve deeper into theological concepts. Our approach combines careful exegesis with practical application.",
      icon: BookOpen,
      leader: "Grace Wanjiku",
      members: 89,
      meetingTime: "Multiple times weekly",
      location: "Various locations",
      activities: [
        "Wednesday Evening Bible Study",
        "Sunday Morning Adult Classes",
        "Small Group Studies", 
        "Topical Study Series",
        "Leadership Bible Study"
      ],
      requirements: [
        "Desire to study God's Word",
        "Commitment to regular attendance",
        "Willingness to participate in discussions",
        "Heart for spiritual growth"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Youth Ministry",
      shortDescription: "Empowering young people to live for Christ and make a difference",
      fullDescription: "Our Youth Ministry focuses on discipling teenagers and young adults (ages 13-25) through dynamic programs that address their unique challenges and opportunities. We create a safe space where young people can ask tough questions, build lasting friendships, and discover their God-given purpose.",
      icon: Users,
      leader: "Samuel Kipchoge",
      members: 123,
      meetingTime: "Fridays 7:00 PM",
      location: "Youth Hall",
      activities: [
        "Friday Night Youth Service",
        "Monthly Youth Camps",
        "Community Service Projects",
        "Youth Leadership Training",
        "Sports and Recreation"
      ],
      requirements: [
        "Age 13-25 years",
        "Heart for God and peers",
        "Willingness to be mentored",
        "Commitment to group activities"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Women's Ministry",
      shortDescription: "Supporting women in their spiritual journey and life challenges",
      fullDescription: "Our Women's Ministry creates a nurturing environment where women of all ages can grow spiritually, emotionally, and relationally. We address issues specific to women while building a strong sisterhood rooted in Christ's love. Our programs range from Bible studies to practical life skills workshops.",
      icon: Heart,
      leader: "Mary Njeri",
      members: 78,
      meetingTime: "Saturdays 2:00 PM", 
      location: "Fellowship Hall",
      activities: [
        "Weekly Women's Bible Study",
        "Monthly Women's Fellowship",
        "Marriage and Parenting Workshops",
        "Community Outreach Programs",
        "Prayer and Intercession Groups"
      ],
      requirements: [
        "Heart for fellowship with other women",
        "Desire for spiritual growth",
        "Willingness to support others",
        "Commitment to ministry activities"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Men's Ministry",
      shortDescription: "Building godly men who lead their families and communities well",
      fullDescription: "Our Men's Ministry focuses on developing authentic Christian manhood through biblical teaching, mentorship, and practical application. We address the unique challenges men face in today's world while equipping them to be spiritual leaders in their homes, workplaces, and communities.",
      icon: Users,
      leader: "Peter Kamau",
      members: 62,
      meetingTime: "Saturdays 8:00 AM",
      location: "Men's Hall",
      activities: [
        "Monthly Men's Breakfast",
        "Bible Study and Discussion Groups",
        "Mentorship Programs",
        "Community Service Projects",
        "Outdoor Activities and Retreats"
      ],
      requirements: [
        "Commitment to personal growth",
        "Willingness to be mentored and mentor others",
        "Heart for spiritual leadership",
        "Regular attendance at activities"
      ],
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Children's Ministry",
      shortDescription: "Nurturing children's faith through age-appropriate programs and activities",
      fullDescription: "Our Children's Ministry is dedicated to introducing children to Jesus in fun, engaging, and age-appropriate ways. We believe that children are not just the church of tomorrow, but the church of today. Our programs are designed to help children develop a personal relationship with Jesus while having fun and making friends.",
      icon: Baby,
      leader: "Ruth Wambui",
      members: 34,
      meetingTime: "Sundays 10:00 AM",
      location: "Children's Wing",
      activities: [
        "Sunday School Classes",
        "Children's Church Service",
        "Vacation Bible School",
        "Children's Choir",
        "Family Fun Events"
      ],
      requirements: [
        "Love for children",
        "Background check clearance",
        "Patience and enthusiasm",
        "Commitment to child safety"
      ],
      image: "https://images.unsplash.com/photo-1587616213116-e0f29cf02082?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Evangelism & Outreach",
      shortDescription: "Sharing the Gospel and serving our community with Christ's love",
      fullDescription: "Our Evangelism & Outreach Ministry is passionate about sharing the good news of Jesus Christ both locally and globally. We organize various outreach programs, community service projects, and evangelistic events to reach people with the love of God and meet practical needs in our community.",
      icon: Globe,
      leader: "John Ochieng",
      members: 56,
      meetingTime: "Thursdays 6:30 PM",
      location: "Conference Room",
      activities: [
        "Community Evangelism",
        "Street Ministry", 
        "Hospital and Prison Visits",
        "Food Distribution Programs",
        "Mission Trips"
      ],
      requirements: [
        "Heart for evangelism",
        "Compassion for the lost and needy",
        "Willingness to step out of comfort zone",
        "Commitment to training and preparation"
      ],
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Media & Technology",
      shortDescription: "Supporting church services and events through audio/visual technology",
      fullDescription: "Our Media & Technology Ministry ensures that our services run smoothly through professional audio, video, and lighting support. We also manage our online presence, live streaming, and social media platforms to extend our reach beyond the physical church building.",
      icon: Headphones,
      leader: "Mark Kiprotich",
      members: 28,
      meetingTime: "Sundays 8:00 AM",
      location: "Media Room",
      activities: [
        "Sunday Service Audio/Video",
        "Live Streaming Services",
        "Social Media Management",
        "Website Maintenance",
        "Special Event Coverage"
      ],
      requirements: [
        "Technical skills or willingness to learn",
        "Reliability and punctuality",
        "Heart for serving behind the scenes",
        "Commitment to excellence"
      ],
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=300&fit=crop"
    },
    {
      id: 9,
      title: "Hospitality Ministry",
      shortDescription: "Creating a welcoming environment for all who visit our church",
      fullDescription: "Our Hospitality Ministry ensures that everyone who walks through our doors feels welcomed, loved, and valued. We coordinate greeting, ushering, refreshments, and special events to create an atmosphere of warmth and fellowship that reflects Christ's love.",
      icon: HandHeart,
      leader: "Sarah Mutua",
      members: 41,
      meetingTime: "Sundays 9:00 AM",
      location: "Church Lobby",
      activities: [
        "Sunday Morning Greeting",
        "Ushering Services",
        "Coffee and Fellowship Time",
        "Special Event Catering",
        "New Member Integration"
      ],
      requirements: [
        "Friendly and welcoming personality",
        "Heart for serving others",
        "Punctuality and reliability",
        "Willingness to work as a team"
      ],
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&h=300&fit=crop"
    },
    {
      id: 10,
      title: "Prayer Ministry",
      shortDescription: "Interceding for the church, community, and global missions",
      fullDescription: "Our Prayer Ministry believes in the power of prayer to transform lives, heal relationships, and advance God's kingdom. We coordinate various prayer initiatives, provide prayer support for church members, and maintain a constant cover of prayer over our church and community.",
      icon: Cross,
      leader: "Hannah Muthoni",
      members: 67,
      meetingTime: "Daily 6:00 AM",
      location: "Prayer Room",
      activities: [
        "Daily Morning Prayer",
        "Weekly Prayer Meetings",
        "Prayer Chains for Urgent Needs",
        "Healing Prayer Services",
        "24/7 Prayer Vigils"
      ],
      requirements: [
        "Committed prayer life",
        "Heart for intercession",
        "Confidentiality and trustworthiness",
        "Availability for emergency prayer"
      ],
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop"
    }
  ];

  const handleLearnMore = (ministry: any) => {
    setSelectedMinistry(ministry);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Find your place to serve, grow, and make a difference in the lives of others through our various ministry opportunities
          </p>
        </div>
      </section>

      {/* Featured Ministry */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Ministry</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          </div>

          {ministries.filter(ministry => ministry.featured).map(ministry => {
            const Icon = ministry.icon;
            return (
              <Card key={ministry.id} className="mb-8 overflow-hidden border-2 border-purple-600">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={ministry.image} 
                      alt={ministry.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-yellow-500 text-white">FEATURED</Badge>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Icon className="h-5 w-5" />
                        <span>{ministry.members} Members</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-4">{ministry.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{ministry.fullDescription}</CardDescription>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-semibold text-gray-700">Leader:</p>
                        <p className="text-gray-600">{ministry.leader}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700">Meeting Time:</p>
                        <p className="text-gray-600">{ministry.meetingTime}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button onClick={() => handleLearnMore(ministry)}>
                            Learn More
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              <Icon className="h-6 w-6 text-purple-600" />
                              <span>{ministry.title}</span>
                            </DialogTitle>
                            <DialogDescription className="text-base">
                              {ministry.fullDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Ministry Details</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="font-medium">Leader:</p>
                                  <p className="text-gray-600">{ministry.leader}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Members:</p>
                                  <p className="text-gray-600">{ministry.members}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Meeting Time:</p>
                                  <p className="text-gray-600">{ministry.meetingTime}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Location:</p>
                                  <p className="text-gray-600">{ministry.location}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Activities</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {ministry.activities.map((activity, index) => (
                                  <li key={index}>{activity}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {ministry.requirements.map((requirement, index) => (
                                  <li key={index}>{requirement}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex space-x-2 pt-4">
                              <Button className="flex-1">
                                Join This Ministry
                              </Button>
                              <Button variant="outline" asChild>
                                <Link to="/whatsapp-groups">
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Join WhatsApp Group
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" asChild>
                        <Link to="/whatsapp-groups">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Group
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* All Ministries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">All Ministries</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all our ministry opportunities and find where God is calling you to serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.filter(ministry => !ministry.featured).map(ministry => {
              const Icon = ministry.icon;
              return (
                <Card key={ministry.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img 
                      src={ministry.image} 
                      alt={ministry.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{ministry.title}</CardTitle>
                      <span className="text-sm text-gray-500">{ministry.members} members</span>
                    </div>
                    <CardDescription>{ministry.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <p><span className="font-medium">Leader:</span> {ministry.leader}</p>
                      <p><span className="font-medium">Meets:</span> {ministry.meetingTime}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="flex-1" onClick={() => handleLearnMore(ministry)}>
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              <Icon className="h-6 w-6 text-purple-600" />
                              <span>{ministry.title}</span>
                            </DialogTitle>
                            <DialogDescription className="text-base">
                              {ministry.fullDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Ministry Details</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="font-medium">Leader:</p>
                                  <p className="text-gray-600">{ministry.leader}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Members:</p>
                                  <p className="text-gray-600">{ministry.members}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Meeting Time:</p>
                                  <p className="text-gray-600">{ministry.meetingTime}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Location:</p>
                                  <p className="text-gray-600">{ministry.location}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Activities</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {ministry.activities.map((activity, index) => (
                                  <li key={index}>{activity}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                              <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {ministry.requirements.map((requirement, index) => (
                                  <li key={index}>{requirement}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex space-x-2 pt-4">
                              <Button className="flex-1">
                                Join This Ministry
                              </Button>
                              <Button variant="outline" asChild>
                                <Link to="/whatsapp-groups">
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Join WhatsApp Group
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="outline" asChild>
                        <Link to="/whatsapp-groups">
                          <MessageCircle className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            God has given you unique gifts and talents. Join a ministry where you can use them to serve others and grow in your faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
              <Link to="/connect" className="flex items-center">
                Join a Ministry
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold" asChild>
              <Link to="/whatsapp-groups">
                <MessageCircle className="h-5 w-5 mr-2" />
                Join WhatsApp Groups
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ministries;
