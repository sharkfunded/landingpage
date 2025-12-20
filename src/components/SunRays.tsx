import React from 'react';

// Image from Figma node 107:261 ("R 3")
// Cached URL from previous successful fetch
const raysImage = "/assets/R3.png";

export default function SunRays() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
            {/* 
              Using the Figma PNG as requested.
              The original design had this image positioned:
              left: -25.49%, top: -30.73%, width: 122.47%, height: 190.51%
              (data from get_design_context step 19)
            */}
            <div className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none">
                <img
                    alt="Sun Rays"
                    src={raysImage}
                    className="absolute max-w-none"
                    style={{
                        left: '-25.49%',
                        top: '-30.73%',
                        width: '122.47%',
                        height: '190.51%',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </div>
    );
}
