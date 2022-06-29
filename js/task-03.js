const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const allImages = document.querySelector(".gallery");
  allImages.style.display = "flex";
  allImages.style.flexDirection = "column";
  allImages.style.listStyle = "none";
  allImages.setAttribute("flex-direction", "column");

const imagesList = ({url, alt}) => {
  return `<li><img src = ${url} alt = '${alt}' width="300" height="175"></li>`;
};

const addImg = images.map(imagesList).join('');

allImages.insertAdjacentHTML("afterbegin", addImg);

