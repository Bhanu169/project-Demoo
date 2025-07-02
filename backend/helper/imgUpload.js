import fs from "fs";

export const imgUploaddddd=(file,folder)=>{
    try {

        // console.log(file,"file")
        // console.log(folder,"folder")
        const fileExtensionName=file.name.split(".")[1]
        // console.log(fileExtensionName,"fileExtensionName")
        const firstName=Math.random().toString(32).substring(2,32)
        // console.log(firstName)
        const fullName=`${firstName}.${fileExtensionName}`
        // console.log(fullName,"fullName")
        file.mv(`public/image/${folder}/${fullName}`)
        return fullName
    } catch (error) {
        
        console.log(error)
    }
}