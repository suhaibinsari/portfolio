import { StaticImageData } from "next/image"

export type Project = {
    id:number,
    title:string,
    category:string,
    image: string | StaticImageData,
    link:string

}

