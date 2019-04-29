import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToolbarButton from "../ToolbarButton.jsx";

/**
 * @param { FsLightbox.componentsStates.isFullscreenOpen | { get:(): boolean, set: function(boolean)}} isFullscreenOpenState
 * @param { FsLightbox.core.fullscreenToggler.turnOffFullscreen | Function } turnOffFullscreen
 * @param { FsLightbox.core.fullscreenToggler.turnOnFullscreen | Function } turnOnFullscreen
 * @param turnOnFullscreen
 */
function FullscreenButton(
    {
        fsLightbox: {
            componentsStates: {
                isFullscreenOpen: isFullscreenOpenState
            },
            core: {
                fullscreenToggler: {
                    turnOffFullscreen,
                    turnOnFullscreen
                }
            }
        }
    }
) {
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
    isFullscreenOpenState.get = () => isFullscreenOpen;
    isFullscreenOpenState.set = setIsFullscreenOpen;

    const fullscreen = () => {
        (isFullscreenOpen) ?
            turnOffFullscreen() :
            turnOnFullscreen();
    };

    return (
        <ToolbarButton
            onClick={ fullscreen }
            viewBox={ (isFullscreenOpen) ?
                "0 0 950 1024" :
                "0 0 18 18"
            }
            size={ (isFullscreenOpen) ?
                "24px" :
                "20px"
            }
            d={ (isFullscreenOpen) ?
                "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z" :
                "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
            }
            title="Fullscreen"
        />
    );
}

FullscreenButton.propTypes = {
    fsLightbox: PropTypes.object.isRequired
};

export default FullscreenButton;