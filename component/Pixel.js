import React from 'react'
import { Image } from 'react-native'

function Pixel({src}) {
    return (
        <Image style={{width: 140, height:140, margin: 1}} source={{uri: src}} />
    )
}

export default Pixel
