import { MessageCircle } from 'lucide-react';

export default function MessageMe() {
  return (
    <a
      href="https://wa.me/+263773914992" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-bold">Message Me</span>
    </a>
  );
}
