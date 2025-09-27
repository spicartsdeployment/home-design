import home_vd from './assets/videos/home_vd.mp4';

import teamImg from './assets/images/team-img.png';
import img1 from './assets/images/img-1.png';
import img2 from './assets/images/img-2.png';
import img3 from './assets/images/img-3.png';
import logo from './assets/images/logo.png';

import servimg4 from './assets/images/servimg4.jpg';
import servimg2 from './assets/images/servimg2.jpg';
import servimg3 from './assets/images/servimg3.jpg';
import servimg1 from './assets/images/servimg1.jpg';
import agaraAssociatesLogo from './assets/images/Aagara Associates logo.png';
import project1Img from './assets/images/project_images/FLAT_NO_102_NARSINGI_01/hero.jpg';
import project2Img from './assets/images/project_images/PENTHOUSE_HI_TECH_CITY/hero.jpg';
import project3Img from './assets/images/project_images/FARM_HOUSE_MAHESHWARAM/hero.jpg';
import project4Img from './assets/images/project_images/VILLA_BOWENPALLY/hero.jpg'
// import project5Img from './assets/images/project_images/WHITE_RIDGE_HOTEL_HI_TECH_CITY';
import project6Img from './assets/images/project_images/APARTMENT_MACHILIPATNAM/hero.jpg'
//import project7Img from './assets/images/project_images/APARTMENT_KONDAPUR/';
import project8Img from './assets/images/project_images/VASAVIKA_BRINDAVANAM_LAYOUT_BENGALURU/hero.jpg'
import project9Img from './assets/images/project_images/VILLA_LAYOUT_KADTHAL/hero.jpg';
import project10Img from './assets/images/project_images/CHINTHALA RESIDENCE_BOLLARAM/hero.jpg';
import project11Img from './assets/images/project_images/CLUB_TABERNA_JUBLIEE HILLS/hero.jpg';
import project12Img from './assets/images/project_images/FARMLAND_LAYOUT_KOTRA/floorplan.jpg';


