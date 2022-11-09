import React, {useState} from "react";

const Categories = () => {
  const [isHovering, setIsHovering] = useState(false)
   const handleMouseOver = () => {
     setIsHovering(true);
   };

   const handleMouseOut = () => {
     setIsHovering(false);
   };

  const data = [
    {
      cateImg: "https://i.postimg.cc/pTrpby2Q/loptop.png",
      cateName: "Laptops",
      category: {
        type1: "ChromeBooks",
        type2: "MacBook",
        type3: "HP Envy",
        type4: "EliteBook",
        type5: "HP ENVY x360 15t",
        type6: "Microsoft Surface Go 3",
        type7: "HP ZBook",
        type8: "MacBook Air",
        type9: "MacBook Pro",
        type10: "IdeaPad",
      },
    },
    {
      cateImg: "https://i.postimg.cc/NGyZLYFd/phones.png",
      cateName: "Smart phone",
      category: {
        type1: "Iphone",
        type2: "Samsung Galaxy",
        type3: "LG V40ThinQ",
        type4: "Nokia N95",
        type5: "OPPO",
        type6: "Techno",
        type7: "Lenovo",
        type8: "Google",
        type9: "Amazon",
        type10: "Sony",
      },
    },
    {
      cateImg: "https://i.postimg.cc/xCSDS4y0/camera1.jpg",
      cateName: "Digital camera",
      category: {
        type1: "DSLR Cameras",
        type2: "Mirrorless Cameras",
        type3: "Bridge Cameras",
        type4: "Compact Cameras",
        type5: "Film Cameras",
        type6: "Action Cameras",
        type7: "360 Cameras",
        type8: "Instant Cameras",
        type9: "Medium Format Cameras",
      },
    },
    {
      cateImg: "https://i.postimg.cc/J0nrHFyb/comp.png",
      cateName: "Computer",
      category: {
        type1: "Desktop",
        type2: "Netbooks and Tablets",
        type3: "Handheld Computers",
        type4: "Server",
        type5: "Mainframe",
        type6: "Supercomputer",
      },
    },
    {
      cateImg: "https://i.postimg.cc/G37Ygwjn/game.webp",
      cateName: "Game Console",
      category: {
        type1: "Xbox Series X",
        type2: "PlayStation 5",
        type3: "Nintendo Wii",
        type4: "Sega Genesis",
        type5: "Xbox",
        type6: "Super Nintendo",
        type7: "Nintendo Switch",
        type8: "NES",
        type9: "Nintendo 64",
        type10: " Wii U",
      },
    },
    {
      cateImg: "https://i.postimg.cc/1t4RfTVD/headphone.webp",
      cateName: "Headphones",
      category: {
        type1: "Active Noise-Cancelling Headphones",
        type2: "Bone Conduction Headphones",
        type3: "Classic Earphones",
        type4: "Closed-Back Headphones",
        type5: "Open-Back Headphones",
        type6: "On-Ear Headphones",
        type7: "On-Ear Headphones",
        type8: "Conventional Wireless Earbuds",
        type9: "Modern True Wireless Earbuds",
        type10: "Wired Headphones",
      },
    },
    {
      cateImg: "https://i.postimg.cc/xCqpJrGG/mp3.jpg",
      cateName: "Mp3 player",
      category: {
        type1: "Astell & Kern A&ultima SP2000T",
        type2: "Onkyo DP-X1A",
        type3: "Apple iPod Touch",
        type4: "SanDisk Clip Sport Plus",
        type5: "Astell & Kern A&norma SR25",
        type6: "Cowon Plenue D3",
      },
    },
  ];

  return (
    <>
      <div
        className="category"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
              {isHovering && (
                <ul className="hide">
                  <li>{value.category.type1}</li>
                  <li>{value.category.type2}</li>
                  <li>{value.category.type3}</li>
                  <li>{value.category.type4}</li>
                  <li>{value.category.type5}</li>
                  <li>{value.category.type6}</li>
                  <li>{value.category.type7}</li>
                  <li>{value.category.type8}</li>
                  <li>{value.category.type9}</li>
                  <li>{value.category.type10}</li>
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
