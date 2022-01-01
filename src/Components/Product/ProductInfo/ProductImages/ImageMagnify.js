import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ReactImageMagnify from 'react-image-magnify';
import useWindowDimensions from "Utilis/Screen";

const ImageMagnify = ({ images, currentImage }) => {
    const [imageWidth, setWidth] = useState(420);
    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width >= 992) {
            setWidth(Math.floor(width / 3.415));
        } else if (width >= 480 && width < 992) {
            setWidth(Math.floor(width / 1.6020833));
        } else if (width < 480) {
            setWidth(Math.floor(width / 1.24137931));
        }
    }, [width])
    console.log(width);
    return (
        <Box>
            <Box>
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            src: images[currentImage].url,
                            width: imageWidth,
                            height: 525
                        },
                        largeImage: {
                            src: images[currentImage].url,
                            width: 1500,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '162%',
                            height: '100%'
                        }
                    }}
                    style={{
                        borderRadius: "5px"
                    }}
                    imageStyle={{
                        borderRadius: "5px",
                    }}
                    imageClassName="SmallImages"
                    enlargedImageContainerStyle={{
                        zIndex: "999999",
                        borderRadius: "5px"
                    }}
                    enlargedImageStyle={{
                        borderRadius: "5px",
                    }}
                />
            </Box>
        </Box>
    );
};
export default ImageMagnify;