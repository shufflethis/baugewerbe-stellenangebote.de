import { JobListing } from './types';

export const MOCK_JOBS: JobListing[] = [
  {
    id: 1,
    title: 'Bauleiter Hochbau (m/w/d)',
    company: 'Müller Bau GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    salary: '4.200€ - 5.500€',
    postedAt: 'Vor 2 Tagen'
  },
  {
    id: 2,
    title: 'Maurer (m/w/d)',
    company: 'Schmidt & Partner Bau',
    location: 'München',
    type: 'Vollzeit',
    salary: '3.200€ - 3.800€',
    postedAt: 'Neu'
  },
  {
    id: 3,
    title: 'Zimmerer / Zimmermann (m/w/d)',
    company: 'HolzBau Weber GmbH',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '3.400€ - 4.000€',
    postedAt: 'Vor 1 Woche'
  }
];
