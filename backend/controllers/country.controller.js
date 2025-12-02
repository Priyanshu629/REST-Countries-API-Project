import cloudinary from "../config/cloudinary.js";
import { CountryModel } from "../models/country.model.js";

export const addCountry = async(req,res)=>{
    try {
        
        const {name,capital,nativeName,region,subRegion,currency,population,language,borderCountry}= req.body  
       
        console.log("coming data ",req.body)

       if(!name || !capital || !nativeName || !region || !subRegion || !currency || !population || !language || !borderCountry ){
        return res.status(400).json({success : false , message:"All the fields are required"})
       }


       if(!req.file){
        return res.status(400).json({success:false,message :"flag image is required"})
       }


       let flagImage = req.file?.path;

       let  flagImageId = req.file?.filename;

       const newCountry = await CountryModel.create({
        name,
        capital,
        nativeName,
        region,
        subRegion,
        currency,
        population,
        language,
        borderCountry,
        flag : flagImage,
        flagImageId

       })
       
       if(newCountry){
        return res.status(201).json({success:true,message : "Country added successfully"})
       }

    } catch (error) {

        return res.status(500).json({success : false , message : error.message})
        
    }
}
export const getCountries = async (req,res)=>{
    try {
      
         let regions = []
        let countries = await CountryModel.find({})

       
        for(let country of countries ){
            if(!regions.includes(country.region)){
                regions.push(country.region)
            }
        }

        if(countries){
            return res.status(200).json({success :true,countries,regions})
        }
        
    } catch (error) {
        return res.status(500).json({success:false , message : error.message})
    }
}
export const getCountry = async (req,res)=>{
    try {
          let {countryId} = req.params
        let country = await CountryModel.findOne({_id : countryId})

        if(country){
            return res.status(200).json({success :true,country})
        }
        
    } catch (error) {
        return res.status(500).json({success:false , message : error.message})
    }
}

export const deleteCountry = async (req,res)=>{
    try {
        let {countryId}=req.params
        let {imageId}= req.query
        if(!countryId || !imageId){
            return res.status(400).json({success:false,message:"Both country and Image Id required"})
        }

        
    let isImageDeleted =  await cloudinary.uploader.destroy(imageId);
    

   
    let isCountryDeleted = await CountryModel.deleteOne({ _id: countryId });
        

    if(isCountryDeleted && isImageDeleted){
        return res.status(200).json({success:true,message : "Country Deleted Successfully"})
    }
    } catch (error) {
        
    }
}

export const updateCountry = async(req,res)=>{
    try {
        
        const {name,capital,nativeName,region,subRegion,currency,population,language,borderCountry}= req.body  

        const body = req.body

        const {countryId} = req.params
       
       
     console.log(countryId)

       if(!name || !capital || !nativeName || !region || !subRegion || !currency || !population || !language || !borderCountry || !countryId){
        return res.status(400).json({success : false , message:"All the fields are required"})
       }
  

       console.log(req.body)
      
      
       const hasCountryUpdated = await CountryModel.findOneAndUpdate({
        _id : countryId
       },{
        $set: req.body
       })
       if(hasCountryUpdated){
        return res.status(200).json({success:true,message : "Country updated successfully"})
       }
   

    } catch (error) {

        return res.status(500).json({success : false , message : error.message})
        
    }
}

export const updateImage = async(req,res)=>{
    try {
        const {countryId} = req.params
        const {flagImageId}= req.query

        if(!countryId || !flagImageId || !req.file){
            return res.status(400).json({success : false,message : "country , image Id and file required"})
        }

        let hasImageDeleted = await cloudinary.uploader.destroy(flagImageId)

        let hasImageUpdated = await CountryModel.findOneAndUpdate({
            _id : countryId
        },{
            $set:{
                flag : req.file.path,
                flagImageId : req.file.filename
            }
        }
    )



        if(hasImageDeleted && hasImageUpdated){
            return res.status(200).json({success :true,message : "Image updated successfully"})
        }
       

    } catch (error) {
        return res.status(500).json({success : false , message : error.message})
    }
}

