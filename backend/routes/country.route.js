import {Router} from "express"
import { addCountry, deleteCountry, getCountries, getCountry } from "../controllers/country.controller.js"
import upload from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/add-country").post(upload.single("flag"),addCountry)
router.route("/get-country/:countryId").get(getCountry)
router.route("/get-countries").get(getCountries)
router.route("/delete-country/:countryId").delete(deleteCountry)


export default router 