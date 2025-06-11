import React from 'react';
import { motion } from 'framer-motion';

export default function Placement() {
  // First row of brand logos (8 companies)
  const BRANDLOGO1 = [
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622806/microsoft_l2eab8.png', alt: 'Microsoft' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622806/citibank_ekhdgh.png', alt: 'Citibank' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622806/google_kbfkym.png', alt: 'Google' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622806/hotstar_xhji5x.png', alt: 'Hotstar' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622806/guardian_n9tvsu.png', alt: 'Guardian' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622806/blinkit_dhivpj.png', alt: 'Blinkit' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622807/ixigo_xicgwb.png', alt: 'Ixigo' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622808/unitedhealth_k6i3vj.png', alt: 'UnitedHealth' }
  ];

  // Second row of brand logos (10 companies)
  const BRANDLOGO2 = [
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622808/uc_twrr4s.png', alt: 'UC Browser' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622808/swiggy_bydtbv.png', alt: 'Swiggy' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622808/shopify_f7n8ny.png', alt: 'Shopify' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622808/sprinklr_ahj7sf.png', alt: 'Sprinklr' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622807/samsung_ehntgi.png', alt: 'Samsung' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622807/recur_mylvlg.png', alt: 'Recur' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622807/Rentomojo-1_yagt8g.png', alt: 'Rentomojo' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622807/phonepe_ywxtvy.png', alt: 'PhonePe' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622807/park_mzpllg.png', alt: 'Park+' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622806/joshtalk_uisavc.png', alt: 'JoshTalk' }
  ];

  // Third row of brand logos (8 companies)
  const BRANDLOGO3 = [
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622807/oyo_v1b2wd.png', alt: 'OYO' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622805/cleartrip_ui2us1.png', alt: 'Cleartrip' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622805/atlassian_f9gw7j.png', alt: 'Atlassian' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622805/deutsche_ahscga.png', alt: 'Deutsche Bank' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622805/goldman_tcl9sm.png', alt: 'Goldman Sachs' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622805/et_ollca7.png', alt: 'ET' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622804/expedia_fjs3bk.png', alt: 'Expedia' },
    { img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749622805/amazon_b7t3c6.png', alt: 'Amazon' }
  ];

  // Create duplicated arrays for seamless looping
  const logos1 = [...BRANDLOGO1, ...BRANDLOGO1];
  const logos2 = [...BRANDLOGO2, ...BRANDLOGO2];
  const logos3 = [...BRANDLOGO3, ...BRANDLOGO3];

  const rowStyle = "overflow-hidden py-4";

  return (
    <div className="bg-[#0f172a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Placement Network</h1>
          <p className="text-xl text-gray-300">
            Join our program and get placed in your dream company
          </p>
        </div>

        {/* First Row */}
        <div className={rowStyle}>
          <motion.div
            className="flex items-center gap-10"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            {logos1.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.img}
                  alt={logo.alt || 'Company logo'}
                  className="h-16 w-40 object-contain bg-white rounded-xl shadow-md p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row (Reverse Scroll) */}
        <div className={rowStyle}>
          <motion.div
            className="flex items-center gap-10"
            animate={{ x: ['-100%', '0%'] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
          >
            {logos2.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.img}
                  alt={logo.alt || 'Company logo'}
                  className="h-16 w-40 object-contain bg-white rounded-xl shadow-md p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Third Row */}
        <div className={rowStyle}>
          <motion.div
            className="flex items-center gap-10"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {logos3.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.img}
                  alt={logo.alt || 'Company logo'}
                  className="h-16 w-40 object-contain bg-white rounded-xl shadow-md p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}