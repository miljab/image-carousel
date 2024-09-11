import { imageCarousel } from "./image_carousel";
import "./styles.css";

const slider = document.querySelector(".slider");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const nav = document.querySelector(".slider-nav");

imageCarousel(slider, previousButton, nextButton, 500, nav);
