import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-14 md:py-24 bg-[#F9F8F4]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            Get in Touch
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Every family is different. Tell us about your loved one and we'll help you understand if ChattaBox is right for them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="hover:shadow-elegant-hover transition-all">
            <CardHeader>
              <CardTitle className="text-[#1B1B1A]">Send us a message</CardTitle>
              <CardDescription className="text-[#5F5B55]">
                We'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1B1B1A]">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1B1B1A]">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1B1B1A]">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Who is this for? What are you hoping ChattaBox could help with?"
                    rows={5}
                    className="border-[#DED9D0] focus:ring-2 focus:ring-[rgba(192,96,64,0.35)]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-[18px] border border-[#E6E2DA] p-6 shadow-elegant hover:shadow-elegant-hover transition-all hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-[12px] bg-[#EFEDE5] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#C06040]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-[#1B1B1A] mb-1">
                    Email
                  </h3>
                  <p className="text-base text-[#5F5B55]">hello@chattabox.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E6E2DA] p-6 shadow-elegant hover:shadow-elegant-hover transition-all hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-[12px] bg-[#EFEDE5] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#C06040]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-[#1B1B1A] mb-1">
                    Phone
                  </h3>
                  <p className="text-base text-[#5F5B55]">Available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
