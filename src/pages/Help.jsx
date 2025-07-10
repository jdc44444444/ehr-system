import React from 'react';
import { Card, CardHeader, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { HelpCircle, BookOpen, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';

function Help() {
  const faqs = [
    {
      question: 'How do I add a new resident?',
      answer: 'Navigate to the Residents page and click the "Add New Resident" button. Fill in all required information and click Save.'
    },
    {
      question: 'How do I document medication administration?',
      answer: 'Go to the Medications page, find the resident, and click on their MAR. Check off medications as they are administered.'
    },
    {
      question: 'How do I export monthly reports?',
      answer: 'Visit the Reports page and select the type of report you need. Choose the date range and click Export.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Contact your system administrator to reset your password. They can do this from the User Management page.'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">User Guide</h3>
            <p className="text-sm text-gray-600 mb-4">Complete documentation for all features</p>
            <Button icon={ExternalLink} className="w-full">View Guide</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <MessageCircle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">Chat with our support team</p>
            <Button icon={MessageCircle} className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Phone className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-sm text-gray-600 mb-4">Available Mon-Fri 8AM-6PM PST</p>
            <Button icon={Phone} className="w-full">1-800-EHR-HELP</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center">
            <HelpCircle className="h-5 w-5 mr-2 text-gray-600" />
            <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent>
          <div className="text-center">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-sm text-gray-600 mb-4">
              Can't find what you're looking for? Send us an email and we'll get back to you within 24 hours.
            </p>
            <Button icon={Mail}>Email Support</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Help;
