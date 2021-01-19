import React, { FC, HTMLAttributes } from 'react';


export interface ISVG extends HTMLAttributes<SVGSVGElement> {
    path: string;
}

const SVG: FC<ISVG> = ({
    title,
    path,
    role = 'img',
    ...rest
}) => (
    <svg
        role={role}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...rest}
    >
        <title>{title}</title>
        <path d={path}></path>
    </svg>
);

export default SVG;