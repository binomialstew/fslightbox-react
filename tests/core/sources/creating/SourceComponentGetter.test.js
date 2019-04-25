import React from 'react';
import { SourceComponentGetter } from "../../../../src/core/sources/creating/SourceComponentGetter";
import { IMAGE_TYPE, INVALID_TYPE, VIDEO_TYPE, YOUTUBE_TYPE } from "../../../../src/constants/coreConstants";
import Image from "../../../../src/components/sources/proper-sources/Image";
import Video from "../../../../src/components/sources/proper-sources/Video";
import Youtube from "../../../../src/components/sources/proper-sources/Youtube";
import Invalid from "../../../../src/components/sources/proper-sources/Invalid";

const fsLightbox = {};
const sourceComponentGetter = new SourceComponentGetter(fsLightbox);

describe('Image', () => {
    beforeAll(() => {
        sourceComponentGetter.setSourceIndex(0);
        sourceComponentGetter.setSourceType(IMAGE_TYPE);
    });

    it('should return Image component with right props', () => {
        expect(sourceComponentGetter.getSourceComponent()).toEqual(
            <Image
                fsLightbox={ fsLightbox }
                index={ 0 }
            />
        );
    });
});

describe('Video', () => {
    beforeAll(() => {
        sourceComponentGetter.setSourceIndex(40);
        sourceComponentGetter.setSourceType(VIDEO_TYPE);
    });

    it('should return Video component with right props', () => {
        expect(sourceComponentGetter.getSourceComponent()).toEqual(
            <Video
                fsLightbox={ fsLightbox }
                index={ 40 }
            />
        );
    });
});

describe('Youtube', () => {
    beforeAll(() => {
        sourceComponentGetter.setSourceIndex(5);
        sourceComponentGetter.setSourceType(YOUTUBE_TYPE);
    });

    it('should return Youtube component with right props', () => {
        expect(sourceComponentGetter.getSourceComponent()).toEqual(
            <Youtube
                fsLightbox={ fsLightbox }
                index={ 5 }
            />
        );
    });
});

describe('Invalid', () => {
    beforeAll(() => {
        sourceComponentGetter.setSourceIndex(30);
        sourceComponentGetter.setSourceType(INVALID_TYPE);
    });

    it('should return Invalid component with right props', () => {
        expect(sourceComponentGetter.getSourceComponent()).toEqual(
            <Invalid
                fsLightbox={ fsLightbox }
                index={ 30 }
            />
        );
    });
});
