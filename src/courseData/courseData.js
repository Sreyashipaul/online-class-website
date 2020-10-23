const courseData = [
    {
      id: 1,
      title: "Learn Python Programming Masterclass",
      instructor: "Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's Learn Programming Academy ",
      rating: "4.5/5",
      duration: 22,
      student: 2345,
      img: "https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg?9Y2VS-5BBcdWRBTrsgnXHm0geUCV-Gx2UX3aaCRzLnw1kA5jPA4CRJxqoyo2wkC5qQ94j7Y8pAtBHrU79g3aMKCm9YVb1JZyYJGCljhB4NWJRg7qFSV5onsx-cT5VvM",
      price: 12.99,
    },
    {
      id: 2,
      title: "The Complete Web Developer Course 2.0",
      instructor: "Rob Percival, Codestars by Rob Percival",
      rating: "4.8/5",
      duration: 12,
      student: 23407,
      img: "https://img-a.udemycdn.com/course/240x135/764164_de03_2.jpg?ARbS3-6GKCFJ80CFAVSuhYyN3UqFOlvb-ZhMIHy-GlM42w867pkgDVwPTi1fVR7qc8u4qgcMvXS92I6v_DHuUj8_PmOOnRUdsxLbzw6DNL9TWqWC1PkN25PcbG_Z-Dc",
      price: 12.99,
    },
    {
      id: 3,
      title: "Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification",
      instructor: "Subham Ganer",
      rating: "3.6/5",
      duration: 16,
      student: 235,
      img: "https://img-a.udemycdn.com/course/240x135/533682_c10c_4.jpg?YuObDKtO0HFE3IkEgmCGG5L1p4t8IQTVgmMFOy4PII0mf7g4FHTSlDZiZ-3YCcvrEp0uxd-IaDSd7Y1e-0Q_0gtnTaVTIGSNxasQF2smYtgkYGV_u2Yj2zqWKClOtRQ",
      price: 19,
    },
    {
      id: 4,
      title: "The Complete Java Developer Course",
      instructor: "Hussein Alrubaye",
      rating: "4.2/5",
      duration: 42,
      student: 2040,
      img: "https://img-a.udemycdn.com/course/240x135/1001946_d059_15.jpg?FGfzgfrOA5fMGeXKvF7sgwyTa8vNUmrDkxwFDdpjMyzH0ijCHVKy3EXnPvjvzNbQ3dJyNkWj_eZ4lbkImNBvaD9QN_l5jSlT7KfajRxrSJSF5H09hhMNu0FTHr8QXh3YPQ",
      price: 12.99,
    },
    {
      id: 5,
      title: "Full Stack Web Development HTML, CSS, Bootstrap and React JS",
      instructor: "Oak Academy",
      rating: "4.1/5",
      duration: 5,
      student: 3560,
      img: "https://img-a.udemycdn.com/course/240x135/3519882_25ba_3.jpg?BmbkbjNBfMIRl4ljEw9jXxo8_DxJrpA3Kgf844m1Fp6vdjz8Jd4qEQL4Ld8PYpb2RpgtDnhz5yLdM_ZOpG0dCgTtlF6-Oqkcj9YhMgd9VlXI_Nf5mjZbQlorswreOaJI",
      price: 12.99,
    },
    {
      id: 6,
      title: "Web Design for Beginners: Real World Coding in HTML & CSS",
      instructor: "Brad Schiff",
      rating: "4.2/5",
      duration: 2,
      student: 440,
      img: "https://img-a.udemycdn.com/course/240x135/246154_d8b0_3.jpg?SZMrUYkpGtFOSEq8alBpiBDsc2Lqqonusjggpx8FnFg4W-OYqf_uO81ROp1GmRoSOsCIkB5G3Tj2Cf7Ya-Pa8yirlTq92LAa9vjXeqihK7FPCYXmaIH_tr9Gi3P5YBE",
      price: 18.99,
    },
    {
      id: 7,
      title: "The Complete Node.js Developer Course (3rd Edition) ",
      instructor: "blue lime solution",
      rating: "4.8/5",
      duration: 42,
      student: 205567,
      img: "https://img-a.udemycdn.com/course/240x135/922484_52a1_8.jpg?2EsJzaC6OPtkBN8s6ngd5ltaGQfoH1lo1SZ2Pf5ep7ReHasT-V0UpkZHeWVUX4fWsNiitLSzXatna-GjSfBsSp6bQXd5BJthuU93RHzbYwuTHADbssX7e-SHfbP50HA",
      price: 12.99,
    },
    {
      id: 8,
      title: "Beginning C++ Programming - From Beginner to Beyond",
      instructor: "Tim Buvhalka's Learn Programming Academy , Frank Mitropoulous",
      rating: "4.1/5",
      duration: 25,
      student: 111442,
      img: "https://img-a.udemycdn.com/course/240x135/1576854_9aeb.jpg?5GBNUGILPHGFAuBGTZlP834ef7-JpUj8U38DPZNMdbJXYJyi4JGIM35WqHFYH6ZoAo3LHYhuJSaM0ArRaNOOQwfvpDb9KnyB4VBLc14lp-LjaN7VApEAeKriuaNTFw",
      price: 15,
    },
    {
      id: 9,
      title: "Wordpress for Beginners - Master Wordpress Quickly",
      instructor: "Andrew Williams",
      rating: "4.7/5",
      duration: 6,
      student: 65846 ,
      img: "https://img-a.udemycdn.com/course/240x135/355212_948a_10.jpg?aMijm-KEXGaN8g4hQ6gDA1G4zPVRYVMoJueFUSwPA7ryM7DByLQK2HKyTfL4sPkpzRA1WnDyNp65ju7UyswD687d5kqHXGRNth8vpWD3nHW2i3qi5t6_5ZXYyHFP61vZ",
      price: 19.9,
    },
    {
      id: 10,
      title: "The Complete Android N Developer Course",
      instructor: "Rob Percival, Marc Strock ,Coderstarts by Rob Pervial",
      rating: "4.6/5",
      duration: 32,
      student: "145,758",
      img: "https://img-a.udemycdn.com/course/240x135/951618_0839_2.jpg?Xge6UtJi8HkbMwmkfIxDLphf5ghpwDmO-i5ViaMJ8E5Ylof085drSwqT3irfheeM9kK_1PYriprCRzgsIB85F0kGniZ8khBqYgcvMnpiBBOmDuvaYlXmStB_m4AivZs",
      price: 13.9,
    },
    {
      id: 11,
      title: "Algorithms and Data Structures in Python",
      instructor: "Holozer Balazs",
      rating: "3.6/5",
      duration: 6,
      student: "15,914",
      img: "https://img-a.udemycdn.com/course/240x135/469292_6c3e_5.jpg?NEWi-GrjBtRq9FDJZmZNYReyfN9uuUhAKFRloD6JkzJke9G8Ic4YoSTWgCYd3J2-5iPcVOmmpcW-EmZQ-ourXvp4Aqqudy2DwAsXfxW96agi-bTqx0li7biQs5WJh3A",
      price: 13.99,
    },
    {
      id: 12,
      title: "The Complete React Developer Course (w/ Hooks and Redux)",
      instructor: "PK Akshay",
      rating: "4.2/5",
      duration: 28,
      student: "62,119",
      img: "https://img-a.udemycdn.com/course/240x135/1286908_1773_5.jpg?p9VCkWEdBG2H4kEstXB2bYdb6RyYTkdIw7koQMM_637CyUD5WIR3oN8dhs-VEscW_B8ICFfElGP1Zfab8RM7z-q0n3BMk9ZqIS44X94H3PBjyHW0WCEN6OspXFeoeAoT",
      price: 15.99,
    },
    {
      id: 13,
      title: "Architectural CAD Modelling and Rendering for Beginners",
      instructor: "Thomas McDonald",
      rating: "4.6/5",
      duration: 12,
      student: 315,
      img: "https://img-a.udemycdn.com/course/240x135/2973770_c1c0_7.jpg?NuqPLijuRjBrejWNFCwLDb5bCI69JNR1onOmvCAcapC_izRsSA6IPpAmbKhdb-nAHfZEnJaZUGO59PzNKdoJyJKaP6EHJd-e31Al4MeMzxM8Sfe1Al_Pjn__iEPm3rEU",
      price: 12.99,
    },
    {
      id: 14,
      title: "Freelance Graphic Design: A short Guidebook",
      instructor: "Ryan Devis",
      rating: "4.8/5",
      duration: 45,
      student: "4,254 ",
      img: "https://img-a.udemycdn.com/course/240x135/2956958_5930.jpg?QEhC_C0Y0kryasQppM_vGeLUw_Oj8FaXlkqADoU24meX4cyT8H_yZG3uP7ORZZqmwRHgz1zuP04xh5FDQrsF7M-On1K44WKXLdOlj0Sbk3DMJXI8Qoj44agBdmpihQ",
      price: 19.9,
    },
  
    {
      id: 15,
      title: "Bootstrap 4 From Scratch With 5 Projects",
      instructor: "Brad Traversy",
      rating: "4.5/5",
      duration: 32,
      student: "52,742 ",
      img: "https://img-a.udemycdn.com/course/240x135/1313502_b57f_2.jpg?u-xw9MuzxR-S_jpSeHF-uw7e6i-q7uOCBAWxcFLLNBAdomCRosTGjRBtu--axeYDP2E6J1H4Z2zT-0IXq6jxh94Y6MJcFiB3BKzDoeetLirZ980HD8bOz0KX14ASE8SU",
      price: 13.99,
    },
  ];
  
  export default courseData;