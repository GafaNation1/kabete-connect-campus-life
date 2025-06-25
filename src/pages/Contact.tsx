
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "University of Nairobi",
        "Upper Kabete Campus",
        "Student Center, Room 201",
        "P.O. Box 29053-00625, Nairobi"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Main Office: +254 700 123 456",
        "Chairman: +254 712 345 678",
        "Secretary: +254 723 456 789",
        "Emergency: +254 734 567 890"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "General: info@ukccu.org",
        "Leadership: leadership@ukccu.org",
        "Events: events@ukccu.org",
        "Prayer Requests: prayer@ukccu.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: After Service - 3:00 PM",
        "Closed on Public Holidays"
      ]
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", handle: "@UKCCUOfficial", color: "text-blue-600" },
    { icon: Instagram, name: "Instagram", handle: "@ukccu_official", color: "text-pink-600" },
    { icon: Twitter, name: "Twitter", handle: "@UKCCU_Official", color: "text-blue-400" },
    { icon: Youtube, name: "YouTube", handle: "UKCCU Channel", color: "text-red-600" }
  ];

  const officeLocation = {
    address: "University of Nairobi, Upper Kabete Campus",
    directions: "Located in the Student Center building, 2nd floor, Room 201. Enter through the main student center entrance and take the stairs to the second floor."
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
            We'd love to hear from you! Reach out to us for any questions, prayer requests, or to get involved
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this about?" />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select id="category" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="event">Event Information</option>
                      <option value="join">Want to Join</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={5}
                    />
                  </div>
                  <Button className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Location & Directions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
              <Card className="p-6 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Office Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{officeLocation.address}</p>
                  <p className="text-gray-600 text-sm mb-4">{officeLocation.directions}</p>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Click to view full map</p>
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Contact</CardTitle>
                  <CardDescription>Need immediate assistance?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Main Office
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Visit Office
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Follow Us Online</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with us on social media for updates, inspirational content, and community highlights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMedia.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent>
                    <div className="mb-4">
                      <Icon className={`h-12 w-12 mx-auto ${platform.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{platform.handle}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow Us
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-lg mb-2">What time are your services?</h4>
              <p className="text-gray-600 mb-4">
                Sunday services are at 10:00 AM, and our weekly Bible study is every Wednesday at 6:00 PM.
              </p>

              <h4 className="font-semibold text-lg mb-2">Do I need to be a student to attend?</h4>
              <p className="text-gray-600 mb-4">
                While we're primarily a campus ministry, visitors and non-students are always welcome to join our services and events.
              </p>

              <h4 className="font-semibold text-lg mb-2">How can I get involved in ministry?</h4>
              <p className="text-gray-600 mb-4">
                We have various ministry opportunities! Contact our leadership team or attend one of our services to learn more about how you can serve.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Do you offer online services?</h4>
              <p className="text-gray-600 mb-4">
                Yes! We livestream our Sunday services and have online Bible study sessions. Check our social media for streaming links.
              </p>

              <h4 className="font-semibold text-lg mb-2">What should I expect on my first visit?</h4>
              <p className="text-gray-600 mb-4">
                Expect a warm welcome, contemporary worship music, practical Bible teaching, and genuine fellowship. Come as you are!
              </p>

              <h4 className="font-semibold text-lg mb-2">How can I submit a prayer request?</h4>
              <p className="text-gray-600 mb-4">
                You can email us at prayer@ukccu.org, fill out our online form, or speak with any of our leaders after service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency Contact</h2>
            <p className="text-red-600 mb-4">
              If you're experiencing a spiritual, emotional, or personal crisis and need immediate prayer or counseling support:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Emergency Helpline: +254 734 567 890
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Mail className="h-4 w-4 mr-2" />
                crisis@ukccu.org
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
