import {
  python,
  tensorflow,
  scikit_learn,
  pytorch,
  keras,
  numpy,
  pandas,
  pycharm,
  jupyter,
  mobile,
  backend,
  creator,
  web,
  gan_dapt,
  neuro_drive,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
  copernilabs_logo,
  kamel_tourki,
  nati_gezahegn,
  zakaria,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'UI/UX Design',
    icon: web,
  },
  {
    title: 'Responsive Web Design',
    icon: mobile,
  },
  {
    title: 'Design Systems & Prototyping',
    icon: backend,
  },
  {
    title: 'User Research & Wireframing',
    icon: creator,
  },
];


const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Scikit Learn',
    icon: scikit_learn,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'NumPy',
    icon: numpy,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'PyCharm',
    icon: pycharm,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
];

const experiences = [
 
  {
    title: 'Web Designer',
    company_name: 'NxtLife Technologies',
    icon: ericsson,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Sep 2024',
   points: [
  'Designed and developed responsive web pages using HTML, CSS, and basic JavaScript as per project requirements.',
  'Assisted senior developers in maintaining and updating client websites with a focus on performance and accessibility.',
  'Converted Figma/PSD designs into functional web pages with cross-browser compatibility.',
  'Gained hands-on experience in real-world web design projects while collaborating with developers and clients.'
]

  },
  {
    title: 'UI Specialist',
    company_name: 'Agami Technologies',
    icon: copernilabs_logo,
    iconBg: '#E6DEDD',
    date: 'Sep,2024 - Present',
  points: [
  'Collaborated with frontend developers to deliver pixel-perfect designs using Figma and modern design systems.',
  'Designed intuitive and mobile-first interfaces for web apps, ensuring seamless user experience across devices.',
  'Created wireframes, high-fidelity mockups, and interactive prototypes for client and internal projects.',
  'Conducted user research and usability testing to improve design decisions and enhance user satisfaction.',
  'Delivered organized design files, components, and detailed handoff specs to developers for smooth implementation.'
]

  },
];

const testimonials = [
  {
    testimonial:
      'An AI optimization prodigy for OFDM (mainly 5G), with outstanding problem solving skills and strong programming expertise, making him highly recommended.',
    name: 'Kamel Tourki',
    designation: 'Research and Standardization Manager',
    company: 'ericsson',
    image: kamel_tourki,
  },
  {
    testimonial:
      'He has exemplified extraordinary prowess as a devoted, tireless, and imaginative AI master, coupled with remarkable personal qualities that radiate brilliance.',
    name: 'Nathnael Gezahegn',
    designation: 'CEO',
    company: 'BN Technologies',
    image: nati_gezahegn,
  },
  {
    testimonial:
      'Eskinder is an exceptional AI expert, demonstrating unmatched talent in research, critical thinking, and harnessing PyTorch and Keras to their fullest potential.',
    name: 'Zakaria El Moutaki',
    designation: 'Standardization Researcher',
    company: 'ericsson',
    image: zakaria,
  },
];

const projects = [
  {
    name: 'Alexmart – Modern Medical E-commerce UI Design',
    description:
      'Alexmart is a modern and responsive UI/UX design concept for an e-commerce platform focused on medical and healthcare products. The design offers a seamless shopping experience with a clean layout, intuitive navigation, and conversion-focused elements such as promotional banners, category filters, and product cards',
    tags: [
      {
        name: 'MedicalEcommerceUI',
        color: 'blue-text-gradient',
      },
      {
        name: 'CleanUXDesign',
        color: 'green-text-gradient',
      },
      {
        name: 'ResponsiveHealthStore',
        color: 'pink-text-gradient',
      },
    ],
    image: gan_dapt,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Neuro Drive',
    description:
      'Successfully trained a cutting-edge self-driving car using Convolution neural networks (CNN) utilizing a state-of-the-art simulator provided by Udacity.',
    tags: [
      {
        name: 'Opencv-python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: neuro_drive,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Market Value Predictor',
    description:
      "I developed a powerful regression model using machine learning algorithms to predict professional football players' market value accurately.",
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Linear Regression',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: market_predict,
    source_code_link:
      'https://github.com/ESKINDERTSEGAYE/Project-Market-Value-Predictor',
  },
];

export { services, technologies, experiences, testimonials, projects };
