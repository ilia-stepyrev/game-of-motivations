import { makeStyles } from "@material-ui/core";
import { Mixins } from './../../constants/mixins';
import { heightRatios, widthRatios } from './../../constants/card-constants';

export const useCardStyles = (cardWidth: number, cardHeight: number) => makeStyles((theme) => {
    const margin = heightRatios.cardMargin * cardHeight;
    const width = cardWidth - margin;
    const height = cardHeight - margin;

    return ({
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%'
        },
        container: {
            ...Mixins.unselectable,
            position: 'relative',
            width,
            height,
            background: '#c6e8f0',
            border: '1px solid',
        },
        button: {
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.5,
            '&:hover': {
                opacity: 1,
            },
        },
        title: {
            color: '#304565',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: width * widthRatios.fontSizeTitle,
            height: height * heightRatios.titleHeight,
        },
        imageWrapper: {
            display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: height * heightRatios.imgHeight,
                marginLeft: height * heightRatios.imgMargin,
                marginRight: height * heightRatios.imgMargin,
    
                '& > img': {
                    ...Mixins.unselectable
                }
        },
        predescription: {
            fontStyle: 'italic',
            position: 'absolute',
            fontSize: width * widthRatios.fontSizeSubdescription,
            bottom: height * (1 - heightRatios.descriptionTop),
            paddingLeft: width * widthRatios.descriptionMargin,
        },
        description: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            background: '#6eccde',
            left: 0,
            right: 0,
            height: height * heightRatios.descriptionHeight,
            top: height * heightRatios.descriptionTop,
            fontSize: width * widthRatios.fontSizeDescription,
            fontWeight: 'bold',
            paddingLeft: width * widthRatios.descriptionMargin,
            paddingRight: width * widthRatios.descriptionMargin,
        },
        postdescription: {
            textAlign: 'center',
            fontStyle: 'italic',
            position: 'absolute',
            width: '100%',
            fontSize: width * widthRatios.fontSizeSubdescription,
            top: height * (heightRatios.descriptionTop + heightRatios.descriptionHeight),
        },
    })
    
});