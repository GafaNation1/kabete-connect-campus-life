
import { Users, Target, Eye, Heart, BookOpen, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      title: "Biblical Foundation",
      description: "We base all our beliefs and practices on the unchanging truth of God's Word",
      icon: BookOpen
    },
    {
      title: "Authentic Fellowship",
      description: "Building genuine relationships that reflect Christ's love and grace",
      icon: Users
    },
    {
      title: "Passionate Worship",
      description: "Worship that comes from the heart and glorifies God in spirit and truth",
      icon: Heart
    },
    {
      title: "Servant Leadership",
      description: "Leading by example through humble service and Christ-like character",
      icon: Handshake
    }
  ];

  const history = [
    {
      year: "1995",
      event: "Foundation",
      description: "UKCCU was founded by a small group of passionate students who desired to see God move on campus"
    },
    {
      year: "2000",
      event: "First Conference",
      description: "Organized our first annual youth conference, attracting over 200 students from various universities"
    },
    {
      year: "2010",
      event: "Ministry Expansion",
      description: "Launched multiple specialized ministries including music, outreach, and small groups"
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description: "Adapted to online ministry during the pandemic, reaching students globally through livestreams"
    },
    {
      year: "2024",
      event: "Present Day",
      description: "Continuing to grow and impact lives, with over 500 active members and expanding influence"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About UKCCU</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            Discover our story, mission, and the heart behind our ministry
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Upper Kabete Campus Christian Union (UKCCU) began as a small gathering of students who shared 
                a common vision: to see God's kingdom established on campus. What started with just a handful 
                of believers meeting for prayer and Bible study has grown into a vibrant community of hundreds 
                of students from diverse backgrounds, united by our faith in Jesus Christ.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we've witnessed countless testimonies of transformation, healing, and restoration. 
                Students have found not just academic success, but spiritual growth, lifelong friendships, and 
                a deeper understanding of their purpose in God's kingdom.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, UKCCU stands as a beacon of hope and faith within the University of Nairobi's Upper Kabete 
                Campus, continuing to impact lives and communities both locally and globally.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Students in fellowship" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">29</p>
                <p className="text-sm">Years of Ministry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mission, Vision & Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To create a vibrant Christian community within Upper Kabete Campus where students can grow 
                  spiritually, develop meaningful relationships, and be equipped to serve God and society with 
                  passion and purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading Christian community on campus, raising generation of students who are 
                  rooted in Christ, equipped for service, and committed to transforming their communities 
                  and nations for God's glory.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Heart</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We are passionate about seeing students encounter the living God, experience authentic 
                  community, and discover their unique calling to make a difference in the world through 
                  Christ's love.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                    <CardContent>
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of God's faithfulness in our ministry over the years
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {history.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-4">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-600">{item.year}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-900">{item.event}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full border-4 border-white">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Believe</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">The Bible</h3>
              <p className="text-gray-700 mb-6">
                We believe the Bible is the inspired, infallible Word of God and our ultimate authority 
                for faith and practice. It is God's revelation to humanity and contains everything 
                necessary for salvation and Christian living.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-blue-600">The Trinity</h3>
              <p className="text-gray-700 mb-6">
                We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit. 
                Each person is fully God, yet there is only one God.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-blue-600">Jesus Christ</h3>
              <p className="text-gray-700 mb-6">
                We believe Jesus Christ is fully God and fully man, born of a virgin, lived a sinless life, 
                died on the cross for our sins, rose from the dead, and ascended to heaven where He 
                intercedes for us.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Salvation</h3>
              <p className="text-gray-700 mb-6">
                We believe salvation is by grace alone through faith alone in Christ alone. It is a gift 
                from God, not earned by good works, and results in eternal life with God.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-blue-600">The Church</h3>
              <p className="text-gray-700 mb-6">
                We believe the Church is the body of Christ, composed of all believers. We are called 
                to fellowship together, worship God, make disciples, and serve our communities.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-blue-600">The Great Commission</h3>
              <p className="text-gray-700 mb-6">
                We believe every Christian is called to make disciples of all nations, sharing the 
                gospel and helping others grow in their faith and relationship with God.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
