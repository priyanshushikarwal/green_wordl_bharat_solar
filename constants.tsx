
import React from 'react';
import { NavItem, ServiceItem, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Rooftop', href: '#rooftop' },
  { label: 'Process', href: '#process' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
];

export interface ProjectItem {
  title: string;
  location: string;
  capacity: string;
  image: string;
  alt: string;
  category: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: "Sitapura Industrial Mega-Project",
    location: "Sitapura Industrial Area, Jaipur",
    capacity: "1.2 MW",
    image: "https://images.unsplash.com/photo-1509391366360-feaf9fa44852?auto=format&fit=crop&q=80&w=800",
    alt: "1.2MW Industrial solar installation in Sitapura, Jaipur by Green World Bharat Solar",
    category: "Industrial"
  },
  {
    title: "Malviya Nagar Commercial Hub",
    location: "Malviya Nagar, Jaipur",
    capacity: "450 kW",
    image: "https://images.unsplash.com/photo-1545259742-b4fe8fea3ff1?auto=format&fit=crop&q=80&w=800",
    alt: "Commercial rooftop solar in Malviya Nagar Jaipur",
    category: "Commercial"
  },
  {
    title: "VKI Warehouse Installation",
    location: "V.K.I Industrial Area, Jaipur",
    capacity: "800 kW",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
    alt: "Large scale warehouse solar panels in VKI Jaipur",
    category: "Warehouse"
  },
  {
    title: "Luxury Estate Solar Rooftop",
    location: "Vaishali Nagar, Jaipur",
    capacity: "25 kW",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=800",
    alt: "Residential solar panel installation in Vaishali Nagar Jaipur",
    category: "Residential"
  },
  {
    title: "C-Scheme Corporate Office",
    location: "C-Scheme, Jaipur",
    capacity: "150 kW",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
    alt: "Corporate office solar power system in C-Scheme Jaipur",
    category: "Corporate"
  },
  {
    title: "Jagatpura Educational Institute",
    location: "Jagatpura, Jaipur",
    capacity: "300 kW",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    alt: "Institutional solar installation in Jagatpura Jaipur",
    category: "Institutional"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is Green World Bharat Solar an MNRE-approved solar company in Jaipur?",
    answer: "Yes, we are a government-approved solar company in Jaipur. Our installations strictly adhere to MNRE standards, ensuring high-quality components and eligibility for relevant government incentives for commercial and residential projects."
  },
  {
    question: "What is the timeline for a commercial solar installation in Jaipur?",
    answer: "A standard industrial or warehouse solar installation in Jaipur typically takes between 4 to 8 weeks, depending on the system capacity (kW/MW) and structural engineering requirements. This includes design, procurement, installation, and net-metering synchronization."
  },
  {
    question: "What is the difference between On-Grid and Off-Grid solar systems in Rajasthan?",
    answer: "On-grid solar systems are connected to the main utility grid, allowing you to export excess energy via net metering. Off-grid systems use batteries for energy storage, making them ideal for remote areas of Rajasthan where grid connectivity is unstable."
  },
  {
    question: "Does the Jaipur climate affect solar panel performance?",
    answer: "Jaipur enjoys excellent solar irradiance (over 300 sunny days). Our engineering team uses high-efficiency solar panels designed to withstand high temperatures and dust, ensuring peak performance even during peak Rajasthan summers."
  }
];

export const SERVICE_AREAS = [
  "Mansarovar",
  "Vaishali Nagar",
  "Malviya Nagar",
  "Jagatpura",
  "C-Scheme",
  "Raja Park",
  "Sitapura Industrial Area",
  "VKI Industrial Area"
];
