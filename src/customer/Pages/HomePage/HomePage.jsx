import React from 'react'
import MainCrosel from '../../components/HomeCarousel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { mens_shirts } from '../../../Data/mens_shirts'
import { womens_saree } from '../../../Data/womens_saree'
import { womens_dress } from '../../../Data/womens_dress'
import { mens_shoes } from '../../../Data/mens_shoes'
const  HomePage = () =>{
    return(
        <div>
        <MainCrosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarosel data={mens_shoes} sectionName={"Men's Shoes"}/>
            <HomeSectionCarosel data={mens_shirts} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel data={womens_saree} sectionName={"Women's Saree"}/>
            <HomeSectionCarosel data={womens_dress} sectionName={"Women's Dress"}/>
           
        </div>
        </div>
    )
}
export default HomePage