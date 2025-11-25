import {Schema,model} from "mongoose"

const countrySchema = new Schema({
    name :{
        type : String,
        required : true,
        
    },
    capital : {
       type : String,
       required : true
    },
    nativeName:{
        type: String,
        required:true
    },
    region :{
        type : String,
        required : true
    },
    subRegion : {
        type : String,
        required : true
    },
    flag :{
        type : String,
        required : true
    },
    flagImageId : {
        type : String,
        required :true
    },
    currency:{
        type : String,
        required : true
    },
    population :{
        type: Number,
        required : true
    },
    language : {
        type : String,
        required : true
    },
    borderCountry : {
        type : String,
        required : true
    }
})

export const CountryModel = model("country",countrySchema)