import {
  Fingerprint, CreditCard, Vote, MonitorSmartphone, FilePen, GraduationCap, Briefcase, TrainFront,
  Plane, Printer, Copy, ScanLine, Smartphone, ArrowLeftRight, Layers, UserSquare, Keyboard, Wifi, FolderOpen,
  type LucideIcon,
} from 'lucide-react'

export const BIZ = {
  name: 'Biswas Digital Hub',
  phone: '+91 95476 32355',
  phoneRaw: '919547632355',
  review: 'https://g.page/r/CfvINjZcHSllEBM/review',
  location: 'Bhabanipur Char, West Bengal',
  maps: 'https://www.google.com/maps/search/?api=1&query=Biswas+Digital+Hub+Bhabanipur+Char',
}

export const wa = (msg: string) => `https://wa.me/${BIZ.phoneRaw}?text=${encodeURIComponent(msg)}`

export type Category = 'Govt & ID' | 'Forms & Jobs' | 'Travel' | 'Print & Studio' | 'Payments' | 'Digital'

export interface Service { title: string; bn: string; desc: string; icon: LucideIcon; cat: Category; price: string; img?: string }

export const services: Service[] = [
  { title: 'Aadhaar Services', bn: 'আধার পরিষেবা', desc: 'Download, update support, e-Aadhaar print & PVC card order.', icon: Fingerprint, cat: 'Govt & ID', price: '₹30+' },
  { title: 'PAN Card Services', bn: 'প্যান কার্ড', desc: 'New PAN, correction, e-PAN download & Aadhaar linking.', icon: CreditCard, cat: 'Govt & ID', price: '₹150+' },
  { title: 'Voter ID Services', bn: 'ভোটার কার্ড', desc: 'Form 6 / 8 apply, correction, e-EPIC download.', icon: Vote, cat: 'Govt & ID', price: '₹50+' },
  { title: 'Online Registration', bn: 'অনলাইন রেজিস্ট্রেশন', desc: 'Govt portals, certificates, Swasthya Sathi, Lakshmir Bhandar & more.', icon: MonitorSmartphone, cat: 'Forms & Jobs', price: '₹50+' },
  { title: 'Online Form Fill-up', bn: 'অনলাইন ফর্ম', desc: 'Admission, exam & any online form — draft preview before submit.', icon: FilePen, cat: 'Forms & Jobs', price: '₹50+' },
  { title: 'Scholarship Assistance', bn: 'স্কলারশিপ', desc: 'SVMCM, Oasis, Aikyashree, NSP — apply & renewal.', icon: GraduationCap, cat: 'Forms & Jobs', price: '₹60+' },
  { title: 'Job Application Fill-up', bn: 'চাকরির আবেদন', desc: 'SSC, WBP, Railway, Bank — photo/sign resize included.', icon: Briefcase, cat: 'Forms & Jobs', price: '₹80+' },
  { title: 'Railway Ticket Booking', bn: 'রেলের টিকিট', desc: 'IRCTC reserved & Tatkal tickets, PNR status.', icon: TrainFront, cat: 'Travel', price: '₹40+' },
  { title: 'Flight Ticket Booking', bn: 'বিমানের টিকিট', desc: 'Domestic & international flights at best fares.', icon: Plane, cat: 'Travel', price: '₹100+' },
  { title: 'Printing (B/W & Color)', bn: 'প্রিন্টিং', desc: 'Crisp laser printouts from phone, PDF or WhatsApp.', icon: Printer, cat: 'Print & Studio', price: '₹3/page' },
  { title: 'Xerox / Photocopy', bn: 'জেরক্স', desc: 'Fast single & double-sided photocopies.', icon: Copy, cat: 'Print & Studio', price: '₹2/page' },
  { title: 'Scanning Services', bn: 'স্ক্যানিং', desc: 'High-res scan to PDF / JPG, sent to WhatsApp or email.', icon: ScanLine, cat: 'Print & Studio', price: '₹5/page' },
  { title: 'Lamination', bn: 'ল্যামিনেশন', desc: 'Protect certificates, ID cards & documents.', icon: Layers, cat: 'Print & Studio', price: '₹20+' },
  { title: 'Passport Size Photo', bn: 'পাসপোর্ট ছবি', desc: 'Instant studio photos in 5 minutes, all sizes.', icon: UserSquare, cat: 'Print & Studio', price: '₹40/set' },
  { title: 'Mobile Recharge & Bills', bn: 'রিচার্জ ও বিল', desc: 'Mobile, DTH, electricity bill payments.', icon: Smartphone, cat: 'Payments', price: 'Free' },
  { title: 'Money Transfer', bn: 'টাকা পাঠানো', desc: 'Domestic money transfer & AEPS cash withdrawal.', icon: ArrowLeftRight, cat: 'Payments', price: 'Low fee' },
  { title: 'Document Typing', bn: 'টাইপিং', desc: 'Bengali & English typing, resume, bio-data, applications.', icon: Keyboard, cat: 'Digital', price: '₹30/page' },
  { title: 'Internet & Wi-Fi', bn: 'ইন্টারনেট', desc: 'High-speed browsing desk for study & work.', icon: Wifi, cat: 'Digital', price: '₹20/hr' },
  { title: 'Digital Documentation', bn: 'ডিজিটাল ডকুমেন্ট', desc: 'PDF merge, compress, KB resize & DigiLocker help.', icon: FolderOpen, cat: 'Digital', price: '₹20+' },
]

export const categories: ('All' | Category)[] = ['All', 'Govt & ID', 'Forms & Jobs', 'Travel', 'Print & Studio', 'Payments', 'Digital']

export const checklists: Record<string, string[]> = {
  'PAN Card': ['Aadhaar card', 'Passport size photo', 'Signature on white paper', 'Mobile number linked to Aadhaar'],
  'Voter ID': ['Aadhaar card', 'Age proof (Birth cert. / Madhyamik admit)', 'Address proof', 'Passport size photo', 'Family member EPIC no.'],
  'Scholarship (SVMCM)': ['Madhyamik / HS marksheet', 'Income certificate', 'Aadhaar & bank passbook', 'Admission receipt', 'Photo & mobile number'],
  'Govt Job Form': ['Photo & signature (scanned)', 'Aadhaar card', 'Educational certificates', 'Caste certificate (if any)', 'Active email & mobile'],
  'Train Ticket': ['Passenger name, age & gender', 'Journey date & station', 'ID proof for travel', 'Mobile number'],
}


const imgs = ['id', 'card', 'vote', 'desktop', 'memo', 'grad', 'job', 'train', 'plane', 'printer', 'page', 'scan', 'clip', 'camera', 'mobile', 'money', 'keyboard', 'wifi', 'folder']
services.forEach((s, i) => { s.img = `/3d/${imgs[i]}.png` })
