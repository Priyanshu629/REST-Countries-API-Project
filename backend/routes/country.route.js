import {Router} from "express"
import { addCountry, deleteCountry, getCountries, getCountry, updateCountry, updateImage } from "../controllers/country.controller.js"
import upload from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/add-country").post(upload.single("flag"),addCountry)
router.route("/get-country/:countryId").get(getCountry)
router.route("/get-countries").get(getCountries)
router.route("/delete-country/:countryId").delete(deleteCountry)
router.route("/update-country/:countryId").patch(updateCountry)
router.route("/update-image/:countryId").patch(upload.single("flag"),updateImage)


export default router  