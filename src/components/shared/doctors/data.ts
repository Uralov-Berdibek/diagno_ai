const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiology',
    profileImage: '/male.png',
    contact1: '123-456-7890',
    contact2: '123-456-7891',
    email: 'johndoe@example.com',
    experience: '10 years',
    clinic: 'City Heart Clinic',
    address: '123 Main St, Metropolis',
    languages: ['English', 'Spanish'],
    gender: 'Male',
    rating: '4.5',
    reviews: 120,
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialty: 'Pediatrics',
    profileImage: '/female.png',
    contact1: '123-456-7892',
    contact2: '123-456-7893',
    email: 'janesmith@example.com',
    experience: '8 years',
    clinic: 'Healthy Kids Clinic',
    address: '456 Elm St, Metropolis',
    languages: ['English', 'French'],
    gender: 'Female',
    rating: '4.7',
    reviews: 95,
  },
  {
    id: 3,
    name: 'Dr. Michael Brown',
    specialty: 'Dermatology',
    profileImage: '/male.png',
    contact1: '123-456-7894',
    contact2: '123-456-7895',
    email: 'michaelbrown@example.com',
    experience: '12 years',
    clinic: 'Skin Care Center',
    address: '789 Pine St, Metropolis',
    languages: ['English', 'German'],
    gender: 'Male',
    rating: '4.6',
    reviews: 110,
  },
  {
    id: 4,
    name: 'Dr. Emily Johnson',
    specialty: 'Neurology',
    profileImage: '/female.png',
    contact1: '123-456-7896',
    contact2: '123-456-7897',
    email: 'emilyjohnson@example.com',
    experience: '6 years',
    clinic: 'Brain Health Clinic',
    address: '101 Maple St, Metropolis',
    languages: ['English', 'Mandarin'],
    gender: 'Female',
    rating: '4.8',
    reviews: 85,
  },
  {
    id: 5,
    name: 'Dr. Chris Lee',
    specialty: 'Orthopedics',
    profileImage: '/male.png',
    contact1: '123-456-7898',
    contact2: '123-456-7899',
    email: 'chrislee@example.com',
    experience: '14 years',
    clinic: 'Bone and Joint Clinic',
    address: '202 Oak St, Metropolis',
    languages: ['English', 'Korean'],
    gender: 'Male',
    rating: '4.4',
    reviews: 95,
  },
  {
    id: 6,
    name: 'Dr. Sarah Harris',
    specialty: 'Gynaecology',
    profileImage: '/female.png',
    contact1: '123-456-7800',
    contact2: '123-456-7801',
    email: 'sarahharris@example.com',
    experience: '9 years',
    clinic: "Women's Health Clinic",
    address: '303 Birch St, Metropolis',
    languages: ['English', 'Italian'],
    gender: 'Female',
    rating: '4.9',
    reviews: 130,
  },
  {
    id: 7,
    name: 'Dr. David Martin',
    specialty: 'Urology',
    profileImage: '/male.png',
    contact1: '123-456-7802',
    contact2: '123-456-7803',
    email: 'davidmartin@example.com',
    experience: '11 years',
    clinic: 'Urology Center',
    address: '404 Cedar St, Metropolis',
    languages: ['English', 'Spanish'],
    gender: 'Male',
    rating: '4.3',
    reviews: 100,
  },
  {
    id: 8,
    name: 'Dr. Lisa Taylor',
    specialty: 'Ophthalmology',
    profileImage: '/female.png',
    contact1: '123-456-7804',
    contact2: '123-456-7805',
    email: 'lisataylor@example.com',
    experience: '7 years',
    clinic: 'Vision Care Clinic',
    address: '505 Willow St, Metropolis',
    languages: ['English', 'Portuguese'],
    gender: 'Female',
    rating: '4.7',
    reviews: 90,
  },
  {
    id: 9,
    name: 'Dr. William Wilson',
    specialty: 'General Medicine',
    profileImage: '/male.png',
    contact1: '123-456-7806',
    contact2: '123-456-7807',
    email: 'williamwilson@example.com',
    experience: '15 years',
    clinic: 'City Health Center',
    address: '606 Birch St, Metropolis',
    languages: ['English', 'Arabic'],
    gender: 'Male',
    rating: '4.2',
    reviews: 140,
  },
  {
    id: 10,
    name: 'Dr. Patricia Robinson',
    specialty: 'Psychiatry',
    profileImage: '/female.png',
    contact1: '123-456-7808',
    contact2: '123-456-7809',
    email: 'patriciarobinson@example.com',
    experience: '20 years',
    clinic: 'Mental Health Clinic',
    address: '707 Oak St, Metropolis',
    languages: ['English', 'Japanese'],
    gender: 'Female',
    rating: '4.6',
    reviews: 105,
  },
  {
    id: 11,
    name: 'Dr. James Wright',
    specialty: 'Oncology',
    profileImage: '/male.png',
    contact1: '123-456-7810',
    contact2: '123-456-7811',
    email: 'jameswright@example.com',
    experience: '16 years',
    clinic: 'Cancer Care Center',
    address: '808 Pine St, Metropolis',
    languages: ['English', 'French'],
    gender: 'Male',
    rating: '4.7',
    reviews: 115,
  },
  {
    id: 12,
    name: 'Dr. Mary Green',
    specialty: 'Endocrinology',
    profileImage: '/female.png',
    contact1: '123-456-7812',
    contact2: '123-456-7813',
    email: 'marygreen@example.com',
    experience: '13 years',
    clinic: 'Hormone Health Clinic',
    address: '909 Maple St, Metropolis',
    languages: ['English', 'German'],
    gender: 'Female',
    rating: '4.4',
    reviews: 90,
  },
  {
    id: 13,
    name: 'Dr. Robert Adams',
    specialty: 'Rheumatology',
    profileImage: '/male.png',
    contact1: '123-456-7814',
    contact2: '123-456-7815',
    email: 'robertadams@example.com',
    experience: '18 years',
    clinic: 'Joint Health Center',
    address: '1010 Elm St, Metropolis',
    languages: ['English', 'Russian'],
    gender: 'Male',
    rating: '4.3',
    reviews: 100,
  },
  {
    id: 14,
    name: 'Dr. Nancy Clark',
    specialty: 'Allergy & Immunology',
    profileImage: '/female.png',
    contact1: '123-456-7816',
    contact2: '123-456-7817',
    email: 'nancyclark@example.com',
    experience: '5 years',
    clinic: 'Allergy Care Clinic',
    address: '1111 Birch St, Metropolis',
    languages: ['English', 'Arabic'],
    gender: 'Female',
    rating: '4.8',
    reviews: 80,
  },
  {
    id: 15,
    name: 'Dr. Brian Evans',
    specialty: 'Plastic Surgery',
    profileImage: '/male.png',
    contact1: '123-456-7818',
    contact2: '123-456-7819',
    email: 'brianevans@example.com',
    experience: '17 years',
    clinic: 'Cosmetic Surgery Center',
    address: '1212 Oak St, Metropolis',
    languages: ['English', 'Italian'],
    gender: 'Male',
    rating: '4.6',
    reviews: 125,
  },
  {
    id: 16,
    name: 'Dr. Elizabeth Hall',
    specialty: 'Gastroenterology',
    profileImage: '/female.png',
    contact1: '123-456-7820',
    contact2: '123-456-7821',
    email: 'elizabethhall@example.com',
    experience: '9 years',
    clinic: 'Digestive Health Clinic',
    address: '1313 Pine St, Metropolis',
    languages: ['English', 'Korean'],
    gender: 'Female',
    rating: '4.5',
    reviews: 105,
  },
  {
    id: 17,
    name: 'Dr. Daniel Scott',
    specialty: 'Nephrology',
    profileImage: '/male.png',
    contact1: '123-456-7822',
    contact2: '123-456-7823',
    email: 'danielscott@example.com',
    experience: '11 years',
    clinic: 'Kidney Care Clinic',
    address: '1414 Maple St, Metropolis',
    languages: ['English', 'Mandarin'],
    gender: 'Male',
    rating: '4.8',
    reviews: 115,
  },
  {
    id: 18,
    name: 'Dr. Olivia Moore',
    specialty: 'Emergency Medicine',
    profileImage: '/female.png',
    contact1: '123-456-7824',
    contact2: '123-456-7825',
    email: 'oliviamoore@example.com',
    experience: '14 years',
    clinic: 'Emergency Care Center',
    address: '1515 Elm St, Metropolis',
    languages: ['English', 'Russian'],
    gender: 'Female',
    rating: '4.6',
    reviews: 110,
  },
  {
    id: 19,
    name: 'Dr. Anthony King',
    specialty: 'Hematology',
    profileImage: '/male.png',
    contact1: '123-456-7826',
    contact2: '123-456-7827',
    email: 'anthonyking@example.com',
    experience: '12 years',
    clinic: 'Blood Health Center',
    address: '1616 Birch St, Metropolis',
    languages: ['English', 'Spanish'],
    gender: 'Male',
    rating: '4.7',
    reviews: 130,
  },
  {
    id: 20,
    name: 'Dr. Rachel Lee',
    specialty: 'Obstetrics',
    profileImage: '/female.png',
    contact1: '123-456-7828',
    contact2: '123-456-7829',
    email: 'rachellee@example.com',
    experience: '10 years',
    clinic: 'Mother and Child Clinic',
    address: '1717 Oak St, Metropolis',
    languages: ['English', 'French'],
    gender: 'Female',
    rating: '4.5',
    reviews: 120,
  },
];

export default doctors;