const project1_Images = Object.values(
  import.meta.glob('./assets/images/project_images/FLAT_NO_102_NARSINGI_01/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);
console.log('project1_Images: ,......................,khjgfh', project1_Images);


const project2_Images = Object.values(
  import.meta.glob('./assets/images/project_images/PENTHOUSE_HI_TECH_CITY/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);

const project3_Images = Object.values(
  import.meta.glob('./assets/images/project_images/FARM_HOUSE_MAHESHWARAM/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);

const project4_Images = Object.values(
  import.meta.glob('./assets/images/project_images/VILLA_BOWENPALLY/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);

const project6_Images = Object.values(
  import.meta.glob('./assets/images/project_images/APARTMENT_MACHILIPATNAM/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);

const project8_Images = Object.values(
  import.meta.glob('./assets/images/project_images/VASAVIKA_BRINDAVANAM_LAYOUT_BENGALURU/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);

const project10_Images = Object.values(
  import.meta.glob('./assets/images/project_images/CHINTHALA RESIDENCE_BOLLARAM/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);

const project11_Images = Object.values(
  import.meta.glob('./assets/images/project_images/CLUB_TABERNA_JUBLIEE HILLS/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module) => module?.default || module);





export const IMAGE_SOURCES = {
  teamImg,
  img1,
  img2,
  img3,
  logo,
  agaraAssociatesLogo,


};

export const Services_Images = [
  { img: servimg1, tittle: "Architecture", desc: "The art and science of designing buildings and spaces, balancing creativity, functionality, and structural integrity to shape the built environment." },
  { img: servimg2, tittle: "Interior Design", desc: "Enhancing indoor spaces through creative layouts, colors, lighting, and materials to make environments both functional and aesthetically pleasing." },
  { img: servimg3, tittle: "Landscape Design", desc: "Designing outdoor spaces by blending natural elements like plants, water, and terrain with built structures to create harmonious, functional, and beautiful environments." },
  { img: servimg4, tittle: "Construction", desc: "The process of planning, designing, and building structures with durability, safety, and efficiency as the foundation." },

]

export const VIDEO_SOURCES = {
  home_vd,
};


export const project_info = [
  { id: 1, title: "Flat No 102, Narsingi", subTittle: "Resedential", img: project1Img, images: project1_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 2, title: "Penthouse, Hi-tech city", subTittle: "Mixed Use", img: project2Img, images: project2_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 3, title: "Farm House, Maheswaram", subTittle: "Resedential", img: project3Img, images: project3_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 4, title: "Villa, Bowenapally", subTittle: "Resedential", img: project4Img, images: project4_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 5, title: "White Ridge Hotel, Hi-tech City", subTittle: "Hospitality", img: project1Img, images: project2_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 6, title: "Aparatment, Machilipatnam", subTittle: "Resedential", img: project6Img, images: project6_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 7, title: "Apartment, Kondapur", subTittle: "Resedential", img: project1Img, images: project2_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 8, title: "Vasavika Brindavanam Layout, Bengaluru", subTittle: "Hospitality", img: project8Img, images: project8_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 9, title: "Villa Layout, Kadthal", subTittle: "Resedential", img: project9Img, images: project2_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 10, title: "Chinthala Residence, Bollaram", subTittle: "Resedential", img: project10Img, images: project10_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 11, title: "Club Taberna, Jublee Hills", subTittle: "F&B Interior", img: project11Img, images: project11_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },
  { id: 12, title: "Farmland Layout, Kotra", subTittle: "Resedential", img: project12Img, images: project2_Images, description: "This project focuses on creating a contemporary villa that balances aesthetics, functionality, and sustainability. The design integrates open-plan living spaces with natural light and ventilation, incorporating large glass panels and green terraces. The villa’s layout emphasizes connectivity between indoor and outdoor areas while maintaining privacy for the residents. Materials were chosen to complement the natural surroundings, and energy-efficient systems were integrated to minimize environmental impact." },

]


export const teamData = {
  description: {
    title: "About us",
    text: `
      A slight tilt of the Earth’s axis brings about the change of seasons, patterns of light and darkness and the 
      flow of life on our planet. This 25 degrees shift, with a tolerance of half a degree is an unmissable, 
      intrinsic feature of the grand design of nature & the cosmos. 

      25 Degrees Design Shift or 25 DDS is an architecture & design studio aligned with expansive contexts 
      which are deeply connected with the living world. The naming and symbolism behind 25 DDS has grown 
      to create constant ripples on our way of work, guiding us to be conscious, clear and contextual.
    `,
  },
  teamImage: teamImg, // ✅ big group photo
  members: [
    {
      id: "m1",
      name: "AR. SRIKANTH REDDY",
      role: "Principal Architect / Managing Partner",
      img: img1,
    },
    {
      id: "m2",
      name: "AR. NEELESH KUMAR",
      role: "Principal Architect / Managing Partner",
      img: img2,
    },
    {
      id: "m3",
      name: "AR. RAGHURAM",
      role: "Principal Architect / Managing Partner",
      img: img3,
    },
    // {
    //   id: "m4",
    //   name: "AR. RISHIKA ARUTLA",
    //   role: "Senior Architect / Associate",
    //   img: img1,
    // },
    // {
    //   id: "m5",
    //   name: "AR. KAUSTUBH SHARMA",
    //   role: "Senior Architect / Associate",
    //   img: img3,
    // },
    // {
    //   id: "m6",
    //   name: "AR. ISHWAR BAMMIDI",
    //   role: "Senior Architect / Associate",
    //   img: img1,
    // },
    // {
    //   id: "m7",
    //   name: "AR. RUBY MARY VARGHESE",
    //   role: "Senior Architect / Associate",
    //   img: img2,
    // },
    // {
    //   id: "m8",
    //   name: "AR. RUBY MARY VARGHESE",
    //   role: "Senior Architect / Associate",
    //   img: img1,
    // },
    // {
    //   id: "m9",
    //   name: "AR. RUBY MARY VARGHESE",
    //   role: "Senior Architect / Associate",
    //   img: img3,
    // },
  ],
};
