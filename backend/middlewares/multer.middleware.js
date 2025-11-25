import cloudinary from "../config/cloudinary.js";
import multer from "multer"
import {CloudinaryStorage} from "multer-storage-cloudinary"




const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "countries",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });
export default upload;