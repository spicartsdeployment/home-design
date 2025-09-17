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
import agaraAssociatesLogo from './assets/images/Aagara Associates logo.png'



export const IMAGE_SOURCES = {
  teamImg,
  img1,
  img2,
  img3,
  logo,
  agaraAssociatesLogo,


};

export const Services_Images = {
  servimg1,
  servimg2,
  servimg3,
  servimg4,
}

export const VIDEO_SOURCES = {
  home_vd,
};

export const teamData = {
  description: {
    title: "About Us",
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
