import React from 'react'
import { View } from 'react-native'
import Pixel from './Pixel'
import PixelImage from "../assets/icon.png";

function PixelGrid() {
    return (
        <View style={{flexDirection: "row", flexWrap:"wrap", justifyContent: "space-between"}}>
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 10}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 20}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 30}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 40}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 50}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 60}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 100}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 120}`} />
            <Pixel src={`https://source.unsplash.com/random/300x200?sig=${Math.random() * 140}`} />


        </View>
    )
}

export default PixelGrid
