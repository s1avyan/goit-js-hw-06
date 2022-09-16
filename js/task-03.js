const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesFromGallery = document.querySelector(".gallery");

const imagesForGallery = images.map((image) => {
  const listOfImg = document.createElement("li");
  const imageForIns = document.createElement("img");
  imageForIns.src = image.url;
  imageForIns.alt = image.alt;
  imageForIns.width = "1200";
  listOfImg.classList.add("task3-image");
  listOfImg.appendChild(imageForIns);
  return listOfImg;
});
imagesFromGallery.append(...imagesForGallery);
imagesFromGallery.classList.add("task3-images");
