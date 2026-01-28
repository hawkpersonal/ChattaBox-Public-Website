import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Loader2 } from "lucide-react";

export function Contact() {
  const [state, handleSubmit] = useForm("mgoywepn");

  return (
    <section id="contact" className="py-14 md:py-24 bg-[#F9F8F4]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-serif">
            Get early access
          </h2>
          <p className="text-lg text-[#5F5B55] leading-relaxed">
            Tell us a little about your loved one — we'll reply within 24 hours.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Contact Form */}
          <Card className="hover:shadow-elegant-hover transition-all">
            <CardContent className="pt-6">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <div className="h-16 w-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto">
                      <svg className="h-8 w-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1B1B1A] mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-base text-[#5F5B55]">
                    Thanks — you're on the early access list. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1B1B1A]">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          disabled={state.submitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1B1B1A]">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          disabled={state.submitting}
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="whoWillUse" className="text-[#1B1B1A]">Who will use Chattabox?</Label>
                        <select
                          id="whoWillUse"
                          name="whoWillUse"
                          required
                          disabled={state.submitting}
                          className="flex h-10 w-full rounded-md border border-[#DED9D0] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#8A857E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(192,96,64,0.35)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select who will use Chattabox...</option>
                          <option value="My mum">My mum</option>
                          <option value="My dad">My dad</option>
                          <option value="My grandparent">My grandparent</option>
                          <option value="My partner">My partner</option>
                          <option value="Someone I care for">Someone I care for</option>
                          <option value="Another family member">Another family member</option>
                          <option value="Myself">Myself</option>
                          <option value="I'm enquiring for a care provider / company">I'm enquiring for a care provider / company</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#1B1B1A]">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Mum/dad/grandparent — what would you like Chattabox to help with?"
                          rows={5}
                          disabled={state.submitting}
                          className="border-[#DED9D0] focus:ring-2 focus:ring-[rgba(192,96,64,0.35)]"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={state.submitting}>
                        {state.submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Join early access"
                        )}
                      </Button>
                      {state.errors && (
                        <div className="text-sm text-red-600 text-center">
                          Oops! There was a problem submitting your form. Please try again.
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="bg-white rounded-[18px] border border-[#E6E2DA] p-6 shadow-elegant hover:shadow-elegant-hover transition-all hover:-translate-y-0.5">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-[12px] bg-[#EFEDE5] flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-[#C06040]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-base text-[#1B1B1A] mb-1">
                  Email
                </h3>
                <p className="text-base text-[#5F5B55]">hello@chattabox.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
